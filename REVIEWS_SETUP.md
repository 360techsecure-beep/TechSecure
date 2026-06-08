# Live Reviews — Setup Guide

Your site now pulls reviews **live** instead of using hard-coded quotes. I removed the
placeholder testimonials and the placeholder star-rating schema so nothing fake ships.
Once you connect the widget below, your real Google reviews appear automatically and stay
up to date — no editing the site again.

---

## Step 1 — Create a free Google reviews widget (≈5 min, no coding)

**Recommended: Featurable** (free, unlimited views, lifetime free plan)
1. Go to **featurable.com** and create a free account.
2. Click **Create Widget** → search your business or paste your **Google Place ID**.
3. Pick a layout (a carousel or grid works well for a service business).
4. Optionally filter to show only 4–5 star reviews.
5. Click **Get the code** and copy the small `<script>` snippet it gives you.

*Alternative: Elfsight* (elfsight.com/google-reviews-widget) — also easy, connects with
your Place ID and no API key. Its free tier has a monthly view limit; unlimited is ~$6/mo.
*Other solid options: EmbedSocial (forever-free tier) and WiserReview.*

> **Tip:** Get your Google Place ID at
> https://developers.google.com/maps/documentation/places/web-service/place-id

## Step 2 — Paste the widget into the site
1. Open `index.html` and find this block (search for `google-reviews`):
   ```html
   <div id="google-reviews" class="reviews-mount">
     <!-- PASTE WIDGET EMBED CODE HERE -->
     <div class="reviews-fallback"> ... </div>
   </div>
   ```
2. Paste your widget code where it says **PASTE WIDGET EMBED CODE HERE**.
3. Delete the `<div class="reviews-fallback"> ... </div>` block (that's the temporary
   placeholder shown until your widget is live). Keep it if you want a fallback while the
   widget loads — your choice.

## Step 3 — Update the review links (so the buttons work everywhere)
Search every `.html` file for these and replace them:
- `YOUR_PLACE_ID` → your Google Place ID (used in "Read our Google reviews" buttons)
- `YOUR_REVIEW_LINK` → your Google "leave a review" short link (`g.page/r/...`)
  - Get it: Google Business Profile → **Ask for reviews** → copy the link.
- `nextdoor.com/pages/YOUR_PAGE/` → your real Nextdoor page URL

## Step 4 — Star ratings in Google search results (schema)
The visual widget alone does **not** put gold stars on your Google listing — those come
from `AggregateRating` JSON-LD. Two clean options (don't do both):

**Option A (preferred):** In your widget settings, enable **structured data / schema
output** (Featurable and Elfsight have a toggle; WiserReview/EmbedSocial emit it by
default). The widget then publishes your *real* rating automatically.

**Option B (manual):** Once you have real Google reviews, add this to `index.html` inside
the LocalBusiness `<script type="application/ld+json">` block, using your **real** numbers:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "37",
  "bestRating": "5"
}
```
⚠️ Only ever use real, verifiable numbers that match what's on your Google profile.
Don't run Option A and B at the same time (two rating sources can conflict).

---

## Getting reviews to display (the part that actually fills the widget)

A widget is only as good as the reviews behind it. Send this right after each install:

**Text / SMS (send same day):**
> Hi [name] — thanks for choosing Tech Secure! It was a pleasure getting your cameras set
> up. If you're happy with the work, a quick Google review would mean a lot and helps other
> LA neighbors find us: [your g.page/r/ link]. Thank you! — [your name], Tech Secure

**Email follow-up (if no review after ~3 days):**
> Subject: How are the new cameras working out?
>
> Hi [name],
>
> Just checking in now that your system's been running a few days — everything working the
> way you'd hoped? If you've got 30 seconds, a short Google review would genuinely help our
> small local team: [your g.page/r/ link]
>
> And if anything's not perfect, reply here first — I'd rather fix it than have you leave
> less than five stars. Thanks again for trusting us with your home/business.
>
> [your name] · Tech Secure · (747) 336-2737

**Tips that work:** ask in person at the end of the job too ("would you mind leaving a
quick review?"), make the link a QR code on your invoice/business card, and never offer
anything in exchange for a review — that violates Google's policy and the FTC rules.
