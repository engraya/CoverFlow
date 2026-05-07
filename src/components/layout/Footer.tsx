'use client'

import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="relative dark:text-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light theme blobs */}
        <div className="absolute top-16 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30 dark:opacity-0" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 dark:opacity-0" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-300 rounded-full blur-3xl opacity-30 dark:opacity-0" />

        {/* Dark theme blobs */}
        <div className="absolute top-16 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-0 dark:opacity-20 animate-float1" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-0 dark:opacity-20 animate-float2" />
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full blur-3xl opacity-0 dark:opacity-20 animate-float3" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
                AI
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
                GenLetter AI
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Helping job seekers craft impactful, tailored cover letters — fast and smart.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Generate', href: '/generate' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-white transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <p className="font-medium text-gray-800 dark:text-white">Email:</p>
                <a href="mailto:engrahmadaya@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400">
                  engrahmadaya@gmail.com
                </a>
              </li>
              <li>
                <p className="font-medium text-gray-800 dark:text-white">Phone:</p>
                <a href="tel:+2348149087802" className="hover:text-blue-500 dark:hover:text-blue-400">
                  +2348149087802
                </a>
              </li>
              <li>
                <p className="font-medium text-gray-800 dark:text-white">Portfolio:</p>
                <a href="https://engrahmadaya.vercel.app/" className="hover:text-blue-500 dark:hover:text-blue-400">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} GenLetter AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
