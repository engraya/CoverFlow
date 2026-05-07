'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import ReactMarkdown from 'react-markdown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
    <section className='min-h-screen px-6 bg-white dark:bg-gray-950 py-12'>
      <div className='max-w-2xl mx-auto space-y-8'>
        {!coverLetter ? (
          <>
            <div className='text-center'>
              <h1 className='text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent mb-2'>
                Generate Your Cover Letter
              </h1>
              <p className='text-gray-600 dark:text-gray-300 text-base'>
                Fill in the details to create a professional, AI-generated letter.
              </p>
            </div>

            <Form {...form}>
              <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder='John Doe' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='position'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position Title</FormLabel>
                        <FormControl>
                          <Input placeholder='Software Engineer' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <FormField
                    control={form.control}
                    name='company'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder='Tech Innovations Inc.' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='experience'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input type='number' placeholder='3' min='0' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type='email' placeholder='john@example.com' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder='+1 234 567 8900' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder='123 Main St, New York, NY' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='skills'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Skills / Technologies</FormLabel>
                      <FormControl>
                        <Input placeholder='React, Next.js, Docker, AWS' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='notes'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specifics you'd like the AI to include?"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit' className='w-full' disabled={isLoading}>
                  {isLoading ? 'Generating...' : 'Generate Cover Letter'}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className='text-center space-y-4'>
            <p className='text-green-600 dark:text-green-400 font-medium'>
              Cover letter generated successfully!
            </p>

            <div className='prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-h-[500px] overflow-y-auto border p-6 rounded-md bg-gray-50 dark:bg-gray-900 shadow text-left'>
              <ReactMarkdown>{coverLetter}</ReactMarkdown>
            </div>

            <Button onClick={handleDownload} className='w-full'>
              Download as Word Document
            </Button>
            <Button variant='secondary' onClick={handleReset} className='w-full'>
              Generate Another
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
