import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'
import 'bs-icon/icons.css'
import Footer from '@/components/layout/Footer'
import { Navbar, ThemeProvider } from '@/components/layout'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: {
    template: '%s | CoverFlow',
    default: 'CoverFlow — AI-Powered Cover Letters',
  },
  description:
    'Generate professional, personalized cover letters in seconds using Google Gemini AI. No templates, no guesswork.',
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute='class'>
          <main className='min-h-screen'>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto py-8 px-6 md:px-8 overflow-x-auto'>
              {children}
            </div>
            <Footer />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
