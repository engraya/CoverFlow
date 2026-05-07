'use client'
import Link from 'next/link'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from '@/components/ui'
import { cn, RenderList } from 'atomic-utils'
import { Menu as MenuIcon, X } from 'lucide-react'
import { Fragment, useState } from 'react'
import AuthAndTheme from './auth-and-theme'
import { LINKS } from './links'
import { usePathname } from 'next/navigation'
import { LogoIcon } from '../Icons'
const useGetLinksStyle = () => {
  const pathname = usePathname()
  return function getLinkStyles(href: string) {
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href)
    return cn('text-sm text-foreground/70 hover:text-foreground transition-colors', {
      'text-primary font-medium hover:text-primary': isActive
    })
  }
}

export default function Menu() {
  const getLinkStyle = useGetLinksStyle()
  const [isOpen, setIsOpen] = useState(false)

  const hideMenu = () => setIsOpen(false)

  return (
    <>
      <Fragment key='Desktop menu'>
        <div className='flex md:hidden'>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <MenuIcon className='w-5 h-5' />
              </Button>
            </DialogTrigger>
            <DialogContent
              className='h-full max-w-screen w-screen dark:bg-background/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-background/60 rounded-none'
              hideCloseButton
            >
              <DialogClose className='absolute left-6 top-3' asChild>
                <Button size='icon' variant='ghost' className='rounded-full'>
                  <X className='w-5 h-5' />
                </Button>
              </DialogClose>
              <DialogTitle className='h-0 hidden'></DialogTitle>
              <DialogDescription className='h-0 hidden'></DialogDescription>
              <div className='flex flex-col h-full items-center justify-between py-10'>
                {/* Logo */}
                <div>
                  <Link
                    className='font-bold text-2xl'
                    href={'/'}
                    onClick={hideMenu}
                  >
                    CoverFlow
                  </Link>
                </div>

                {/* Navigation Links Centered */}
                <div className='flex flex-col items-center gap-y-4'>
                  <RenderList
                    data={LINKS}
                    render={link => (
                      <Link
                        key={'mobile' + link.href}
                        onClick={hideMenu}
                        className={cn(getLinkStyle(link.href), 'text-lg')}
                        {...link}
                      />
                    )}
                  />
                </div>
                  <AuthAndTheme />
              </div>
            </DialogContent>
          </Dialog>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
                CoverFlow
              </span>
            </Link>
        </div>
      </Fragment>

      <Fragment key='Mobile menu flex flex-row justify-between'>
          <div className="hidden md:flex items-center space-x-6">
            {/* Logo with icon and text */}
            <Link href="/" className="flex items-center space-x-2">
              <LogoIcon />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
                CoverFlow
              </span>
            </Link>

            {/* Rendered navigation links */}
            <RenderList
              data={LINKS}
              render={(link) => (
                <Link
                  key={'desktop' + link.href}
                  className={getLinkStyle(link.href)}
                  {...link}
                />
              )}
            />
          </div>

        <AuthAndTheme />
      </Fragment>

    </>
  )
}
