"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Phone, Menu, X, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Droplets className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-xl tracking-tight text-blue-950">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
          {siteConfig.navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 font-medium">24/7 Emergency Service</span>
            <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-bold flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {siteConfig.navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-2">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 bg-blue-50 text-blue-700 py-3 rounded-md font-bold">
              <Phone className="h-5 w-5" />
              Call {siteConfig.phoneDisplay}
            </a>
            <Button asChild size="lg" className="w-full">
              <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
