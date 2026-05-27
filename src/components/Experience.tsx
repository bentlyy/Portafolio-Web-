"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              SYSTEM_LOGS v1.0
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-12">
            MISSION <span className="text-primary">LOGS</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                        ACTIVE_MISSION
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
