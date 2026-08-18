# 스포츠스토리

야구·축구·농구의 역사와 흥미로운 이야기를 모은 정적 웹사이트입니다. [Astro](https://astro.build)로 제작되었으며 GitHub Pages 배포를 위한 GitHub Actions 워크플로우가 포함되어 있습니다.

## 프로젝트 구조

```text
/
├── src/
│   ├── content/articles/{baseball,soccer,basketball}/*.md  # 기사 원고 (마크다운)
│   ├── content.config.ts                                   # 기사 스키마 정의
│   ├── layouts/           # BaseLayout, ArticleLayout
│   ├── components/        # Header, Footer, Hero, ArticleCard, SportHub
│   ├── pages/
│   │   ├── index.astro                # 홈
│   │   ├── baseball/soccer/basketball/index.astro  # 종목별 허브 페이지
│   │   └── articles/[...slug].astro   # 기사 상세 페이지 (동적 라우트)
│   └── styles/global.css  # 디자인 토큰 및 전역 스타일
└── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
```

## 명령어

| 명령어            | 설명                              |
| ----------------- | --------------------------------- |
| `npm install`      | 의존성 설치                       |
| `npm run dev`       | 로컬 개발 서버 실행 (`localhost:4321`) |
| `npm run build`     | 정적 빌드 생성 (`./dist/`)         |
| `npm run preview`   | 빌드 결과 로컬 미리보기            |

## 새 기사 추가하기

`src/content/articles/<종목>/` 아래에 마크다운 파일을 추가하세요. frontmatter 형식은 다음과 같습니다.

```md
---
title: "기사 제목"
sport: "baseball" # baseball | soccer | basketball
category: "history" # history | league | rules | players | moments
summary: "목록 카드에 노출될 한두 문장 요약"
pubDate: 2026-03-01
tags: ["태그1", "태그2"]
---

본문 내용...
```

## GitHub Pages 배포

1. GitHub에 `sports-story`라는 이름으로 저장소를 생성합니다 (이미 다른 이름을 쓰고 있다면 `astro.config.mjs`의 `base` 값을 저장소 이름에 맞게 수정하세요).
2. `astro.config.mjs`의 `site` 값을 실제 GitHub 아이디로 교체합니다: `https://<아이디>.github.io`
3. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정합니다.
4. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드하고 배포합니다.
5. 배포가 끝나면 `https://<아이디>.github.io/sports-story/`에서 사이트를 확인할 수 있습니다.

## 콘텐츠 관련 참고

기사 초안은 일반적으로 알려진 역사적 사실을 바탕으로 작성되었습니다. 배포 전 세부 수치·날짜 등은 한 번 더 확인하는 것을 권장합니다.
