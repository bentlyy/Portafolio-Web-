"use client"

import { motion } from "framer-motion"
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
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              RECURSOS DEL SISTEMA
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-12">
            STACK <span className="text-primary">TECNOLÓGICO</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
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
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIdx * 0.08 + 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
