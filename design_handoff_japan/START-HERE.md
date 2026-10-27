# 시작하기 (Aria 일본 홈페이지 배포 가이드)

영문판과 같은 방식입니다: **Claude Code → GitHub(famousguys/aria-japan) → Netlify**

## 전체 순서

```
1) 저장소를 내 컴퓨터로 가져오기(clone)       ← 직접, 터미널 1줄
2) Claude Code로 코드 만들기 + GitHub에 올리기  ← CLAUDE-CODE-PROMPT.md 붙여넣기
3) Netlify에서 저장소 연결                      ← 직접 (대시보드 클릭)
4) Identity + Git Gateway 켜기 (블로그 관리자)  ← 직접
5) 관리자 초대 → /admin 로그인                  ← 직접
```

## 1단계 — 저장소 가져오기

터미널에서:

```bash
git clone https://github.com/famousguys/aria-japan.git
cd aria-japan
```

다운로드한 `design_handoff_japan` 폴더를 압축 해제해서 **`aria-japan` 폴더 안에** 넣습니다.

```
aria-japan/
  design_handoff_japan/
    CLAUDE-CODE-PROMPT.md
    README.md
    ...
```

## 2단계 — Claude Code 실행

```bash
claude
```

`design_handoff_japan/CLAUDE-CODE-PROMPT.md`를 열어 `---` 사이 내용을 **전부 복사**해서 붙여넣습니다.

- Claude Code가 Astro 사이트를 만들고 `npm run build`가 성공하는지 확인합니다.
- 마지막에 GitHub로 push합니다. 처음이라 로그인을 요구하면 아래를 실행한 뒤 다시 push해 달라고 하세요.
  ```bash
  gh auth login
  ```
  (`gh`가 없다면 https://cli.github.com 에서 설치)

push가 끝나면 GitHub 저장소 페이지에 `src`, `public`, `package.json` 등이 보입니다.

## 3단계 — Netlify 연결

1. Netlify → **Add new site → Import an existing project → GitHub**
2. `famousguys/aria-japan` 선택
3. Build command: `npm run build` / Publish directory: `dist`
4. **Deploy** → 몇 분 뒤 `xxxx.netlify.app` 주소가 생깁니다.
5. (선택) **Site configuration → Change site name**으로 주소를 `aria-japan` 등으로 바꾸기

이후에는 GitHub에 새 커밋이 올라올 때마다 자동으로 다시 배포됩니다.

## 4단계 — 블로그 관리자 기능 켜기

1. **Site configuration → Identity → Enable Identity**
2. **Registration → Invite only**
3. **Services → Git Gateway → Enable**

## 5단계 — 관리자 초대

1. **Identity → Invite users** → 이메일 입력
2. 초대 메일에서 비밀번호 설정
3. `https://내사이트.netlify.app/admin/` 로그인 → 新規作成(New) → 작성 → Publish

## 나중에 수정할 때

새 핸드오프 패키지를 받아 `design_handoff_japan` 폴더를 덮어쓰고, `CLAUDE-CODE-UPDATE-PROMPT.md` 내용을 Claude Code에 붙여넣으세요.

## 참고

- `cms-package`에 들어 있는 블로그 글 3개는 영문판에서 옮겨 온 **영어 원문**입니다(카테고리만 일본어로 바꿈). 일본어 글로 교체하거나 배포 후 `/admin`에서 삭제하세요.
- 언어 선택 메뉴(한국어 / English / 中文)의 링크는 아직 `#`입니다. 영문판 주소를 알려주시면 연결하도록 Claude Code에 요청하면 됩니다.
