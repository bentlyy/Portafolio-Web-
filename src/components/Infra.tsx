"use client"

import { Cloud, Server, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

type ServiceStatus = "online" | "maintenance" | "updating" | "error"

const statusConfig: Record<ServiceStatus, { labelKey: string; dot: string; ping: string }> = {
  online: { labelKey: "statusOnline", dot: "bg-emerald-400", ping: "bg-emerald-400" },
  maintenance: { labelKey: "statusMaintenance", dot: "bg-amber-400", ping: "bg-amber-400" },
  updating: { labelKey: "statusUpdating", dot: "bg-sky-400", ping: "bg-sky-400" },
  error: { labelKey: "statusError", dot: "bg-red-400", ping: "bg-red-400" },
}

const infra = [
  {
    provider: "Cloudflare",
    icon: Cloud,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    color: "border-orange-500/20",
    accent: "bg-orange-500",
    services: [
      { name: "Portfolio", url: "https://amgdeveloper.cl", status: "online" as ServiceStatus },
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
      { name: "AgroBot-Alert", url: "https://agrobot.amgdeveloper.cl", status: "error" as ServiceStatus },
      { name: "TallerPro", url: "https://taller.amgdeveloper.cl", status: "error" as ServiceStatus },
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
      { name: "Clínica Salud Vital", url: "https://clinica-salud-vital.onrender.com", status: "online" as ServiceStatus },
    ],
    tech: ["Web Service", "PostgreSQL", "Auto Deploy", "Docker"],
  },
]

export default function Infra() {
  const { t } = useLanguage()

  return (
    <section id="infra" className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-8 md:px-24 py-8 md:py-12 w-full">
        <div className="md:pl-16 lg:pl-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              {t.infra.subtitle}
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
            {t.infra.title}
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mb-12">
            {t.infra.description}
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
                      {t.infra.provider}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {item.services.map((s) => (
                      <span key={s.name} className={`w-1.5 h-1.5 rounded-full ${item.accent}`} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {item.services.map((s) => {
                    const st = statusConfig[s.status]
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
                      >
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                          {s.status === "online" && (
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${st.ping} opacity-75`} />
                          )}
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${st.dot}`} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-sans text-sm font-medium text-on-surface truncate">
                              {s.name}
                            </p>
                            <span className={`font-mono text-[8px] tracking-wider px-1.5 py-0.5 rounded-full whitespace-nowrap ${
                              s.status === "online" ? "bg-emerald-500/10 text-emerald-400" :
                              s.status === "maintenance" ? "bg-amber-500/10 text-amber-400" :
                              s.status === "updating" ? "bg-sky-500/10 text-sky-400" :
                              "bg-red-500/10 text-red-400"
                            }`}>
                              {t.infra[st.labelKey as keyof typeof t.infra]}
                            </span>
                          </div>
                          <p className="font-mono text-[9px] text-on-surface-variant/40 tracking-wider truncate">
                            {s.url.replace(/https?:\/\//, "")}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tch) => (
                    <span
                      key={tch}
                      className="font-mono text-[9px] text-on-surface-variant/60 bg-surface-container-high px-2 py-1 rounded-full tracking-wider"
                    >
                      {tch}
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
