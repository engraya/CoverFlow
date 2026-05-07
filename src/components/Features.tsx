'use client'

import { Zap, ShieldCheck, LayoutDashboard, Clock, RefreshCcw, CheckCircle } from 'lucide-react'

const featureList = [
  {
    title: 'Lightning Fast',
    description: 'Cover letters generated in seconds — not minutes. Speed meets precision.',
    Icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Built with privacy in mind. We never store your data. Ever.',
    Icon: ShieldCheck,
  },
  {
    title: 'Intuitive Interface',
    description: 'Minimalist UI that helps you focus on what matters: your career.',
    Icon: LayoutDashboard,
  },
  {
    title: '24/7 Support',
    description: "Human support when you need it. We've got your back.",
    Icon: Clock,
  },
  {
    title: 'Regular Updates',
    description: 'We evolve constantly — biweekly improvements and features.',
    Icon: RefreshCcw,
  },
  {
    title: '99.9% Uptime',
    description: 'Deployed across global servers — your letters are always available.',
    Icon: CheckCircle,
  },
]

function Features() {
  return (
    <section className="bg-background transition-colors duration-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            CoverFlow Features
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A powerful tool designed to elevate your job search — fast, smart, and secure.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureList.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 mb-4 rounded-lg flex items-center justify-center bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
