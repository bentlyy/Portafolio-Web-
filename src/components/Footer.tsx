"use client"

import { useLanguage } from "@/lib/LanguageProvider"
import { personalInfo } from "@/lib/data"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full py-6 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 bg-surface-container-lowest">
      <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
        {t.footer.portfolio}
      </div>
      <div className="font-mono text-xs text-on-surface-variant/60 text-center tracking-wider">
        © {new Date().getFullYear()} {personalInfo.name} • {t.footer.allSystems}
      </div>
      <div className="flex gap-6">
        <a
          href="#hero"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          {t.footer.home}
        </a>
        <a
          href="#about"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          {t.footer.about}
        </a>
        <a
          href="#projects"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          {t.footer.projects}
        </a>
        <a
          href="#contact"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          {t.footer.contact}
        </a>
      </div>
    </footer>
  )
}
