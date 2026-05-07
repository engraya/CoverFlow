'use client'

import Link from 'next/link'
import { Sparkles, Github } from 'lucide-react'
import { Button } from '@/components/ui'

function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background blur */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Overline badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
          <Sparkles className="w-3 h-3 text-primary" />
          AI-Powered Cover Letters
        </div>

        <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl !leading-tight">
          Cover Letters Powered by AI,
          <br />
          <span className="relative inline-block px-2 py-1">
            <svg
              className="stroke-current absolute bottom-0 left-0 text-primary/30 dark:text-primary/50 w-full h-3"
              viewBox="0 0 410 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                strokeWidth={12}
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <span className="relative">Made Just for You</span>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
          Say goodbye to blank pages and boring templates. CoverFlow helps you craft personalized,
          job-ready cover letters in seconds — just enter a few details, and let AI do the writing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-10">
          <Button variant="brand" size="xl" asChild>
            <Link href="/generate">
              <Sparkles className="w-4 h-4" />
              Generate Your Letter
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/engraya/genLetter-ai" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Built with</p>
          <div className="flex items-center gap-5 opacity-50 dark:opacity-40 hover:opacity-70 transition-opacity">
            <span className="text-sm font-semibold text-foreground">Google Gemini</span>
            <span className="text-border select-none">·</span>
            <span className="text-sm font-semibold text-foreground">Next.js 15</span>
            <span className="text-border select-none">·</span>
            <span className="text-sm font-semibold text-foreground">shadcn/ui</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
