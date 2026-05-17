# Project summary for Copilot

This repository is a **Vite + React + TypeScript** frontend app for a troubleshooting **knowledge base** ("Kennisbank") for technical products.

## Goal and behavior

- Show a searchable sidebar of products.
- Show per-product details in the main area:
  - common problems
  - triage questions
  - documentation links
- The app is currently fully **data-driven** from local TypeScript files (`src/data`), with no backend/API yet.

## Tech stack

- React 19 + React DOM 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- ESLint (flat config + TypeScript + React hooks)

## Important files

- `src/main.tsx`: React bootstrap.
- `src/App.tsx`: app entry component (renders `KnowledgeBase`).
- `src/KnowledgeBase.tsx`: main UI and state logic (active product + search query).
- `src/types.ts`: core domain types (`ProductInfo`, `Problem`, `TriageQuestion`, `DocLink`).
- `src/data/index.ts`: combines all product data and builds `knowledgebaseMap` for O(1) product lookup.
- `src/data/*.ts`: product-specific content files (currently `tsr-310.ts`, `tsw-1070.ts`).

## Data model conventions

Each product data file exports a `ProductInfo` object with:

- sidebar metadata (`id`, `title`, `category`, `shortDescription`)
- header visuals (`tagLabel`, `tagColor`)
- content arrays (`problems`, `triageQuestions`, `docLinks`)

Reference codes (`refCode`) are used throughout problems/questions for support traceability.

## Current project characteristics

- UI language is mainly **Dutch**, with some bilingual Dutch/English content in entries.
- Icons are inline SVG components in `KnowledgeBase.tsx`.
- Styling is utility-first Tailwind classes directly in JSX.
- Search currently filters products by title, short description, and category.

## How to extend safely

1. Add a new file in `src/data/<product-id>.ts` exporting `ProductInfo`.
2. Register it in `src/data/index.ts` (`knowledgebaseData` array).
3. Keep IDs/ref codes unique and preserve existing type contracts from `src/types.ts`.
4. Keep UI behavior data-driven (avoid hardcoding product-specific logic in `KnowledgeBase.tsx` unless needed globally).
