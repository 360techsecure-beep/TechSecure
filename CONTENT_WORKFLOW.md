# Tech Secure 360 content workflow

## Publishing

The owner authorized automatic article publishing on September 24, 2026.
The initial cadence is one new or substantially improved article per week,
scheduled in the Codex task for Tuesdays at 9 AM America/Los_Angeles.
The schedule lives in Codex, not in this repository or Vercel. It uses the
local checkout and available GitHub access. There is no separate AI API backend.

Before a run, fetch the current GitHub main branch. Preserve unrelated changes;
use an isolated worktree when needed. Do not force push. Inspect recent commits
and the blog index to avoid repeating work after a retry.

1. Pick one topic from the backlog below, checking existing pages first.
2. Research current claims using primary sources. Prefer practical answers to
   questions customers ask when choosing an installation or repair service.
   Search-volume and ranking estimates are unknown unless backed by actual data.
3. Write in plain English. Use verified business facts from the site. Do not
   invent job stories, customer reviews, certifications, prices, warranties,
   performance statistics, or claims of personal experience. No ranking promises.
4. Reuse the current article layout, navigation, contact form and analytics.
   Create a unique, topic-specific graphic for every new or substantially updated
   post using the imagegen skill. Use a consistent midnight navy, mint and cyan
   palette and restrained Tech Secure 360 branding. Match the subject to the
   actual article: comparisons, explanatory illustrations or useful diagrams.
   Do not reuse generic photos or merely swap a headline on the same image.
   Do not present generated imagery as a real customer installation. Save the
   asset in the repository, inspect its accuracy and mobile crop, and update
   the article hero, blog card, social images and BlogPosting image together.
   Use descriptive alt text. If image generation fails, retain a draft and
   report the failure instead of publishing with a reused image. Link relevant service
   pages and related guides. Cite sources supporting technical or legal claims.
5. Update all title, description, canonical, social and structured-data fields.
   Add the article to blog.html's cards and Blog schema, plus sitemap.xml.
   Use the actual publication date. When improving an article, preserve its URL
   and original datePublished; change dateModified only for substantive edits.
6. Run `python3 scripts/check_content.py` and `git diff --check`. Inspect the
   article in a browser at desktop and phone widths. Never submit a real lead
   form as a test. Review the diff for unrelated changes.
7. Commit only intended files and push a fast-forward update to main. GitHub's
   existing Vercel connection handles deployment. A rejected push requires
   fetching and reconciling changes, not forcing them.
8. Verify the live article, blog listing, image and sitemap. If deployment is
   delayed, inspect commit deployment status. Report an unverified release as
   unverified; do not publish a duplicate article on retry.

## Initial findings

The repository contained 36 articles before this workflow. Many early posts are
short outlines. Their length alone is not an SEO defect; useful missing detail,
unsupported claims and overlap are the reasons to improve them. The rental and
apartment articles overlap, while the apartment article does not address an
owner planning shared-building coverage. No dedicated installation-cost guide
or recorder-not-recording guide was present.

Analytics code is present, but access to analytics and Search Console reports
has not been established. We cannot currently measure leads, rankings, search
demand or organic traffic gains. Do not interpret a successful publish as proof
of traffic improvement.

## Topic backlog

| Order | Action | Topic and useful angle |
| --- | --- | --- |
| 1 | Published September 24 | Installation quote factors in Los Angeles; compare complete scopes, no invented prices |
| 2 | New | DVR/NVR not recording: distinguish live view from saved footage, check schedules and storage without erasing recordings |
| 3 | Improve | Wired vs. wireless: explain power, local recording, cable routes and remote access separately |
| 4 | New | Apartment-building planning for owners: entrances, mail areas, permissions, access to recordings; verify legal statements |
| 5 | Improve | Choosing an installer: practical quote checklist and handover checks, no unsupported certification claims |
| 6 | Improve | Recording retention: replace generic time recommendations with a storage-planning explanation and primary sources |

Choose a different useful topic if research or newly available performance data
supports it. Do not manufacture near-identical city pages for keyword variations.

## Editorial reference

Google recommends useful, reliable content and explicitly says it has no preferred
word count: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

## Publication log

- 2026-09-24: Added installation-cost guide, blog card, Blog schema and sitemap
  entry. Created a unique installation-cost illustration after the owner requested custom graphics. Added content validation and this workflow.
