"""Check article metadata, local links/assets, blog discovery and sitemap membership.

Run from any directory: python3 scripts/check_content.py [blog-example.html ...]
With no arguments, checks every blog article. No network or dependencies required.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import datetime
import json
import re
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://www.360techsecure.com/"


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.refs, self.ids, self.meta, self.canonical = [], set(), {}, []
        self.h1 = 0
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if "id" in a:
            self.ids.add(a["id"])
        if tag == "h1":
            self.h1 += 1
        if tag == "meta":
            self.meta[a.get("name", a.get("property"))] = a.get("content")
        if tag == "link" and a.get("rel") == "canonical":
            self.canonical.append(a.get("href"))
        if tag in ("a", "img", "link", "script"):
            ref = a.get("href") or a.get("src")
            if ref:
                self.refs.append(ref)


def schemas(text):
    return [json.loads(raw) for raw in re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', text, re.S)]


def main():
    errors = []
    listing = (ROOT / "blog.html").read_text()
    blog = next(d for d in schemas(listing) if d.get("@type") == "Blog")
    entries = blog["blogPost"]
    urls = [d["url"] for d in entries]
    sitemap = ET.parse(ROOT / "sitemap.xml")
    locations = [n.text for n in sitemap.findall(".//{*}loc")]
    for label, values in (("blog schema", urls), ("sitemap", locations)):
        if len(values) != len(set(values)):
            errors.append(f"Duplicate URLs in {label}")
    files = [ROOT / p for p in sys.argv[1:]] or sorted(ROOT.glob("blog-*.html"))
    for path in files:
        text = path.read_text()
        page = Page(text)
        expected = BASE + path.name
        def require(condition, message):
            if not condition:
                errors.append(f"{path.name}: {message}")
        require(page.h1 == 1, "must have exactly one H1")
        require(page.canonical == [expected], "incorrect canonical URL")
        require(bool(page.meta.get("description")), "missing description")
        require(page.meta.get("og:url") == expected, "incorrect social URL")
        require(expected in urls and expected in locations, "missing from blog schema or sitemap")
        require(path.name in Page(listing).refs, "missing blog card")
        data = next(d for d in schemas(text) if d.get("@type") == "BlogPosting")
        require(data["url"] == expected, "incorrect article schema URL")
        for field in ("datePublished", "dateModified"):
            require(datetime.date.fromisoformat(data[field]) <= datetime.date.today(), f"future {field}")
        require(data["dateModified"] >= data["datePublished"], "modified date precedes publication")
        for ref in page.refs:
            u = urlsplit(ref)
            if u.scheme or u.netloc:
                continue
            target = ROOT / unquote(u.path.lstrip("/")) if u.path else path
            if target.is_dir():
                target = target / "index.html"
            require(target.is_file(), f"missing local link or asset: {ref}")
            if target.is_file() and u.fragment and target.suffix == ".html":
                require(unquote(u.fragment) in Page(target.read_text()).ids, f"missing anchor: {ref}")
    if errors:
        print("\n".join(errors))
        return 1
    print(f"PASS: {len(files)} articles; local links, assets, metadata, dates, blog and sitemap.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
