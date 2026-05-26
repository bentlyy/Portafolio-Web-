"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface-light/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase">Experiencia</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
            Donde he trabajado
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-border"
            >
              <div className="absolute left-[-9px] top-0 bg-primary rounded-full p-1.5">
                <Briefcase size={14} className="text-white" />
              </div>

              <div className="bg-surface-light rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-text-muted">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted bg-surface px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-text-muted/80 text-sm mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-text-muted flex items-start gap-2">
                      <span className="text-primary mt-1 select-none">▹</span>
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
