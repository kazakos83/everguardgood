
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Shield, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-48 h-12">
                <Image
                  src="/everguard-logo.png"
                  alt="Everguard Intelligence"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation?.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.href || '#'}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                >
                  {item?.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 ml-6">
                <a href="tel:+61-1800-EVERGUARD" className="text-red-600 hover:text-red-700">
                  <Phone className="h-5 w-5" />
                </a>
                <Button
                  asChild
                  className="everguard-gradient text-white hover:opacity-90 btn-modern shadow-glow rounded-xl px-6 py-2 font-semibold"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg border-t"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation?.map((item) => (
                  <Link
                    key={item?.name}
                    href={item?.href || '#'}
                    className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item?.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-4 mb-4">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span className="text-gray-700">1800-EVERGUARD</span>
                  </div>
                  <Button
                    asChild
                    className="w-full everguard-gradient text-white hover:opacity-90 btn-modern rounded-xl py-3 font-semibold shadow-glow"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  )
}

export default Header
