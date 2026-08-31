"use client"

import { motion } from "framer-motion"
import { Server, Database, Globe, Container, Cpu, Github } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

const infraItems = [
  {
    title: "Vitaria",
    provider: "Render · PostgreSQL",
    status: "online",
    stack: ["React 19", "Express 5", "PostgreSQL 15"],
    icon: Container,
    github: "https://github.com/bentlyy/Clinica-Salud-Vital",
  },
  {
    title: "AgroBot-Alert",
    provider: "Cloudflare · MySQL",
    status: "online",
    stack: ["React 18", "Node.js", "MySQL 8"],
    icon: Database,
    github: "https://github.com/bentlyy/agrobot-alert",
  },
  {
    title: "TallerPro",
    provider: "Render · PostgreSQL",
    status: "online",
    stack: ["React 18", "Express 5", "Prisma 6"],
    icon: Server,
    github: "https://github.com/bentlyy/TallerMecanico",
  },
  {
    title: "Transporte",
    provider: "Render · PostgreSQL + PostGIS",
    status: "online",
    stack: ["React 19", "Express 4", "PostGIS"],
    icon: Globe,
    github: "https://github.com/bentlyy/Transallendes",
  },
  {
    title: "TypeForge",
    provider: "npm · Oracle Cloud",
    status: "online",
    stack: ["Node.js", "TypeScript", "CLI"],
    icon: Cpu,
    github: "https://github.com/bentlyy/typeforge",
  },
]

export default function Infra() {
  const { t } = useLanguage()

  const statusMap: Record<string, { label: string; cls: string }> = {
    online: { label: t.infra.statusOnline, cls: "bg-green-500" },
    maintenance: { label: t.infra.statusMaintenance, cls: "bg-amber-500" },
    updating: { label: t.infra.statusUpdating, cls: "bg-primary" },
    error: { label: t.infra.statusError, cls: "bg-red-500" },
  }

  return (
    <section
      id="infra"
      className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.infra.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-4">
          {t.infra.title}
        </h2>
        <p className="font-body text-[15px] md:text-base text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
          {t.infra.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {infraItems.map((item, idx) => {
            const status = statusMap[item.status]
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-5 rounded-2xl hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary-container p-2.5 rounded-lg">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="flex items-center gap-1.5">
                      <span className={`relative flex h-1.5 w-1.5 ${status.cls} rounded-full`}>
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.cls} opacity-75`} />
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-outline">
                        {status.label}
                      </span>
                    </span>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ir al repositorio en GitHub de ${item.title}`}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-outline-variant bg-surface-container-high text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary-container/60 transition-all duration-200 font-mono text-[9px] uppercase tracking-wider"
                    >
                      <Github size={13} />
                      Repo
                    </a>
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-on-surface text-base mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-[10px] text-outline tracking-wide mb-3">
                  {t.infra.provider}: {item.provider}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <span
                      key={s}
                      className="font-body text-[10px] px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
