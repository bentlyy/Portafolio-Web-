"use client"

import { GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { personalInfo } from "@/lib/data"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]">
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.about.system}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-8">
          {t.about.title} <span className="text-primary">{t.about.titleAccent}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {t.aboutText.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-primary-container p-3 rounded-lg">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-on-surface text-sm">
                    {t.about.education}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">
                    {t.about.degree}
                  </p>
                  <p className="font-mono text-[10px] text-outline mt-1 tracking-wider">
                    Universidad Adventista de Chile · 2019-2024
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-container p-3 rounded-lg">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-on-surface text-sm">
                    {t.about.location}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">
                    {personalInfo.location}
                  </p>
                  <p className="font-mono text-[10px] text-primary mt-1 tracking-wider">
                    {t.about.available}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
