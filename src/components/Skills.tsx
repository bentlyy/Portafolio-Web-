"use client"

import { useLanguage } from "@/lib/LanguageProvider"
import { skills } from "@/lib/data"

const categoryAccents: Record<string, string> = {
  Lenguajes: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  Backend: "bg-green-500/15 text-green-400 border-green-500/20",
  Frontend: "bg-green-500/15 text-green-400 border-green-500/20",
  DevOps: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  "Bases de Datos": "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
  Testing: "bg-pink-500/15 text-pink-400 border-pink-500/20",
  Seguridad: "bg-red-500/15 text-red-400 border-red-500/20",
}

const categoryBorders: Record<string, string> = {
  Lenguajes: "border-blue-500/20",
  Backend: "border-green-500/20",
  Frontend: "border-green-500/20",
  DevOps: "border-orange-500/20",
  "Bases de Datos": "border-cyan-500/20",
  Testing: "border-pink-500/20",
  Seguridad: "border-red-500/20",
}

const categoryDots: Record<string, string> = {
  Lenguajes: "bg-blue-500",
  Backend: "bg-green-500",
  Frontend: "bg-green-500",
  DevOps: "bg-orange-500",
  "Bases de Datos": "bg-cyan-500",
  Testing: "bg-pink-500",
  Seguridad: "bg-red-500",
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]">
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-secondary" />
          <p className="font-mono text-xs text-secondary tracking-widest uppercase">
            {t.skills.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-12">
          {t.skills.titleStart} <span className="text-primary">{t.skills.titleEnd}</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`glass-card p-5 rounded-xl ${categoryBorders[category] || "border-white/10"}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${categoryDots[category] || "bg-primary"}`}
                />
                <h3 className="font-sans text-sm font-semibold text-on-surface capitalize">
                  {t.skillCategories[category]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-[10px] tracking-wide px-2.5 py-1.5 rounded-lg border ${
                      categoryAccents[category] || "bg-primary/15 text-primary border-primary/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
