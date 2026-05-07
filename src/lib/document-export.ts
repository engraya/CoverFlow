import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
} from 'docx'
import { saveAs } from 'file-saver'

function convertToTxtFile(content: string, _fileName: string = 'cover_letter.txt'): string {
  const blob = new Blob([content], { type: 'text/plain' })
  return URL.createObjectURL(blob)
}

function downloadTxtFile(content: string, fileName: string = 'cover_letter.txt') {
  const url = convertToTxtFile(content, fileName)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function createParagraphsFromText(text: string): Paragraph[] {
  const lines = text.split('\n').map(line => line.trim()).filter(Boolean)
  return lines.map(
    line =>
      new Paragraph({
        children: [
          new TextRun({
            text: line,
            font: 'Calibri',
            size: 24,
          }),
        ],
        spacing: { after: 200 },
        alignment: AlignmentType.LEFT,
      })
  )
}

async function createWordDocument(coverLetter: string, position: string, name: string) {
  const paragraphs = createParagraphsFromText(coverLetter)

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838, orientation: 'portrait' },
            margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
          },
        },
        children: [
          new Paragraph({
            text: `Application for ${position}`,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          ...paragraphs,
        ],
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const safeFileName = position.replace(/[<>:"/\\|?*]+/g, '-')
  saveAs(blob, `Cover Letter - ${name} - ${safeFileName}.docx`)
}

export { convertToTxtFile, downloadTxtFile, createWordDocument }
