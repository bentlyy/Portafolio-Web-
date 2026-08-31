"use client"

import { Mail, MapPin, Download, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]"
    >
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.contact.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
          {t.contact.titleStart} <span className="text-primary">{t.contact.titleEnd}</span>
        </h2>
        <p className="font-body text-[15px] md:text-base text-on-surface-variant max-w-xl leading-relaxed mb-10">
          {t.contact.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="bg-primary-container p-3 rounded-lg">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-outline mb-1">
                  {t.contact.email}
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-sans text-on-surface font-medium hover:text-primary transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="bg-secondary-container p-3 rounded-lg">
                <MapPin size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-outline mb-1">
                  {t.contact.location}
                </h3>
                <p className="font-sans text-on-surface font-medium">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/cv.pdf"
            download="AlejandroMuñozCV.pdf"
            className="pill-gradient px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
          >
            <Download size={16} />
            {t.contact.downloadCv}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/50 uppercase tracking-widest transition-all duration-300"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/50 uppercase tracking-widest transition-all duration-300"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p className="mt-12 font-mono text-[9px] text-outline tracking-[0.2em] uppercase">
          {t.contact.portfolio} · {t.contact.allSystems} · © 2024 {personalInfo.name}
        </p>
      </div>
    </section>
  )
}
