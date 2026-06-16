"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-text-secondary mb-12 tracking-wide">
            Tecnologías
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              >
                <h3 className="text-sm font-medium text-text mb-3">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {items.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-sm text-text-secondary"
                    >
                      {skill.name}
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
