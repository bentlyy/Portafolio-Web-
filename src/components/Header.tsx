"use client"

import { useState } from "react"
import { Menu, X, Languages } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

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
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es")
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        currentSection > 0
          ? "bg-surface/70 backdrop-blur-xl border-b border-outline-variant shadow-[0_0_20px_rgba(88,28,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-24 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate(0)}
          className="font-mono text-xs tracking-[0.2em] text-primary uppercase font-bold"
        >
          AMG_V2
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((link, i) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(i); setOpen(false) }}
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 font-medium ${
                currentSection === i
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-outline hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 font-mono text-[10px] text-outline hover:text-primary tracking-widest uppercase transition-colors ml-4 px-3 py-1.5 rounded-full border border-outline-variant hover:border-primary/40"
            aria-label="Switch language"
          >
            <Languages size={14} />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 font-mono text-[10px] text-outline hover:text-primary tracking-widest uppercase transition-colors px-2.5 py-1.5 rounded-full border border-outline-variant hover:border-primary/40"
            aria-label="Switch language"
          >
            <Languages size={14} />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            className="text-primary hover:bg-primary-container p-2 rounded-full transition-all duration-300"
            onClick={() => setOpen(!open)}
            aria-label={t.page.menu}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface-container-low border-t border-outline-variant backdrop-blur-xl">
          <div className="flex flex-col px-8 py-4 gap-3">
            {sections.map((link, i) => (
              <button
                key={link.id}
                onClick={() => { onNavigate(i); setOpen(false) }}
                className={`font-mono text-xs tracking-widest uppercase transition-colors py-2 text-left font-medium ${
                  currentSection === i
                    ? "text-primary"
                    : "text-outline hover:text-primary"
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
