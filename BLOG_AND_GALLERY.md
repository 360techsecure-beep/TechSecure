# Blog & Gallery — How to Add Content

Both are now live and linked in your menu, footer, and sitemap:
- **Blog** → `blog.html` (with **24 SEO-optimized articles**, dated weekly since January)
- **Featured images** → 24 branded `.jpg` files in the same root folder (one per post)
- **Our Work gallery** → `gallery.html`

Because the site is static (no server), you add content by editing files and uploading them
to GitHub — the same upload flow you use to deploy. Here's how to do each.

---

## Adding job photos to the gallery

### 1. Create a `gallery/` folder and upload photos
In your GitHub repo, add a folder named **`gallery`** (all lowercase) and upload your job
photos into it (GitHub: **Add file → Upload files**, or drag them in).
- Use `.jpg`, landscape orientation works best.
- Resize to about **1600px wide** so pages load fast (phone photos are often huge).
- Before/after pairs and clean "finished install" shots look great.

### 2. List each photo in `gallery.html`
Open `gallery.html`, find **`ADD YOUR JOB PHOTOS HERE`**, and add one line per photo
(newest first):
```javascript
var photos = [
  { src: "gallery/sherman-oaks-install.jpg", caption: "4-camera install — Sherman Oaks home" },
  { src: "gallery/dtla-storefront.jpg",      caption: "Storefront surveillance — Downtown LA" }
];
```
Save, upload, done. The photos appear in a grid and enlarge when clicked. Until you add at
least one, visitors see a tidy "coming soon — call for references" panel (nothing looks
broken).

> **Want to upload from your phone with a real button instead?** That needs an image host
> like **Cloudinary** or **Uploadcare** (free tiers available). Tell me and I'll wire one
> in — then you'd upload from your phone and it appears automatically.

---

## Adding a new blog post

Each post is its own page (that's what lets Google rank it). To add one:

### 1. Copy an existing post file
Duplicate one of the post files (e.g. `blog-stop-porch-pirates.html`) and rename it using
**lowercase-words-with-hyphens**, e.g. `blog-best-cameras-for-apartments.html`.

### 2. Edit the new file
Change these near the top: the `<title>`, the `<meta name="description">`, the
`<link rel="canonical">` URL, the date and category in the `post-meta` line, the `<h1>`,
and the article text in the `prose` section. Keep the rest as-is.

### 3. Add it to the blog list
Open `blog.html`, copy one `<a class="blog-card">…</a>` block, and update its link
(`href`), title, excerpt, and date to point to your new post. Put newest at the top.

### 4. Give it a featured image
Each post shows a featured image (used on the page, the blog cards, and when shared on
social). The 24 starter posts come with branded `.jpg` images in the main folder (named like the post). For a new
post, either add a photo to the folder and point the post's `<img class="article-img">`
and its card image at it, or reuse an existing one. Real job photos make great post images.

### 5. Add it to the sitemap
In `sitemap.xml`, copy a `<url>…</url>` block and change the `<loc>` to your new post's URL.

That's it. (If this feels fiddly, just tell me the topic and I'll generate a finished,
SEO-optimized post for you to drop in.)

---

## Notes
- The 3 starter articles are real, useful content written to attract local searches
  (porch-pirate tips, camera placement, wired vs. wireless) — fresh blog content helps SEO.
- New posts/photos go live the moment you upload them to GitHub (Vercel auto-redeploys).
- Keep everything in the same root folder, and the `gallery/` folder alongside the pages.
