'use server'

import { createGeminiModel, generationConfig } from '@/lib/gemini-ai'
import { coverLetterSchema, type CoverLetterInput } from '@/lib/schemas'

export async function GenerateCoverLetter(
  input: CoverLetterInput
): Promise<{ coverLetter: string }> {
  const parsed = coverLetterSchema.safeParse(input)
  if (!parsed.success) {
    throw new Error('Invalid input: ' + parsed.error.issues[0].message)
  }

  const { name, position, company, experience, skills, email, phone, address, notes } =
    parsed.data

  const promptTemplate = `
You are an expert cover letter writer.

Generate a professional cover letter using the format and tone of the sample below. Use the details provided to personalize the letter, but follow the structure, length, and style **exactly**.

--- SAMPLE FORMAT START ---
Subject: Application for [Job Title]

Dear [Hiring Manager Name or "Hiring Manager"],

I am writing to express my enthusiastic interest in the [Job Title] position at [Company Name], as advertised on [Platform - use a placeholder if unknown]. With my [Number] years of experience in [Industry/Field] and a proven track record of [Key achievement or skill], I am confident I possess the skills and qualifications to excel in this role and contribute significantly to your team.

In my previous role at [Previous Company], I was responsible for [2–3 key responsibilities or accomplishments]. For example, I [Quantify your achievements if possible, e.g., "increased user retention by 20%"]. I am particularly drawn to [Company Name] because of [Company-specific detail or value]. My skills in [2–3 relevant skills] align well with your needs, and I am excited to apply them toward your mission.

I am a highly motivated and results-oriented individual with a strong work ethic and a passion for [Your passion or professional goal]. I am confident my ability to [Key skill or trait] would be a valuable asset to your team.

Thank you for considering my application. I have attached my resume and would welcome the opportunity to discuss my qualifications further.

Sincerely,
[Your Name]
[Your Phone Number]
[Your Email Address]
--- SAMPLE FORMAT END ---

Use the following input:

- Full Name: ${name}
- Position Title: ${position}
- Company Name: ${company}
- Years of Experience: ${experience}
- Key Skills and Technologies: ${skills}
- Phone Number: ${phone}
- Email Address: ${email}
${address ? `- Address: ${address}` : ''}
${notes ? `- Additional Notes: ${notes}` : ''}

Guidelines:
- Follow the provided sample format precisely in structure, tone, and style.
- Use plain text formatting only (no markdown, HTML, or special characters).
- Limit the letter to 3–4 concise, well-structured paragraphs and keep the total word count under 400.
- Use realistic, professional-sounding placeholders or inferred content where information is missing.
- Treat the "Additional Notes" section as the source of all extra context, such as:
  - Hiring manager name
  - Platform where the job was posted
  - Previous company details
  - Specific accomplishments
  - Passion areas or motivations
- If any of these are not provided, substitute with polite, generic alternatives.
- Ensure the letter is coherent, professional, and tailored to the job application.
- Avoid using overly complex language or jargon.
- Ensure the letter is free of spelling and grammatical errors.
- Use a friendly yet professional tone.


Return only a valid JSON object in the following format:
\`\`\`json
{
  "coverLetter": "Your generated cover letter here"
}
\`\`\`
`

  try {
    const model = createGeminiModel()
    const chatSession = model.startChat({ generationConfig, history: [] })
    const result = await chatSession.sendMessage(promptTemplate)
    const rawResponse = result.response?.text()

    const match = rawResponse.match(/```json\s*([\s\S]*?)\s*```/)
    if (!match || match.length < 2) {
      throw new Error('Failed to extract JSON block from response')
    }

    const jsonString = match[1].trim()
    const parsedObject = JSON.parse(jsonString) as { coverLetter?: string }

    if (!parsedObject.coverLetter) {
      throw new Error('Cover letter not found in response')
    }

    return { coverLetter: parsedObject.coverLetter }
  } catch (error) {
    console.error('Error generating cover letter:', error)
    throw new Error('Failed to generate cover letter')
  }
}
