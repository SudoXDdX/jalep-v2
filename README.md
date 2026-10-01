# JALEP v2 — /src + Backend Project

Next.js 16 + Prisma + SQLite backend

## Quick Start

```bash
# Install dependencies
npm install

# Set up database
cp .env.example .env
npx prisma db push
npx prisma generate

# Dev server (with backend)
npm run dev

# Static build (for GitHub Pages)
npm run build:static
```

## Architecture

- **`/src`** — Full Next.js App Router project
- **`/src/app/api/`** — Backend API routes (contact, budget, team, health)
- **`/src/lib/db.ts`** — Prisma client singleton
- **`/prisma/schema.prisma`** — Database schema (SQLite)
- **`/src/content/site.ts`** — Site content data (team, services, etc.)

## Build Modes

| Command | Mode | Description |
|---------|------|-------------|
| `npm run dev` | Server | Full backend with API routes |
| `npm run build` | Server | Production server build |
| `npm run build:static` | Static | GitHub Pages compatible export |

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/budget` | POST | Submit budget request |
| `/api/team` | GET | Get team data |
| `/api/health` | GET | Health check |

## Team

- **João Gabriel** — CEO · Editor · Influencer
- **André** — TI · Técnico · Security Researcher (CVE-2026-43499)
- **Lucas** — Escritor · Conteúdo
- **João Lucas** — Técnico · Substituto
- **Pedro** — Auxiliar · Montagem
