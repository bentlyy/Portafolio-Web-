"use client"

import { Cloud, Server, Rocket } from "lucide-react"

const infra = [
  {
    provider: "Cloudflare",
    icon: Cloud,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    color: "border-orange-500/20",
    accent: "bg-orange-500",
    services: [
      { name: "Portfolio", url: "https://amgdeveloper.cl" },
    ],
    tech: ["Next.js SSG", "Cloudflare Pages", "Wrangler CLI"],
  },
  {
    provider: "AWS EC2",
    icon: Server,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    color: "border-amber-500/20",
    accent: "bg-amber-500",
    services: [
      { name: "AgroBot-Alert", url: "https://agrobot.amgdeveloper.cl" },
      { name: "TallerPro", url: "https://taller.amgdeveloper.cl" },
      { name: "ML-Portafolio", url: "https://ml.amgdeveloper.cl" },
    ],
    tech: ["Docker Compose", "Nginx Gateway", "EC2 Ubuntu", "GitHub Actions CI/CD"],
  },
  {
    provider: "Render",
    icon: Rocket,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    color: "border-cyan-500/20",
    accent: "bg-cyan-500",
    services: [
      { name: "Clínica Salud Vital", url: "https://clinica-salud-vital.onrender.com" },
    ],
    tech: ["Web Service", "PostgreSQL", "Auto Deploy", "Docker"],
  },
]

export default function Infra() {
  return (
    <section id="infra" className="relative w-full h-full flex items-center justify-center overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-12 md:py-20 w-full">
        <div className="md:pl-16 lg:pl-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              ARQUITECTURA v1.0
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
            INFRAESTRUCTURA
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mb-12">
            Distribución de los servicios en producción. Cada plataforma corre
            en un entorno aislado con recursos y estrategia de deploy independientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infra.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.provider}
                className={`glass-card p-6 rounded-xl ${item.color}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`${item.iconBg} p-2.5 rounded-lg`}>
                    <Icon size={20} className={item.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-on-surface">
                      {item.provider}
                    </h3>
                    <p className="font-mono text-[10px] text-on-surface-variant/40 tracking-wider">
                      PROVEEDOR
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {item.services.map((s) => (
                      <span key={s.name} className={`w-1.5 h-1.5 rounded-full ${item.accent}`} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {item.services.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
                    >
                      <span className="relative flex h-2 w-2 flex-shrink-0">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${item.accent} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${item.accent}`} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-sans text-sm font-medium text-on-surface truncate">
                          {s.name}
                        </p>
                        <p className="font-mono text-[9px] text-on-surface-variant/40 tracking-wider truncate">
                          {s.url.replace(/https?:\/\//, "")}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded-full tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
