<div align="center">

<img src="src/app/icon.svg" alt="CoverFlow Logo" width="64" height="64" />

# CoverFlow

### Cover Letters Powered by AI — Made Just for You

**Generate professional, personalized cover letters in seconds using Google Gemini.**  
No templates. No guesswork. Just write.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Google Gemini](https://img.shields.io/badge/Gemini-AI-4285F4?style=flat-square&logo=google)](https://ai.google.dev)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo**](https://engrahmadaya.vercel.app) · [**Report a Bug**](https://github.com/engraya/genLetter-ai/issues) · [**Request a Feature**](https://github.com/engraya/genLetter-ai/issues)

</div>

---

## Overview

CoverFlow is a modern, AI-powered web application that eliminates the most frustrating part of job hunting — writing cover letters from scratch. In a job market where personalization matters, generic templates don't cut it. CoverFlow takes your details and uses Google Gemini to produce a polished, professional letter that sounds like *you*, tailored to the specific role and company you're applying to.

The experience is intentionally minimal: fill in a short form, click **Generate**, and your letter appears instantly in a side-by-side live preview. From there, download it as a fully formatted `.docx` file, ready to attach to any application.

**Who it's for:**

- Job seekers who want to stand out without spending hours drafting letters
- Students applying for internships or their first role
- Professionals pivoting careers or targeting new companies
- Anyone who finds cover letters stressful, time-consuming, or hard to personalize

---

## Screenshots

| Landing Page | Generator — Empty State |
|---|---|
| ![Landing Page](public/screenshots/landing.png) | ![Generator Empty](public/screenshots/generator-empty.png) |

| Generator — Live Preview | Dark Mode |
|---|---|
| ![Generator Preview](public/screenshots/generator-preview.png) | ![Dark Mode](public/screenshots/dark-mode.png) |

> Screenshots are placeholders — run the app locally to see it in action.

---

## Features

### Core Application
- **Split-panel interface** — Form on the left, live preview on the right. No page reloads, no tab switching.
- **9-field structured input** — Full name, position title, company, years of experience, key skills, email, phone, optional address, and optional notes for extra context.
- **Zod-validated form** — Every required field is validated client-side with meaningful error messages before the request is sent.
- **Live skeleton preview** — While Gemini is generating, an animated skeleton renders in the preview pane so the UI never feels frozen.
- **One-click DOCX export** — Downloads a properly formatted Word document (A4 page, Calibri font, generous margins) named after the applicant and position.
- **Start Over** — A single button resets both the form and the preview to start fresh.

### AI Generation
- **Google Gemini 3 Flash** — Uses `gemini-3-flash-preview` for fast, high-quality text generation. Configured with `temperature: 0.7`, `topP: 0.95`, `topK: 64`, and up to 8192 output tokens.
- **Structured prompt engineering** — A carefully crafted prompt template enforces consistent letter structure, length (under 400 words), tone, and formatting — reducing hallucination and off-format output.
- **JSON response extraction** — The server action parses the AI response by extracting the JSON block from a markdown code fence, then validates the shape before returning to the client.
- **Additional notes context** — The optional "Notes" field feeds extra context (hiring manager name, platform, accomplishments, motivations) directly into the prompt, enabling highly personalized output.
- **Server Action execution** — AI calls happen in a Next.js Server Action (`'use server'`), keeping the API key server-side and off the client bundle.

### User Experience
- **Dark / light mode** — Full CSS variable-based theming via `next-themes`. The theme persists across sessions and respects system preference.
- **Animated page transitions** — Every route change uses a subtle Framer Motion fade-and-slide animation powered by Next.js's `template.tsx`.
- **Responsive design** — The split panel stacks vertically on mobile, the navbar collapses into a full-screen dialog drawer, and all typography scales cleanly.
- **Sticky navbar with glass blur** — The header stays pinned to the top and uses `backdrop-blur` for a polished frosted-glass effect.
- **Toast notifications** — Sonner-powered toasts confirm successful generation and download without blocking the UI.

### Developer Experience
- **Typed end-to-end** — A single Zod schema (`coverLetterSchema`) drives both client-side form validation and server action input parsing, with a shared TypeScript type inferred from it.
- **Path aliases** — `@/*` maps to `src/*`; `ui` maps directly to `src/components/ui/index` for clean, short imports.
- **Prettier enforced** — No semicolons, single quotes, no trailing commas, arrow parens omitted — configured in `.prettierrc`.
- **shadcn/ui New York style** — 40+ Radix UI wrappers live under `src/components/ui/`, enabling accessible, unstyled-by-default primitives styled consistently with Tailwind.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router, Server Actions) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org) — strict mode |
| **Runtime** | [React 19](https://react.dev) |
| **AI Provider** | [Google Gemini](https://ai.google.dev) (`@google/generative-ai`) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com) + CSS variables |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) (New York) + [Radix UI](https://radix-ui.com) |
| **Icons** | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Forms** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| **Markdown** | [react-markdown](https://github.com/remarkjs/react-markdown) |
| **DOCX Export** | [docx](https://docx.js.org) + [file-saver](https://github.com/eligrey/FileSaver.js) |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski) |
| **Fonts** | [Geist](https://vercel.com/font) (by Vercel) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Auth (scaffolded)** | [NextAuth.js v4](https://next-auth.js.org) — Google OAuth |
| **ORM (scaffolded)** | [Prisma 6](https://prisma.io) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## Architecture

### Request Flow

```
User fills form (9 fields)
        │
        ▼
React Hook Form + Zod validation (client-side)
        │
        ▼
GenerateCoverLetter() Server Action  ──▶  Zod safeParse (server-side)
        │
        ▼
createGeminiModel() → chatSession.sendMessage(promptTemplate)
        │
        ▼
Gemini 3 Flash response (JSON in markdown code fence)
        │
        ▼
Regex extraction → JSON.parse() → { coverLetter: string }
        │
        ▼
Client receives result → setCoverLetter() → ReactMarkdown preview
        │
        ▼
User clicks "Download DOCX" → createWordDocument() → file-saver
```

### Folder Structure

```
coverflow/
├── src/
│   ├── actions/
│   │   └── generateCoverLetter.ts   # Server Action — prompt, Gemini call, JSON parsing
│   ├── app/
│   │   ├── layout.tsx               # Root layout — ThemeProvider, Navbar, Footer, Toaster
│   │   ├── template.tsx             # Framer Motion page transition wrapper
│   │   ├── globals.css              # CSS custom properties (light + dark tokens)
│   │   ├── page.tsx                 # Landing page (Hero → HowWeWork → Features → CTA)
│   │   ├── generate/
│   │   │   ├── layout.tsx           # Full-height container for the generator
│   │   │   └── page.tsx             # Split-panel form + live preview — main app surface
│   │   ├── about/
│   │   │   └── page.tsx             # About page with product description
│   │   ├── error.tsx                # Global error boundary
│   │   └── not-found.tsx            # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx           # Sticky glass navbar
│   │   │   ├── menu.tsx             # Desktop nav + mobile full-screen dialog
│   │   │   ├── Footer.tsx           # Footer with brand, links, contact
│   │   │   ├── auth-and-theme.tsx   # GitHub link + theme toggle (navbar right slot)
│   │   │   ├── auth-provider.tsx    # NextAuth SessionProvider wrapper
│   │   │   ├── signin-dialog.tsx    # Google OAuth sign-in dialog (scaffolded)
│   │   │   ├── theme-provider.tsx   # next-themes ThemeProvider
│   │   │   ├── theme-toggle.tsx     # Dark/light mode button
│   │   │   ├── links.ts             # Navigation link definitions
│   │   │   └── index.ts             # Barrel export
│   │   ├── ui/                      # 40+ shadcn/ui components (Radix UI wrappers)
│   │   ├── Hero.tsx                 # Landing hero with animated background blobs
│   │   ├── HowWeWork.tsx            # 4-step process section
│   │   ├── Features.tsx             # 6-feature grid
│   │   ├── CTA.tsx                  # Call-to-action banner
│   │   ├── animated-template.tsx    # Framer Motion fade-in template
│   │   └── Icons.tsx                # LogoIcon SVG component
│   ├── hooks/
│   │   ├── index.ts                 # useUser() — session hook via atomic-utils
│   │   ├── use-mobile.tsx           # Breakpoint detection hook
│   │   └── use-toast.ts             # Toast hook (shadcn/ui)
│   ├── lib/
│   │   ├── gemini-ai.ts             # Gemini client factory + generation config
│   │   ├── schemas.ts               # Zod schema + CoverLetterInput type
│   │   ├── document-export.ts       # DOCX builder (docx + file-saver)
│   │   └── utils.ts                 # cn() utility (clsx + tailwind-merge)
│   └── types/
│       └── coverLetter.ts           # Re-exports CoverLetterInput type
├── public/                          # Static assets (favicon, icons)
├── components.json                  # shadcn/ui config (New York style)
├── tailwind.config.js               # Tailwind with CSS variable tokens + typography plugin
├── next.config.js                   # React strict mode
├── tsconfig.json                    # Strict TypeScript with path aliases
├── .prettierrc                      # No semicolons, single quotes, no trailing commas
└── vercel.json                      # `--legacy-peer-deps` install flag
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later (comes with Node)
- A **Google Gemini API key** — get one free at [aistudio.google.com](https://aistudio.google.com)

### Clone & Install

```bash
git clone https://github.com/engraya/genLetter-ai.git
cd genLetter-ai
npm install
```

> If you hit peer dependency warnings, use `npm install --legacy-peer-deps` (this is what Vercel uses too).

### Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then open `.env` and fill in your key:

```env
# Required — your Google Gemini API key
# Get one free at https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

> The key is consumed server-side only inside the Next.js Server Action. It is never exposed to the browser.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | **Yes** | Google Gemini API key used by the `GenerateCoverLetter` server action. Consumed server-side only. |

> NextAuth variables (`NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`) are present in the dependency tree but the auth flow is not enforced in production routes — they are only needed if you enable the auth system.

---

## AI Generation Details

### Model

CoverFlow uses **Google Gemini 3 Flash Preview** (`gemini-3-flash-preview`) via the `@google/generative-ai` SDK.

### Generation Config

| Parameter | Value | Effect |
|---|---|---|
| `temperature` | `0.7` | Balanced creativity — consistent structure with natural language variation |
| `topP` | `0.95` | High token diversity pool for fluent writing |
| `topK` | `64` | Candidate token breadth at each generation step |
| `maxOutputTokens` | `8192` | Enough headroom for a full letter even with verbose preamble |

### Prompt Strategy

The prompt is a structured template that:

1. **Sets role context** — instructs Gemini to act as an expert cover letter writer
2. **Provides a canonical sample** — a full reference letter the model must match in structure, tone, length, and style
3. **Injects user data** — name, position, company, experience, skills, contact info, and optional notes
4. **Enforces hard constraints** — plain text only, 3–4 paragraphs, under 400 words, professional tone, no jargon
5. **Treats "Notes" as context source** — hiring manager name, platform, past achievements, motivations all flow through the optional notes field
6. **Demands JSON output** — the model must return a valid `{"coverLetter": "..."}` object wrapped in a markdown code fence

### Response Parsing

```
Raw Gemini text
    │
    ▼
/```json\s*([\s\S]*?)\s*```/  ← regex extracts JSON block
    │
    ▼
JSON.parse(match[1])
    │
    ▼
{ coverLetter: string }  ← validated before returning
```

If either the regex or parse step fails, the server action throws a typed error that the client catches and surfaces as a toast.

---

## Deployment

CoverFlow is optimized for **Vercel** deployment.

### Deploy to Vercel (Recommended)

1. Push your fork to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `GEMINI_API_KEY` to **Settings → Environment Variables**
4. Click **Deploy**

Vercel picks up `vercel.json` automatically, which sets `--legacy-peer-deps` for the install step.

### Manual Deployment

```bash
npm run build      # Outputs to .next/
npm run start      # Starts the production server on port 3000
```

You can host the output on any Node.js-compatible platform (Railway, Render, Fly.io, etc.).

---

## Performance Notes

- **Server Actions** keep the Gemini API key server-side and eliminate a separate API route layer
- **Sticky preview panel** uses `overflow-y-auto` with `lg:h-[calc(100vh-3.5rem)]` — the preview scrolls independently without moving the form
- **Skeleton loading state** renders immediately during generation, preventing layout shift
- **Framer Motion template** uses a minimal `y: 6 → 0, opacity: 0 → 1` transition at 185ms — fast enough not to feel sluggish, visible enough to feel intentional
- **CSS variable theming** — no runtime theme computation; colors switch instantly via a single class toggle on `<html>`
- **`react-markdown`** renders letter output without `dangerouslySetInnerHTML`, keeping XSS surface area minimal
- **`@tailwindcss/typography`** prose classes handle letter text formatting without any inline styles

---

## Developer Notes

### Zod as Single Source of Truth

`src/lib/schemas.ts` defines `coverLetterSchema` once. The same schema drives:
- React Hook Form's `zodResolver` for client-side validation
- The server action's `safeParse` guard before any Gemini call

This means validation logic cannot drift between layers.

### Document Export

`createWordDocument()` in `src/lib/document-export.ts` builds a proper `.docx` file (not a fake `.doc` rename) using the `docx` library:
- A4 page size (`11906 × 16838` twips) with 1-inch margins on all sides
- Calibri 12pt body text with 200-twip paragraph spacing
- Auto-generated heading (`Application for {position}`) centered at the top
- File name sanitized for illegal path characters: `Cover Letter - {name} - {position}.docx`

### Theming

All colors are defined as HSL CSS variables in `globals.css`. Tailwind reads them via `hsl(var(--token))`. This means:
- No hard-coded color values anywhere in component code
- Dark mode switches by toggling the `.dark` class on `<html>` — zero JavaScript color computation at runtime
- Adding a new theme is a matter of overriding the CSS variables

---

## Roadmap

These are realistic next steps based on the current architecture:

- [ ] **PDF export** — Add `@react-pdf/renderer` or `puppeteer` as an alternative to DOCX
- [ ] **Saved letters** — Persist generated letters with Prisma + a database (scaffold already in dependencies)
- [ ] **Authentication** — Activate the existing NextAuth + Google OAuth scaffold to gate the save feature
- [ ] **Tone selection** — Expose `temperature` or a tone prompt modifier (formal / conversational / assertive)
- [ ] **Multi-language support** — Pass a `language` field to the prompt for non-English output
- [ ] **Letter history** — View and re-download previously generated letters per session or account
- [ ] **Resume parsing** — Accept a resume upload and auto-fill the form fields

---

## Contributing

Contributions are welcome. Here's how to get started:

1. **Fork** the repository on GitHub
2. **Clone** your fork: `git clone https://github.com/your-username/genLetter-ai.git`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Make your changes** — follow the existing Prettier config (no semicolons, single quotes)
5. **Commit**: `git commit -m "feat: describe your change"`
6. **Push**: `git push origin feature/your-feature-name`
7. **Open a Pull Request** against the `main` branch

Please open an issue first for significant changes so we can align on direction before you invest time coding.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Author

**Ahmad Yakubu Ahmad** ([@engraya](https://github.com/engraya))

- Portfolio: [engrahmadaya.vercel.app](https://engrahmadaya.vercel.app)
- Email: [engrahmadaya@gmail.com](mailto:engrahmadaya@gmail.com)
- GitHub: [github.com/engraya](https://github.com/engraya)

---

<div align="center">

Built with Google Gemini · Next.js 15 · shadcn/ui

</div>
