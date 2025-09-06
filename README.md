# P2 — Library Frontend

A React + TypeScript single-page app for browsing books, borrowing/returning them, viewing
members, and checking loan history. It's the frontend for the P1 API — a library lending
system built with ASP.NET Core.

## Tech Stack

- React + TypeScript, built with Vite
- React Router
- TanStack Query
- React Hook Form + Zod
- Vitest + React Testing Library

## Getting Started

1. Run the P1 API first (see the P1 project's README) — it listens on `http://localhost:5018`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

The dev server proxies `/api` requests to the P1 API, so no CORS configuration is needed.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run lint` — lint the codebase
- `npm run format` — format the codebase with Prettier

## Status

Work in progress — following a phased build plan. See commit history for progress.
