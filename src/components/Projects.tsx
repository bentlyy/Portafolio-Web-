"use client"

import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { projects } from "@/lib/data"

export default function Projects() {
  const { t } = useLanguage()

  const handleGlow = (e: React.MouseEvent<HTMLDivElement>, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    element.style.setProperty("--x", `${x}px`)
    element.style.setProperty("--y", `${y}px`)
  }

  return (
    <section id="projects" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-8 md:py-12 w-full">
        <div className="md:pl-16 lg:pl-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              {t.projects.subtitle}
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
            {t.projects.title}
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mb-12">
            {t.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
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
                    {t.projects.activeDeployment}
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
                    {t.projects.live}
                  </p>
                </div>

                <h3 className="font-sans text-xl font-medium text-on-surface mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant mb-4 line-clamp-2">
                  {t.projectDescriptions[idx]}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tch) => (
                    <span
                      key={tch}
                      className="font-mono text-[10px] text-primary/80 bg-primary/10 px-2 py-1 rounded-full tracking-wider"
                    >
                      {tch}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-gradient flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
                >
                  <ExternalLink size={16} />
                  {t.projects.site}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/40 uppercase tracking-widest transition-all duration-300"
                >
                  <Github size={16} />
                  {t.projects.code}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
