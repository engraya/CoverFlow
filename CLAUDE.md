# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server (requires build first)
```

No test or lint scripts are configured.

## Environment

Requires a single env variable — copy `.env.example` to `.env` and fill it in:

```
NEXT_PUBLIC_GEMINI_API_KEY=   # Google Gemini API key
```

The `NEXT_PUBLIC_` prefix intentionally exposes the key to the browser (Gemini supports key restrictions).

## Architecture

**GenLetter AI** is a Next.js 15 App Router application for generating AI-powered cover letters using Google Gemini 1.5 Flash.

### Request Flow

1. User fills the form at `/generate` (9 fields: name, position, company, experience, skills, email, phone, address, notes)
2. The `GenerateCoverLetter` server action in [src/actions/generateCoverLetter.ts](src/actions/generateCoverLetter.ts) constructs a detailed prompt and calls Gemini
3. Gemini returns JSON wrapped in a markdown code fence — the action strips the fence and parses it
4. The parsed letter is rendered with `react-markdown` in a preview pane
5. The user can download a `.docx` via `createWordDocument()` (uses the `docx` + `file-saver` libraries)

### Key Files

| File | Purpose |
|------|---------|
| [src/lib/gemini-ai.ts](src/lib/gemini-ai.ts) | Initializes the Gemini client (`chatSession`) — temp=1, maxTokens=8192 |
| [src/actions/generateCoverLetter.ts](src/actions/generateCoverLetter.ts) | All AI logic: prompt building, API call, JSON parsing, DOCX export |
| [src/types/coverLetter.ts](src/types/coverLetter.ts) | `CoverLetterInputType` — the single shared interface for form data |
| [src/app/generate/page.tsx](src/app/generate/page.tsx) | Main app page — form + live preview, all client-side state |
| [src/app/layout.tsx](src/app/layout.tsx) | Root layout — ThemeProvider, Navbar, Footer, ToastContainer |

### Styling & UI

- **Tailwind CSS** with CSS variable-based theming (dark/light via `next-themes`)
- **shadcn/ui** (New York style, Lucide icons) — 40+ Radix UI wrappers live in [src/components/ui/](src/components/ui/)
- Custom colors defined in `globals.css` as CSS variables; never hard-code color values
- Prettier config: no semicolons, single quotes, no trailing commas

### Auth

`next-auth` is installed and a session hook (`useUser`) exists in [src/hooks/index.ts](src/hooks/index.ts), but auth is not actively enforced — no protected routes or DB persistence. The app is currently stateless.

### Path Aliases

- `@/*` → `src/*`
- `ui` → `src/components/ui`
