"use client"

import { Briefcase, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-8 md:py-12 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-secondary" />
          <p className="font-mono text-xs text-secondary tracking-widest uppercase">
            {t.experience.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-12">
          {t.experience.title}
        </h2>

        <div className="space-y-8">
          {t.experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-12px] top-0 bg-primary-container rounded-full p-2 shadow-[0_0_10px_rgba(135,129,255,0.3)]">
                <Briefcase size={14} className="text-on-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                      </span>
                      <p className="font-mono text-[10px] text-secondary tracking-widest uppercase">
                        {t.experience.active}
                      </p>
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-on-surface mt-2">
                      {exp.role}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant/80 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-on-surface-variant/50 bg-surface-container-high px-3 py-1.5 rounded-full tracking-wider whitespace-nowrap border border-white/5">
                    {exp.period}
                  </span>
                </div>

                <p className="font-body text-sm text-on-surface-variant mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-on-surface-variant/80 flex items-start gap-2.5"
                    >
                      <span className="text-primary mt-1 select-none text-xs">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {idx === 0 && (
                  <a
                    href="https://github.com/bentlyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel hover:border-primary/40 hover:text-primary hover:scale-[1.02] transition-all duration-300 font-mono text-xs tracking-widest uppercase"
                  >
                    <ExternalLink size={14} />
                    Clínica Salud Vital — Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
