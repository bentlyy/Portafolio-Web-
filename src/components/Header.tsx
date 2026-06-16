"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "INICIO", href: "#hero" },
  { label: "SOBRE MÍ", href: "#about" },
  { label: "PROYECTOS", href: "#projects" },
  { label: "CONTACTO", href: "#contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/5 backdrop-blur-xl border-b border-white/15 shadow-[0_0_20px_rgba(196,192,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-24 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-xs tracking-[0.2em] text-primary uppercase"
        >
          CELESTIAL_OS
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                active === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant/60 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-primary hover:bg-white/5 p-2 rounded-full transition-all duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface-container-low border-t border-white/10 backdrop-blur-xl">
          <div className="flex flex-col px-8 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-widest uppercase text-on-surface-variant/60 hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
