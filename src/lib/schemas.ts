import { z } from 'zod'

export const coverLetterSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  position: z.string().min(2, 'Position title is required'),
  company: z.string().min(2, 'Company name is required'),
  experience: z
    .string()
    .min(1, 'Years of experience is required')
    .refine(v => !isNaN(Number(v)) && Number(v) >= 0, {
      message: 'Must be a valid number',
    }),
  skills: z.string().min(3, 'Please list at least one skill'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  address: z.string().optional(),
  notes: z.string().optional(),
})

export type CoverLetterInput = z.infer<typeof coverLetterSchema>
