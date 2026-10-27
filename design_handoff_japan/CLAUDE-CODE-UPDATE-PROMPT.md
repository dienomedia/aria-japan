# 나중에 디자인을 수정했을 때 쓰는 명령어

Claude Design에서 수정한 뒤 새 핸드오프 패키지를 받으면, 기존 `design_handoff_japan` 폴더를 새 것으로 덮어쓰고 Claude Code에 아래 내용을 붙여넣으세요. `[ ]` 안은 바뀐 내용으로 고쳐 쓰세요.

---

The design reference in `design_handoff_japan/design-source/` has been updated. Please compare it with the current Astro site and apply only these changes:

[예: 홈페이지 히어로 문구 변경 / 쌍꺼풀 수술 가격 변경 / 새 이미지 교체]

Rules:
- Change only what's listed above. Don't touch other layout, copy, styles or data.
- Japanese copy in the design source is final — copy it verbatim.
- If `surgery-data.js` changed, sync the same values into the typed data module.
- If new images were added in `design-source/assets/`, copy them into the project.
- Run `npm run build`, then commit with a short message and push to `main` of `https://github.com/famousguys/aria-japan`. Netlify will redeploy automatically.

---
