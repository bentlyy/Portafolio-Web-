"use client"

import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 bg-surface-container-lowest">
      <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
        CELESTIAL VOYAGER
      </div>
      <div className="font-mono text-xs text-on-surface-variant/60 text-center tracking-wider">
        © {new Date().getFullYear()} {personalInfo.name} • ALL SYSTEMS OPERATIONAL
      </div>
      <div className="flex gap-6">
        <a
          href="#hero"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          ORBIT
        </a>
        <a
          href="#about"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          BIO
        </a>
        <a
          href="#projects"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          STATIONS
        </a>
        <a
          href="#contact"
          className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
        >
          SIGNAL
        </a>
      </div>
    </footer>
  )
}
