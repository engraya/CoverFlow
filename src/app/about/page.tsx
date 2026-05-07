import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how CoverFlow uses Google Gemini to generate personalized, professional cover letters in seconds.',
}

export default function About() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent mb-8 bg-gradient-to-r from-primary to-accent text-center">
          About CoverFlow
        </h2>
        <div className="space-y-6 text-base text-muted-foreground leading-relaxed text-left">
          <p>
            CoverFlow is your smart assistant for creating personalized, job-ready cover letters
            in seconds. Whether you&apos;re applying for your first internship or making a big
            career move, CoverFlow uses the power of artificial intelligence to help you stand out —
            no templates, no guesswork, just writing that sounds like you.
          </p>
          <p>
            Built for speed and simplicity, CoverFlow takes just a few inputs — your role,
            experience, company name, and goals — and turns them into a polished, professional
            letter tailored to the job. With live preview, instant downloads, and editable output,
            you&apos;re always in control.
          </p>
          <p>
            Our mission is to take the stress out of job applications and give every candidate the
            tools to present their best self — confidently, clearly, and fast.
          </p>
        </div>
      </div>
    </section>
  )
}
