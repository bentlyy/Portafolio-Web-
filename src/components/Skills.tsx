"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const categoryColors: Record<string, string> = {
  languages: "from-blue-500/20 to-blue-600/10",
  backend: "from-green-500/20 to-green-600/10",
  frontend: "from-purple-500/20 to-purple-600/10",
  "DevOps & Cloud": "from-orange-500/20 to-orange-600/10",
  databases: "from-cyan-500/20 to-cyan-600/10",
  tools: "from-pink-500/20 to-pink-600/10",
}

const categoryBorders: Record<string, string> = {
  languages: "border-blue-500/20",
  backend: "border-green-500/20",
  frontend: "border-purple-500/20",
  "DevOps & Cloud": "border-orange-500/20",
  databases: "border-cyan-500/20",
  tools: "border-pink-500/20",
}

const categoryDots: Record<string, string> = {
  languages: "bg-blue-500",
  backend: "bg-green-500",
  frontend: "bg-purple-500",
  "DevOps & Cloud": "bg-orange-500",
  databases: "bg-cyan-500",
  tools: "bg-pink-500",
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-light/30 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Tecnologías que uso
          </h2>
          <p className="text-text-muted max-w-2xl mb-12">
            Mi stack principal y herramientas que manejo en el día a día.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className={`bg-surface-light rounded-xl p-5 border ${categoryBorders[category] || "border-border"} hover:border-primary/30 transition-all`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2 h-2 rounded-full ${categoryDots[category] || "bg-primary"}`} />
                <h3 className="text-sm font-semibold capitalize">{category}</h3>
              </div>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-muted">{skill.name}</span>
                      <span className="text-text-muted/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIdx * 0.1 + 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category] || "from-primary/50 to-primary"} `}
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
