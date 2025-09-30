# P2 — Library Frontend

A React + TypeScript single-page app for browsing books, borrowing/returning them, viewing
members, and checking loan history. It's the frontend for the P1 API — a library lending
system built with ASP.NET Core — consuming a real REST API instead of mocked data.

## Features

- Browse, search, filter (by availability), and sort books
- View book details
- Browse members and see each member's loan history
- Borrow a book for a member, with client-side validation and server-side business rule
  enforcement (max 5 active loans per member, a book already on loan can't be re-borrowed)
- Return a borrowed book, with a confirmation step
- Loan history with All / Active / Returned / Overdue filters and an overdue indicator
- Toast notifications for success/error feedback on borrow and return
- Responsive layout (loan table collapses to stacked cards on narrow screens) and
  accessible markup (semantic landmarks, labeled form controls, `aria-live` notifications)

## Tech Stack

- React + TypeScript, built with Vite
- React Router
- TanStack Query
- React Hook Form + Zod
- CSS Modules
- Vitest + React Testing Library + MSW (mocked API integration tests)

## Getting Started

1. Run the P1 API first (see the P1 project's README) — by default it listens on
   `http://localhost:5018`, with seed data (5 books, 3 members) created automatically on
   first run.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173`.

The dev server proxies `/api` requests to the P1 API (see `vite.config.ts`), so the app
talks to P1 as if it were same-origin — no CORS configuration on P1 is required for local
development. If P2 is ever deployed to a different origin than the API (e.g. a separate
static host and API server in production), a CORS policy would need to be added to P1, and
`VITE_API_BASE_URL` (see `.env.example`) set to the API's URL — that's out of scope for the
current phased build, which targets local development only.

## API Endpoints Consumed

`GET/POST /api/books`, `GET /api/books/{id}`, `GET /api/members`, `GET /api/members/{id}`,
`GET /api/loans`, `GET /api/loans/overdue`, `GET /api/loans/member/{memberId}`,
`POST /api/loans/borrow`, `POST /api/loans/{id}/return`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — lint the codebase
- `npm run format` — format the codebase with Prettier
- `npm run format:check` — check formatting without writing
- `npm test` — run the unit and integration test suite
- `npm run test:watch` — run tests in watch mode
- `npm run test:coverage` — run tests with coverage reporting

## Project Structure

- `src/api/` — fetch-based API client and per-resource API modules
- `src/types/domain.ts` — TypeScript types mirroring P1's DTOs
- `src/features/<feature>/` — hooks, components, and schemas grouped by domain (books,
  members, loans)
- `src/pages/` — route-level page components
- `src/components/` — shared, generic UI components
- `src/context/` — the toast notification context
- `src/hooks/` — shared cross-feature hooks
- `src/lib/queryKeys.ts` — centralized TanStack Query cache key factory
- `src/mocks/` — MSW request handlers and in-memory mock data, used by integration tests
- `src/integration/` — MSW-backed integration tests exercising full user flows

## Status

Feature-complete for its planned scope (browse, borrow/return, member view, loan history).
See commit history for the phased build log.
