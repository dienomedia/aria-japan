# Claude Code 첫 명령어 (복사해서 그대로 붙여넣기)

`aria-japan` 저장소를 clone한 폴더 안에 이 `design_handoff_japan` 폴더를 넣은 뒤, Claude Code에 아래 `---` 사이 내용 전체를 붙여넣으세요.

---

I'm rebuilding the **Japanese** version of the Aria marketing website + blog from HTML design references into a real, deployable site. The target GitHub repo is `https://github.com/famousguys/aria-japan` (this folder is a clone of it). An English version of the same site was already built this way (Astro + Decap CMS + Netlify), so follow the same approach.

Please read `design_handoff_japan/README.md` and `design_handoff_japan/INTEGRATION-DECAP-CMS.md` first — they contain the design spec and build plan. Then do the following, in order:

**Phase 1 — Rebuild as Astro (at the repo root, not inside design_handoff_japan)**
- Scaffold a new Astro project at the repo root and add the Netlify adapter.
- Port design tokens (colors, radii, shadows in `README.md`) into a base layout + global styles. Set `<html lang="ja">`.
- Fonts: **Zen Kaku Gothic New** (headings, weight 700/900) + **Noto Sans JP** (body, 400–700) via Google Fonts, exactly as in the `<helmet>` of the `.dc.html` files.
- Rebuild the shared Nav (Surgeries mega-menu + language switcher) and Footer as components, matching `design_handoff_japan/design-source/*.dc.html` markup and copy **exactly**. All visible text is final Japanese copy — do not retranslate, rewrite or "fix" any text.
- Rebuild all 5 page types: homepage, About, Surgeries category (`?cat=` → `/surgeries/[slug]`), Procedure detail (`?proc=` → `/procedures/[slug]`), Blog board + single-post page.
- Move `design-source/surgery-data.js` into a typed data module **keeping its shape and values exactly** (prices are already in JPY — do not convert or reformat).
- Copy all files from `design-source/assets/` into the project and wire them up.
- Keep these links exactly:
  - All LINE CTAs (booking buttons, consultation, reservation, events, footer): `https://lin.ee/3KJTZXJ`
  - Instagram: `https://www.instagram.com/ariacorp_japan`
  - X: `https://x.com/_Ariajapan`
- Keep the **floating SNS button bar** (fixed bottom-right; X, Instagram, LINE from top to bottom) on every page.
- The homepage has **no Instagram feed section** — don't add one.
- Language switcher items: 한국어 · English · 中文（简体）· 繁體中文 (no 日本語 item — this site is Japanese). Leave hrefs as `#` unless I give URLs.
- Remove the on-page "write new post" composer, delete button, and all localStorage logic from the public blog.

**Phase 2 — Blog content collection**
- Define a `blog` collection: `title`, `category` enum of `手術ガイド` / `回復のヒント` / `韓国旅行` / `患者様の声`, `date`, `cover` optional, `draft` boolean default false, Markdown body.
- Copy posts from `design_handoff_japan/cms-package/src/content/blog/*.md` and images from `cms-package/public/uploads/`.
- Board page: filter out drafts, sort by date desc, filter by category chips (すべて + 4 categories). Single-post page renders the Markdown body including inline images.

**Phase 3 — Decap CMS admin**
- Copy `cms-package/public/admin/index.html` and `config.yml` to `public/admin/`. Verify `media_folder` / `public_folder` / `folder` paths match the project; adjust only if you changed those paths.

**Phase 4 — Build check and push**
- Keep `design_handoff_japan/` in the repo as reference, but make sure it's not part of the Astro build output.
- Confirm `npm run build` succeeds locally and show me the output folder (should be `dist`).
- Then commit and push to `main` of `https://github.com/famousguys/aria-japan`. If git asks for authentication, stop and tell me what to run.
- Do NOT touch the Netlify dashboard — I'll do that myself.

Work step by step, show me the project structure as you go, and flag anything in the design reference that's ambiguous.

---
