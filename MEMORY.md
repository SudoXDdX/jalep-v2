# JALEP v2 Memory

## Project Status
- Transformed from static build to full /src + Backend project
- Security Researcher added to André's card with proof links
- All gender-related text removed from team cards
- Prisma + SQLite database with ContactMessage, BudgetRequest, TeamMember models
- API routes: /api/contact, /api/budget, /api/team, /api/health

## André's Security Researcher Proof
- CVE-2026-43499 (Ghost Lock)
- Root Samsung Galaxy SM-A576B (kernel 6.12.38 exploit)
- Bug bounty active under NDA
- Proof repos: sudoxddx.github.io/Who-Am-I, github.com/sudoxddx/Root-My-Galaxy-SM-a576b

## Build Modes
- Server mode: `npm run dev` or `npm run build && npm start`
- Static mode: `npm run build:static` (for GitHub Pages)

## Deploy
- Static export → push to SudoXDdX/jalep-mano (main branch)
- GitHub Pages: https://sudoxddx.github.io/jalep-mano/
