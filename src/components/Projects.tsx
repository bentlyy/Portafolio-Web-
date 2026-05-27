"use client"

import { motion } from "framer-motion"
import { Github, Terminal } from "lucide-react"
import { projects } from "@/lib/data"

export default function Projects() {
  const handleGlow = (e: React.MouseEvent<HTMLDivElement>, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    element.style.setProperty("--x", `${x}px`)
    element.style.setProperty("--y", `${y}px`)
  }

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:pl-16 lg:pl-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              PROYECTOS v4.0
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
            PROYECTOS
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mb-12">
            Monitoreo en tiempo real de proyectos activos. Cada entrada representa un
            entorno desplegado con recursos dedicados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-xl flex flex-col group"
              onMouseMove={(e) => handleGlow(e, e.currentTarget)}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(135, 129, 255, 0.15), transparent 50%)",
                }}
              />
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-5 bg-surface-container-highest">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded-full border border-white/10">
                  <p className="font-mono text-[10px] text-secondary tracking-wider uppercase">
                    DESPLIEGUE ACTIVO
                  </p>
                </div>
              </div>

              <div className="flex-grow relative z-10">
                <p className="font-mono text-[10px] text-on-surface-variant/40 mb-2 tracking-wider uppercase">
                  OP_ID: {project.title.toUpperCase().replace(/\s+/g, "_").slice(0, 10)}...
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                  </span>
                  <p className="font-mono text-[10px] text-secondary tracking-widest uppercase">
                    EN VIVO
                  </p>
                </div>

                <h3 className="font-sans text-xl font-medium text-on-surface mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-primary/80 bg-primary/10 px-2 py-1 rounded-full tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-gradient w-full py-3.5 rounded-full flex items-center justify-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
                >
                  <Terminal size={16} />
                  VER PROYECTO
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-panel inline-flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
