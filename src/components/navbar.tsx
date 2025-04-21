'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const transparent = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navbarClass =
    transparent && !scrolled && !isOpen
      ? 'bg-transparent border-transparent'
      : 'bg-background/90 backdrop-blur-md border-border'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={'/'} className="flex items-center space-x-2">
            <span className="font-bold text-xl">Calisthenics AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`hover:text-primary transition-colors ${isActive('/dashboard') ? 'text-primary font-medium' : ''}`}
            >
              Dashboard
            </Link>
            <Link
              href="/workout-generator"
              className={`hover:text-primary transition-colors ${isActive('/workout-generator') ? 'text-primary font-medium' : ''}`}
            >
              Workout Generator
            </Link>
            <Link
              href="/profile"
              className={`hover:text-primary transition-colors ${isActive('/profile') ? 'text-primary font-medium' : ''}`}
            >
              Profile
            </Link>
            <Link href="/auth">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 transition-colors"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`py-2 hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className={`py-2 hover:text-primary transition-colors ${isActive('/dashboard') ? 'text-primary font-medium' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/workout-generator"
                  className={`py-2 hover:text-primary transition-colors ${isActive('/workout-generator') ? 'text-primary font-medium' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Workout Generator
                </Link>
                <Link
                  href="/profile"
                  className={`py-2 hover:text-primary transition-colors ${isActive('/profile') ? 'text-primary font-medium' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/auth"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
