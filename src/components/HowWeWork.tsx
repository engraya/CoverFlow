'use client'

import { Sparkles, ClipboardList, Bot, Eye, Download } from 'lucide-react'

const steps = [
  {
    title: 'Enter Your Details',
    description:
      'Tell us about the job, your experience, and a few key highlights — no resume upload needed.',
    Icon: ClipboardList,
  },
  {
    title: 'AI Drafts Your Letter',
    description:
      'Our AI instantly generates a professional, personalized cover letter tailored to your input.',
    Icon: Bot,
  },
  {
    title: 'Preview & Edit',
    description:
      "Review your letter in real time. Make tweaks or regenerate — it's all in your control.",
    Icon: Eye,
  },
  {
    title: 'Download & Apply',
    description:
      "Download your polished, job-specific letter in seconds. You're ready to impress and apply.",
    Icon: Download,
  },
]

function HowWeWork() {
  return (
    <section className="mb-20 px-4 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {/* Header */}
        <div className="md:w-2/3 lg:w-1/2">
          <div className="flex items-center space-x-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="uppercase font-semibold tracking-widest text-xs">Process</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">How We Work</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-lg">
            We follow a transparent and efficient process to help you get results fast and with
            confidence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-200"
            >
              <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/40 select-none">
                0{idx + 1}
              </span>
              <div className="w-10 h-10 mb-4 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <h5 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h5>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
