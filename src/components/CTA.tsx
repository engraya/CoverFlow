'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui'

function CTA() {
  return (
    <section className="relative isolate px-6 py-20 mt-16 sm:py-28 lg:px-8 overflow-hidden rounded-2xl max-w-5xl mx-auto border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Subtle background blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Ready to Land the Interview?
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Create a tailored, professional cover letter in seconds — powered by CoverFlow.
          No sign-up needed. Just start typing.
        </p>
        <Button variant="emerald" size="xl" asChild className="mt-8">
          <Link href="/generate">
            <Sparkles className="w-4 h-4" />
            Generate Your Letter
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default CTA
