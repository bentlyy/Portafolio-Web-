"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface Section {
  id: string
  label: string
}

interface HeaderProps {
  currentSection: number
  onNavigate: (index: number) => void
  sections: Section[]
}

export default function Header({ currentSection, onNavigate, sections }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        currentSection > 0
          ? "bg-surface/5 backdrop-blur-xl border-b border-white/15 shadow-[0_0_20px_rgba(196,192,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-24 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate(0)}
          className="font-mono text-xs tracking-[0.2em] text-primary uppercase"
        >
          CELESTIAL_OS
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((link, i) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(i); setOpen(false) }}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                currentSection === i
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface-variant/60 hover:text-primary"
              }`}
            >
              {link.label}
            </button>
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
            {sections.map((link, i) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(i); setOpen(false) }}
                className={`font-mono text-xs tracking-widest uppercase transition-colors py-2 text-left ${
                  currentSection === i
                    ? "text-primary"
                    : "text-on-surface-variant/60 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
