'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">LensClick</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link
              href="/"
              className="block px-4 py-2 rounded-lg hover:bg-secondary text-foreground text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 rounded-lg hover:bg-secondary text-foreground text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block px-4 py-2 rounded-lg hover:bg-secondary text-foreground text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-secondary text-foreground text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-2 px-4 pt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex-1"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
