'use client'

import { Sparkles, Zap, Star, Brain, FileText, Award, Layers, Target } from 'lucide-react'
import Link from 'next/link'

const floatingIcons = [
  { Icon: Sparkles, style: { top: '5%', left: '5%' },   delay: '0.2s' },
  { Icon: Zap,      style: { top: '5%', right: '5%' },  delay: '0.6s' },
  { Icon: Star,     style: { top: '45%', left: '15%' }, delay: '0.8s' },
  { Icon: Brain,    style: { top: '45%', right: '15%' }, delay: '1.2s' },
  { Icon: FileText, style: { top: '85%', left: '5%' },  delay: '1.4s' },
  { Icon: Award,    style: { top: '85%', right: '5%' }, delay: '1.8s' },
  { Icon: Layers,   style: { top: '25%', left: '30%' }, delay: '2.0s', hideOnMobile: true },
  { Icon: Target,   style: { top: '65%', right: '30%' }, delay: '2.2s', hideOnMobile: true },
]

function CTA() {
  return (
    <section className='relative isolate px-6 py-24 mt-16 sm:py-32 lg:px-8 bg-white dark:bg-gray-950 overflow-hidden rounded-3xl max-w-5xl mx-auto shadow-2xl'>
      {/* Floating Icons */}
      <div className='absolute inset-0 pointer-events-none'>
        {floatingIcons.map(({ Icon, style, delay, hideOnMobile }, idx) => (
          <div
            key={idx}
            className={`absolute opacity-20 hover:opacity-60 transition-opacity ${
              hideOnMobile ? 'hidden md:block' : ''
            }`}
            style={{ ...style, animationDelay: delay } as React.CSSProperties}
          >
            <Icon className='w-10 h-10 text-blue-500 dark:text-blue-400' />
          </div>
        ))}
      </div>

      {/* CTA Content */}
      <div className='relative z-10 text-center'>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Ready to Land the Interview?
        </h2>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          Create a tailored, professional cover letter in seconds — powered by GenLetter AI.
          No sign-up needed. Just start typing.
        </p>
        <Link
          href='/generate'
          className='mt-8 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'
        >
          Generate Your Letter
        </Link>
      </div>
    </section>
  )
}

export default CTA
