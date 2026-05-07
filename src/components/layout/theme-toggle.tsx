'use client'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Cookies from 'js-cookie'
import { create } from 'atomic-utils'

const useServerTheme = create<string>({
  key: 'server-theme'
})

export function ThemeToggle() {
  const [serverTheme] = useServerTheme()

  const { setTheme, theme = serverTheme } = useTheme()

  const nextTheme: Record<string, string> = {
    light: 'dark',
    dark: 'system',
    system: 'light'
  }

  const ThemeIcon = ({
    undefined: Sun,
    light: Sun,
    dark: Moon,
    system: Monitor
  } as Record<string, React.ComponentType<{ className?: string }>>)[theme ?? 'light'] ?? Sun

  return (
    <Button
      variant='ghost'
      className='rounded-full'
      size='icon'
      suppressHydrationWarning
      onClick={() => {
        const newTheme = nextTheme[theme as string]
        Cookies.set('theme', newTheme)
        setTheme(newTheme)
      }}
    >
      <ThemeIcon className='w-4 h-4' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
