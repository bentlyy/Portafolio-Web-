"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase">
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Lo que he construido
          </h2>
          <p className="text-text-muted max-w-2xl mb-12">
            Proyectos full-stack que muestran mi experiencia en desarrollo web, IoT,
            machine learning y arquitectura de software.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="bg-surface-light rounded-xl border border-border overflow-hidden group relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                    <div className="text-center p-6">
                      <span className="text-5xl font-bold text-primary/30">
                        {project.title.charAt(0)}
                      </span>
                      <p className="text-xs text-text-muted/50 mt-2">Preview próximamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {project.features.map((f, i) => (
                    <li key={i} className="text-xs md:text-sm text-text-muted/80 flex items-start gap-2">
                      <span className="text-accent mt-1 select-none">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
