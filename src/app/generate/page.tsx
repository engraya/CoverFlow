'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import ReactMarkdown from 'react-markdown'
import {
  FileText,
  Sparkles,
  Loader2,
  Download,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { GenerateCoverLetter } from '@/actions/generateCoverLetter'
import { createWordDocument } from '@/lib/document-export'
import { coverLetterSchema, type CoverLetterInput } from '@/lib/schemas'

export default function GeneratePage() {
  const [coverLetter, setCoverLetter] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<CoverLetterInput>({
    resolver: zodResolver(coverLetterSchema),
    defaultValues: {
      name: '',
      position: '',
      company: '',
      experience: '',
      skills: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    },
  })

  const notesValue = form.watch('notes') ?? ''

  const onSubmit = async (data: CoverLetterInput) => {
    setIsLoading(true)
    try {
      const result = await GenerateCoverLetter(data)
      setCoverLetter(result.coverLetter)
      toast.success('Cover letter generated successfully!')
    } catch {
      toast.error('Failed to generate cover letter. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!coverLetter) return
    const { name, position } = form.getValues()
    await createWordDocument(coverLetter, position, name)
    toast.success('Cover letter downloaded!')
  }

  const handleReset = () => {
    setCoverLetter(null)
    form.reset()
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-3.5rem)]">
      {/* Left: Form panel */}
      <div className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-border overflow-y-auto">
        {/* Form header */}
        <div className="px-6 py-8 lg:px-10 border-b border-border">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Generate
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mt-1">
            Cover Letter Generator
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in your details and click Generate — your letter appears on the right.
          </p>
        </div>

        {/* Form body */}
        <div className="px-6 py-6 lg:px-10">
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>

              {/* Section: Personal Info */}
              <SectionDivider label="Personal Info" />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        variant={form.formState.errors.name ? 'error' : 'default'}
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          variant={form.formState.errors.email ? 'error' : 'default'}
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          variant={form.formState.errors.phone ? 'error' : 'default'}
                          placeholder="+1 234 567 8900"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="pt-1">
                    <FormLabel>
                      Address{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St, New York, NY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Section: Job Details */}
              <SectionDivider label="Job Details" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Title</FormLabel>
                      <FormControl>
                        <Input
                          variant={form.formState.errors.position ? 'error' : 'default'}
                          placeholder="Software Engineer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          variant={form.formState.errors.company ? 'error' : 'default'}
                          placeholder="Tech Innovations Inc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="pt-1">
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        variant={form.formState.errors.experience ? 'error' : 'default'}
                        placeholder="3"
                        min="0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Section: Skills & Notes */}
              <SectionDivider label="Skills & Notes" />

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Skills / Technologies</FormLabel>
                    <FormControl>
                      <Input
                        variant={form.formState.errors.skills ? 'error' : 'default'}
                        placeholder="React, Next.js, Docker, AWS"
                        {...field}
                      />
                    </FormControl>
                    <p className="text-xs text-muted-foreground mt-1">
                      Separate with commas
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="pt-1">
                    <FormLabel>
                      Additional Notes{' '}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specifics you'd like the AI to include?"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <p className="text-xs text-muted-foreground text-right mt-1">
                      {notesValue.length} / 500
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 pb-8">
                <Button
                  type="submit"
                  variant="brand"
                  size="xl"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate Cover Letter
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Right: Preview panel */}
      <div className="w-full lg:w-[55%] lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] overflow-y-auto bg-muted/30">
        {isLoading ? (
          <PreviewSkeleton />
        ) : coverLetter ? (
          <PreviewPopulated
            coverLetter={coverLetter}
            onDownload={handleDownload}
            onReset={handleReset}
          />
        ) : (
          <PreviewEmpty />
        )}
      </div>
    </div>
  )
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="pt-6 pb-2">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}

function PreviewEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center px-8 py-16">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <FileText className="w-8 h-8 text-primary/60" />
      </div>
      <div>
        <p className="font-semibold text-foreground">Your letter will appear here</p>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs">
          Fill in the form and click Generate to preview your cover letter.
        </p>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
        <span className="flex items-center gap-1.5">
          <ClipboardList className="w-3 h-3" />
          Fill form
        </span>
        <ChevronRight className="w-3 h-3" />
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          Generate
        </span>
        <ChevronRight className="w-3 h-3" />
        <span className="flex items-center gap-1.5">
          <Download className="w-3 h-3" />
          Download
        </span>
      </div>
    </div>
  )
}

function PreviewSkeleton() {
  return (
    <div className="px-6 py-8 lg:px-10 space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-40" />
      </div>
      <Skeleton className="h-5 w-52" />
      <div className="space-y-2 pt-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[93%]" />
        <Skeleton className="h-4 w-[86%]" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[88%]" />
        <Skeleton className="h-4 w-[94%]" />
        <Skeleton className="h-4 w-[72%]" />
      </div>
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[91%]" />
      </div>
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-4 w-52 mt-1" />
        <Skeleton className="h-4 w-44" />
      </div>
    </div>
  )
}

function PreviewPopulated({
  coverLetter,
  onDownload,
  onReset,
}: {
  coverLetter: string
  onDownload: () => void
  onReset: () => void
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Sticky header */}
      <div className="px-6 py-4 lg:px-10 border-b border-border flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Cover Letter Ready</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onReset}>
            <RotateCcw className="w-3.5 h-3.5" />
            Start Over
          </Button>
          <Button variant="emerald" size="sm" onClick={onDownload}>
            <Download className="w-3.5 h-3.5" />
            Download DOCX
          </Button>
        </div>
      </div>

      {/* Letter content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
        <div className="animate-in fade-in duration-300">
          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-foreground prose-headings:text-foreground">
            <ReactMarkdown>{coverLetter}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}
