"use client"

import { Mail, MapPin, Github, Linkedin, Download, FileText } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-8 md:py-12 w-full">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              {t.contact.subtitle}
            </p>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-4">
            {t.contact.titleStart} <span className="text-primary">{t.contact.titleEnd}</span>
          </h2>
          <p className="font-body text-on-surface-variant max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    {t.contact.email}
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    {t.contact.location}
                  </p>
                  <p className="font-body text-sm text-on-surface-variant">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Github size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    GitHub
                  </p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    @bentlyy
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors line-clamp-1"
                  >
                    Alejandro Muñoz Garay
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t md:border-t-0 md:border-l border-white/10 md:pl-8 pt-8 md:pt-0">
              <div className="text-center">
                <FileText size={36} className="text-primary mx-auto mb-3" />
                <h3 className="font-sans font-semibold text-on-surface mb-1">
                  {t.contact.downloadCv}
                </h3>
                <p className="font-body text-xs text-on-surface-variant/60 mb-5">
                  {t.contact.cvDesc}
                </p>
                <a
                  href="/cv.pdf"
                  download="AlejandroMuñozCV.pdf"
                  className="pill-gradient inline-flex items-center gap-2 text-on-primary px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest"
                >
                  <Download size={16} />
                  {t.contact.download}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
            {t.contact.portfolio}
          </div>
          <div className="font-mono text-xs text-on-surface-variant/60 text-center tracking-wider">
            © {new Date().getFullYear()} {personalInfo.name} • {t.contact.allSystems}
          </div>
          <div className="flex gap-6">
            <a
              href="#hero"
              className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
            >
              {t.nav.about}
            </a>
            <a
              href="#projects"
              className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-on-surface-variant/60 hover:text-secondary transition-colors tracking-wider uppercase"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
