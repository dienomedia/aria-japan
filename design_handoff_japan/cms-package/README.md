# Aria Korea blog — CMS content package

This folder holds the pieces for Phase 2 + Phase 3 of the Decap CMS setup
(see `design_handoff_decap_cms/INTEGRATION-DECAP-CMS.md` for the full plan).
It's meant to be merged into the real site project once it exists as a
buildable static site (Astro recommended), at these exact paths:

```
public/admin/index.html   ← copy from cms-package/public/admin/index.html
public/admin/config.yml   ← copy from cms-package/public/admin/config.yml
public/uploads/*          ← copy from cms-package/public/uploads/
src/content/blog/*.md     ← copy from cms-package/src/content/blog/
```

## What's inside

- **3 migrated posts** as Markdown with front matter (title, category, date,
  cover, draft), converted 1:1 from the current `blog.dc.html` seed content:
  - `rhinoplasty-in-korea-a-complete-2026-guide.md`
  - `the-first-7-days-after-surgery-what-to-expect.md`
  - `can-i-just-rinse-with-water-in-the-morning.md`
- **Cover images** for the two posts that have one, copied into
  `public/uploads/` and referenced by the `/uploads/...` path Decap expects.
- **`admin/index.html`** — the Decap CMS entry point + the Identity login
  redirect script.
- **`admin/config.yml`** — the blog collection schema: Title, Category,
  Publish date, Cover image, Body (Markdown — inline images are inserted
  right in the editor, no separate field), and a Draft toggle.

## Not included yet

- **The "pinched nose" post** — that one currently lives only in a
  browser's local storage (never went through the on-site composer's
  "seed" content), and its text/images weren't recoverable from this
  browser session at the time this package was built. Once you have the
  text (and its photos) again, ask to have it added as a 4th `.md` file the
  same way.
- **The actual Astro rebuild** (Phase 1) — this package assumes a static
  site with a `src/content/blog` collection exists to drop these into. The
  current `.dc.html` prototype isn't that yet.

## After merging into the real project

1. Push the merged project to the `aria-korea-site-eng` GitHub repo.
2. Connect that repo to Netlify (auto-build), instead of the current manual
   file upload.
3. In the Netlify dashboard: enable Identity (Invite only) → enable Git
   Gateway → invite the admin's email.
4. Admin logs into `/admin`, writes/edits, hits **Publish** — no manual
   redeploy needed.
