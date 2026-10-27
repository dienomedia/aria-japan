# Handoff: Aria Japan Website + Decap CMS Blog

## Overview
Japanese-market version of the Aria Korea medical concierge website (plastic-surgery trips to Korea). Same structure as the English site already deployed from `aria-korea-site-eng`; this build targets **`https://github.com/famousguys/aria-japan`** → Netlify.

5 page types + a Decap-CMS-managed blog. All visible copy is **final Japanese** — reproduce verbatim.

> Build steps: `INTEGRATION-DECAP-CMS.md`. Claude Code prompt: `CLAUDE-CODE-PROMPT.md`. Owner's walkthrough (Korean): `START-HERE.md`.

## Differences from the English site (important)
- **Language:** `<html lang="ja">`. All copy in `design-source/*.dc.html` and `surgery-data.js` is Japanese and final. Medical acronyms (SMAS, PRP, CT, FDA) stay in Latin letters.
- **Fonts:** headings `'Zen Kaku Gothic New'` (700; 900 available), body/UI `'Noto Sans JP'` (400–700).
  `https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@500;700;900&family=Noto+Sans+JP:wght@400;500;600;700&display=swap`
- **Currency:** all prices are **JPY** (already converted and rounded in `surgery-data.js`). Do not convert or reformat.
- **Messaging:** WhatsApp is replaced by **LINE** everywhere: `https://lin.ee/3KJTZXJ` (nav button, hero CTAs, consultation/reservation, event banner, CTA section, footer).
- **Floating SNS bar** on every page: fixed bottom-right, vertical stack of three 50px circles — X (`https://x.com/_Ariajapan`, black), Instagram (`https://www.instagram.com/ariacorp_japan`, gradient), LINE (`https://lin.ee/3KJTZXJ`, `#06C755`). Copy markup from the top of each `.dc.html` body.
- **Homepage:** Instagram feed section removed. (The `igPosts`/`igReels` arrays and `instagram.com/embed.js` left in the homepage source are unused — don't port them.)
- **Footer Instagram link:** `https://www.instagram.com/ariacorp_japan`.
- **Language switcher:** items are 한국어 · English · 中文（简体）· 繁體中文. Hrefs are `#` placeholders.
- **Blog categories:** `手術ガイド` · `回復のヒント` · `韓国旅行` · `患者様の声` (filter chip "すべて" = All).
- **Hero/procedure images:** client photos already placed (homepage, double eyelid, lower/upper eyelid, rhinoplasty, hair transplant) — keep the same `object-position` values as the source.

## About the design files
`design-source/*.dc.html` are HTML design references using a small prototype runtime (`support.js`). **Do not deploy them as-is.** Rebuild in Astro, copying markup, inline styles and copy directly from them. `support.js` is reference only.

Fidelity: **high-fidelity**. Hatched `.ph` blocks are intentional empty image slots — keep them.

## Pages
1. **Homepage** — `Aria Korea Homepage.dc.html`: hero (overlay nav, white logo), trust bar, how it works, surgeries grid, concierge services, event banner, blog teaser, our story, CTA, footer.
2. **About** — `about.dc.html`: solid sticky nav, intro, founder/CEO, media stills.
3. **Surgery category** — `surgery-category.dc.html?cat=<slug>` → `/surgeries/[slug]`.
4. **Procedure detail** — `procedure.dc.html?proc=<slug>` → `/procedures/[slug]`.
5. **Blog** — `blog.dc.html` → `/blog` + `/blog/[slug]`. Remove composer, delete and localStorage logic.

## Shared nav / footer
- Overlay variant (homepage hero): transparent, white text, `assets/aria-logo-white-trim.png`.
- Solid variant (other pages): white, `1px solid #e1edf3` bottom border, sticky, navy text `#122a3a`, `assets/aria-logo-navy-trim.png`.
- Surgeries mega-menu: opens on `mouseenter`, closes ~800–1000ms after `mouseleave`; category hover reveals procedures.
- Language switcher: click toggles; outside click closes; chevron rotates 180°.
- Footer: dark `#0e2738`, white logo, link columns, social icons, legal row.

## Design tokens
- Accent `#FF7A4D` (press `#ee6537`) · Teal `#2e9fc0` · Ink `#122a3a` · Body `#445d6e` · Muted `#5a7488` · Faint `#9aabb6`
- Page bg `#eef6fa` · Dark `#0e2738` · Hero gradient `#0e2738 → #15455b → #1d6e84` (135deg)
- Borders `#e1edf3`, `#d9e6ed`, `#dceaf1` · Field bg `#f7fbfd` · Selection `#ffd9c9`
- Radius: cards 22px, overlays 24px, menus 18px, buttons 12–14px, pills 999px, inputs 12px
- Shadows: card hover `0 18px 40px -18px rgba(16,41,61,.35)`; menu `0 34px 70px -24px rgba(16,41,61,.45)`; CTA `0 16px 34px -14px rgba(255,122,77,.85)`
- Layout: max-width 1320px (content), 1180px (about/blog); section padding `clamp(64px,8vw,104px)` × `clamp(24px,5vw,72px)`

## Icons
Lucide (`data-lucide="…"` in source). Use the `lucide-astro` package in the build. SNS/flag icons are inline SVG — copy verbatim.

## Data
`design-source/surgery-data.js` — `SURGERY_CATEGORIES` + `getCategory(slug)` / `getProcedure(slug)`. Procedures may carry `about`, `techHeading`, `techniques[{title, blocks[{type:'para'|'subhead'|'ulist'|'olist', text, items}]}]`, `benefitGroups`, `facts{duration, anesthesia, stay[{day,label}], stayNote, price, priceNote}`; categories may carry `introBlocks`. Preserve all fields.

## CMS package
`cms-package/` — `public/admin/index.html` + `config.yml` (Japanese categories and labels), 3 posts in `src/content/blog/`, images in `public/uploads/`. The 3 posts are **English originals** carried over from the English site with categories remapped — the client should replace them with Japanese posts.
