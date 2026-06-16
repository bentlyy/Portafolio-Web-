"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-text-secondary mb-12 tracking-wide">
            Experiencia
          </h2>

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                  <h3 className="text-base font-medium text-text">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-text-secondary">
                    {exp.company}
                  </span>
                  <span className="text-xs text-text-secondary/50 md:ml-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary/80 flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 select-none">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
