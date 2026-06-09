# Tech Secure — SEO Launch Checklist

Your site is now a small, locally-targeted SEO site: one hub page plus 7 dedicated
landing pages, each built to rank for a specific search.

## Files (upload ALL of them to the same folder)
- `index.html` — home / hub (target: "security camera installation Los Angeles")
- `styles.css` — shared design (every page links to this — don't rename it)
- `commercial-security-camera-systems.html`
- `security-cameras-sherman-oaks.html`
- `security-cameras-downtown-los-angeles.html`
- `security-cameras-pasadena.html`
- `security-cameras-santa-monica.html`
- `security-cameras-glendale.html`
- `security-cameras-burbank.html`
- `sitemap.xml`
- `robots.txt`
- `emblem.png` — logo mark shown in the header/footer
- `favicon.ico` + `apple-touch-icon.png` — browser tab & mobile home-screen icons
- `logo.png` — your logo for Google's structured data / knowledge panel
- `og-image.jpg` — the image shown when your site is shared on social/text

## Step 1 — Fill in the placeholders (search every file for `✏️` or these strings)
1. `https://www.techsecurela.com` → your real domain (appears in canonicals, sitemap, schema, social tags)
2. Quote form email delivery — ✅ already set up (Web3Forms; submissions email you)
3. `123 Example St, Suite 100 … 90001` → your REAL address — keep it byte-for-byte identical everywhere
4. `34.052235 / -118.243683` → your real lat/long (look up your address on Google Maps)
5. `sameAs` social URLs + `g.page` Google profile link (in `index.html` schema)
7. Review links — `YOUR_PLACE_ID`, `YOUR_REVIEW_LINK`, and the Nextdoor page URL.
   See **`REVIEWS_SETUP.md`** for the full live-reviews widget setup.
6. Brand images are now included (`emblem.png`, `favicon.ico`, `apple-touch-icon.png`,
   `logo.png`, `og-image.jpg`) — just upload them to the same folder. No need to create your own.

⚠️ Reviews: only keep the `aggregateRating` / `review` markup if those are genuine,
verifiable reviews. Faking review counts can trigger a Google penalty. The names used
on the neighborhood pages are illustrative — swap in real customer reviews.

## Step 2 — After it's live
1. **Google Search Console** — verify the site, submit `sitemap.xml`, request indexing for each page.
2. **Bing Webmaster Tools** — same (covers Bing + helps other engines).
3. Confirm the site loads over **HTTPS** and is fast (it's lightweight, so it should be).

## Step 3 — The off-page work (this is what actually wins local rankings)
On-page is now handled. Rankings for "near me" / local searches are driven mostly by:
1. **Google Business Profile** — claim it, complete every field, add photos, set your
   service area, and post regularly. This is the single biggest factor for the Map Pack.
2. **Reviews** — actively ask happy customers for Google reviews. Volume + recency matters.
3. **Citations** — list your identical Name/Address/Phone on Yelp, Angi, BBB, Nextdoor,
   and local directories.
4. **Backlinks** — local press, neighborhood blogs, partner/supplier sites.

## Honest expectation-setting
No one can guarantee "#1 on every search." This setup gives you the strongest possible
*on-page* foundation and covers far more search terms than a single page could. Combined
with a strong Google Business Profile and steady reviews, it's how local service
businesses realistically climb. New pages typically take a few weeks to a few months to
gain traction as Google indexes and trusts them.

## Want to expand later?
Adding another neighborhood is easy: copy a `security-cameras-*.html` file, change the
content/title/meta/schema for the new area, add it to `sitemap.xml`, and link to it from
the home page's "Areas We Serve" section and the footer.
