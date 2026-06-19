"use client"

import { skills } from "@/lib/data"

const categoryAccents: Record<string, string> = {
  Lenguajes: "bg-blue-500",
  Backend: "bg-green-500",
  Frontend: "bg-purple-500",
  "DevOps & Cloud": "bg-orange-500",
  "Bases de Datos": "bg-cyan-500",
  Herramientas: "bg-pink-500",
}

const categoryBorders: Record<string, string> = {
  Lenguajes: "border-blue-500/20",
  Backend: "border-green-500/20",
  Frontend: "border-purple-500/20",
  "DevOps & Cloud": "border-orange-500/20",
  "Bases de Datos": "border-cyan-500/20",
  Herramientas: "border-pink-500/20",
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full h-full flex items-center justify-center overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-12 md:py-20 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-secondary" />
          <p className="font-mono text-xs text-secondary tracking-widest uppercase">
            RECURSOS DEL SISTEMA
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-12">
          STACK <span className="text-primary">TECNOLÓGICO</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div
              key={category}
              className={`glass-card p-5 rounded-xl ${categoryBorders[category] || "border-white/10"}`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className={`w-2 h-2 rounded-full ${categoryAccents[category] || "bg-primary"}`}
                />
                <h3 className="font-sans text-sm font-semibold text-on-surface capitalize">
                  {category}
                </h3>
              </div>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-body text-xs text-on-surface-variant">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-on-surface-variant/40">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
