# Decap CMS Integration Guide — Aria Japan (Japanese site)

This guide takes the HTML design references in `design-source/` and turns them into a **live, deployable site on Netlify** with a **Decap CMS** (formerly Netlify CMS) admin panel for the blog. Written so a developer **or Claude Code** can follow it start to finish.

**Recommended stack:** [Astro](https://astro.build) (static output) + Decap CMS + Netlify. Astro is chosen because it ships zero JS by default, has first-class Markdown/content-collections, and deploys to Netlify in one click. (Eleventy, Hugo, or Next.js static export also work — adapt paths accordingly.)

---

## Architecture at a glance

```
┌─────────────────┐   git commit    ┌──────────────┐   build     ┌─────────────┐
│  Decap CMS       │ ──────────────▶ │  Git repo    │ ──────────▶ │  Netlify    │
│  /admin (web UI) │  (Markdown +    │ (content/)   │  (Astro)    │  static CDN │
│  team writes here│   images)       └──────────────┘             └─────────────┘
└─────────────────┘                                                      │
        ▲                                                                 ▼
        │  Netlify Identity + Git Gateway (auth)                  public website
        └──────────────────── login ────────────────────────────────────┘
```

- Team writes a post in `/admin` → Decap commits a Markdown file to the repo → Netlify rebuilds → post is live.
- No separate database. Content = Markdown files in the repo.

---

## PHASE 1 — Recreate the design in Astro (developer / Claude Code)

> This is the "development build" step. The `.dc.html` files are references; rebuild them as Astro components/pages.

1. **Scaffold:**
   ```bash
   npm create astro@latest . -- --template minimal --typescript
   # (run inside the cloned aria-japan repo folder)
   npx astro add netlify
   npm i lucide-astro
   ```

2. **Fonts & global styles:** add the Google Fonts `<link>` (Zen Kaku Gothic New + Noto Sans JP — see README) to a base layout `src/layouts/Base.astro`. Port the `:root` tokens and shared CSS (`.ph`, `.lift`, `.navlink`, `.nav-surg*`, `.nav-lang*`, form `.fld`) from any `.dc.html` `<style>` block into a global stylesheet. Use the exact values in `README.md → Design Tokens`.

3. **Shared components** (`src/components/`):
   - `Nav.astro` — accept a `variant` prop (`"overlay"` for homepage hero / `"solid"` for the rest). Include the Surgeries mega-menu and the **Language switcher** (copy the inline flag SVGs verbatim). Re-implement the small JS (mega-menu open/close timer, lang dropdown toggle + outside-click close) as a tiny inline `<script>` or an Astro island.
   - `Footer.astro`.
   - `SurgeryMega.astro` — driven by `surgery-data.js` (move it to `src/data/surgeries.ts`).

4. **Pages** (`src/pages/`):
   - `index.astro` (homepage — all sections. The Japanese homepage has NO Instagram section; do not add one).
   - `about.astro`.
   - `surgeries/[slug].astro` — replaces `surgery-category.dc.html?cat=`. Use `getStaticPaths()` over `SURGERY_CATEGORIES`.
   - `procedures/[slug].astro` — replaces `procedure.dc.html?proc=`.
   - `blog/index.astro` — the board (grid + category filter chips). **Reads from the blog content collection**, not localStorage.
   - `blog/[slug].astro` — single post (the reader overlay becomes a real page).

5. **Remove prototype-only bits:** the on-page "Write new post" composer, the delete button, and all `localStorage` logic in `blog.dc.html`. Publishing now happens in `/admin`. (Optionally keep a styled "Write new post" link that points to `/admin` for logged-in staff.)

6. **Match fidelity:** reproduce layouts/colors/typography exactly per `README.md`. Keep `.ph` placeholder blocks where the client hasn't supplied photos.

---

## PHASE 2 — Blog content collection

1. **Define the collection** in `src/content/config.ts`:
   ```ts
   import { defineCollection, z } from 'astro:content';
   const blog = defineCollection({
     type: 'content',
     schema: z.object({
       title: z.string(),
       category: z.enum(['手術ガイド', '回復のヒント', '韓国旅行', '患者様の声']),
       date: z.date(),
       cover: z.string().optional(),     // path to uploaded image
       excerpt: z.string().optional(),
       lang: z.string().default('ja'),
       draft: z.boolean().default(false),
     }),
   });
   export const collections = { blog };
   ```

2. **Folder layout** for posts (one Markdown file per post):
   ```
   src/content/blog/
     rhinoplasty-guide.md
     first-7-days-recovery.md
     ...
   public/uploads/        ← Decap stores uploaded cover images here
   ```
   Example post front-matter:
   ```md
   ---
   title: "Rhinoplasty in Korea: A Complete 2026 Guide"
   category: "Surgery Guides"
   date: 2026-06-22
   cover: "/uploads/rhino-cover.jpg"
   excerpt: "Costs, recovery timelines, and choosing the right clinic."
   lang: "ja"
   draft: false
   ---

   Article body in Markdown…
   ```

3. **Render** the board (`blog/index.astro`) with `getCollection('blog')`, filter `!draft`, sort by `date` desc, group/filter by `category`, and (if i18n) by `lang`. Render `blog/[slug].astro` with `<Content />`.

---

## PHASE 3 — Add Decap CMS admin

1. **Create the admin files** (copy from `cms-package/public/admin/` in this package — already uses the Japanese categories):
   - `public/admin/index.html` → loads Decap CMS (see `examples/admin-index.html`).
   - `public/admin/config.yml` → the collection config (see `examples/config.yml`).

2. **`public/admin/config.yml`** tells Decap what fields to show and where to commit. The provided example defines the blog collection with Title, Category (select), Date, Cover (image upload), Excerpt, Language (select), Draft (toggle), and Body (markdown), committing to `src/content/blog/{{slug}}.md` and storing images in `public/uploads`.

3. The admin panel will live at **`https://your-site.netlify.app/admin/`**.

---

## PHASE 4 — Deploy on Netlify + enable auth (the part YOU do)

> These steps are clicks in the Netlify dashboard — no coding.

1. **Push the repo to GitHub** (Decap commits via Git Gateway, so the project must be a Git repo on GitHub/GitLab).

2. **Create the Netlify site:** Netlify dashboard → *Add new site → Import an existing project* → pick the repo. Build command `npm run build`, publish directory `dist` (Astro default). Deploy.

3. **Enable Netlify Identity:** Site → *Integrations / Identity* → **Enable Identity**.
   - Under *Identity → Registration*, set to **Invite only** (so randoms can't sign up).
   - *Identity → Services → Enable **Git Gateway*** (this lets Decap commit to your repo without each editor needing GitHub access).

4. **Add the Identity widget** so login works: ensure `<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>` is in `public/admin/index.html` (it is, in the example) and ideally also in the site's base layout `<head>` with the small redirect snippet (see `examples/admin-index.html` notes).

5. **Invite editors:** Netlify → *Identity → Invite users* → enter the Aria Japan team's emails. They get an email, set a password, and can log in at `/admin`.

6. **Done.** Editors go to `yoursite/admin`, log in, click **New Blog**, write, and **Publish**. Decap commits the Markdown → Netlify auto-rebuilds → the post is live in ~1 minute. No further deploys needed from you.

---

## PHASE 5 — Language switcher

This repo is the **Japanese site only**. The switcher lists 한국어 / English / 中文（简体）/ 繁體中文 — point each item to the other sites' URLs when known (English: the existing aria-korea-site-eng Netlify URL). The notes below are kept for reference only.

### (reference) Multi-language patterns

The design's language switcher offers en / ko / ja / zh-Hans / zh-Hant. Two common patterns:

- **Simple (recommended to start):** one blog collection with a `lang` field (already in the schema). The board filters by the active locale; the flag menu links to `/`, `/ko/`, `/ja/`, `/zh/`, `/zh-tw/` and each locale page filters posts by `lang`.
- **Full i18n:** separate Decap collections or folders per locale (`src/content/blog-ko/`, etc.) and Astro's [i18n routing](https://docs.astro.build/en/guides/internationalization/). Use this if the whole UI (not just the blog) needs translation.

Wire each flag `<a>` in the nav (currently `href="#"`) to its locale route once locales exist.

---

## Checklist
- [ ] Astro project scaffolded, Netlify adapter added
- [ ] Tokens + shared CSS ported; fonts loaded
- [ ] Nav (both variants) + mega-menu + language switcher rebuilt
- [ ] All 5 page types rebuilt at fidelity; `.ph` placeholders kept
- [ ] Floating SNS bar (X / Instagram / LINE) on every page
- [ ] All LINE CTAs → https://lin.ee/3KJTZXJ
- [ ] Blog content collection + schema defined
- [ ] Prototype localStorage/composer/delete removed from public blog
- [ ] `public/admin/index.html` + `config.yml` added
- [ ] Repo on GitHub, Netlify site building from it
- [ ] Netlify Identity enabled (invite-only) + Git Gateway on
- [ ] Editors invited; test post published end-to-end
- [ ] Prices shown in JPY exactly as in surgery-data.js

---

## Reference docs
- Decap CMS: https://decapcms.org/docs/
- Decap + Astro: https://decapcms.org/docs/astro/
- Astro Content Collections: https://docs.astro.build/en/guides/content-collections/
- Netlify Identity + Git Gateway: https://decapcms.org/docs/git-gateway-backend/
