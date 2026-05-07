'use client'

import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="border-t border-border dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CF
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                CoverFlow
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping job seekers craft impactful, tailored cover letters — fast and smart.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Generate', href: '/generate' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Contact</h3>
            <ul className="mt-3 space-y-4 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-foreground">Email:</p>
                <a
                  href="mailto:engrahmadaya@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  engrahmadaya@gmail.com
                </a>
              </li>
              <li>
                <p className="font-medium text-foreground">Phone:</p>
                <a href="tel:+2348149087802" className="hover:text-primary transition-colors">
                  +2348149087802
                </a>
              </li>
              <li>
                <p className="font-medium text-foreground">Portfolio:</p>
                <a
                  href="https://engrahmadaya.vercel.app/"
                  className="hover:text-primary transition-colors"
                >
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} CoverFlow. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
