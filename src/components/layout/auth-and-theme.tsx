
import { ThemeToggle } from './theme-toggle'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
export default function AuthAndTheme() {

  const router = useRouter()

  const redirectToGithub = () => {
    router.push('https://github.com/engraya/genLetter-ai')
  }
  return (
    <div className='flex items-center gap-x-2'>
      <Button
        variant='ghost'
        className='rounded-full'
        size='icon'
        suppressHydrationWarning
        onClick={redirectToGithub}
    >
      <Github className='w-4 h-4' />
    </Button>
      <ThemeToggle />
    </div>
  )
}
