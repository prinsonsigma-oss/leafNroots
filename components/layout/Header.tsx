'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X, MessageCircle } from 'lucide-react'

const products = [
  'Black Lemon Tea Extract',
  'Irani Chai Extract',
  'Ginger Extract',
  'Detox Extract',
  'Kashmir Kahwa Extract',
  'Cardamom Extract',
  'Masala Chai Extract',
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products', hasDropdown: true },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary">
            <span className="text-primary-foreground font-bold text-lg leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>LR</span>
          </div>
          <div>
            <p className="text-primary font-bold text-base leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              LEAF<span className="text-accent">n</span>ROOTS
            </p>
            <p className="text-muted-foreground text-[10px] leading-none tracking-wider">Drop of Wellness</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label, hasDropdown }) =>
            hasDropdown ? (
              <div
                key={href}
                className="relative group"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors pb-0.5 ${
                    isActive(href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </Link>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg py-2 w-52 z-50">
                    {products.map((p) => (
                      <Link
                        key={p}
                        href="/products"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {p}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  isActive(href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917619610605"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle size={16} />
            Order on WhatsApp
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium ${isActive(href) ? 'text-primary font-bold' : 'text-foreground'}`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/917619610605"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded text-sm font-semibold mt-2"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
