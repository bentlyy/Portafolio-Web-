"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Github,
  ExternalLink,
  Package,
  Terminal,
  Wrench,
  ShieldCheck,
  Cpu,
  Blocks,
  Check,
  Copy,
} from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { aiTools } from "@/lib/data"

export default function Tools() {
  const { t } = useLanguage()

  return (
    <section
      id="tools"
      className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.tools.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-6">
          {t.tools.titleStart} <span className="text-primary">{t.tools.titleEnd}</span>
        </h2>
        <p className="font-body text-[15px] md:text-base text-on-surface-variant max-w-3xl leading-relaxed">
          {t.tools.description}
        </p>

        <div className="flex flex-col gap-8 mt-10">
          {aiTools.map((tool, idx) => {
            const spec = t.aiToolSpecs[tool.id]

            return (
              <motion.article
                key={tool.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] text-primary bg-primary-container/60 px-2 py-1 rounded-full tracking-wider font-bold uppercase">
                        {t.toolKinds[tool.kind] ?? tool.kind}
                      </span>
                      <span className="font-mono text-[10px] text-outline border border-outline-variant px-2 py-1 rounded-full tracking-wider uppercase">
                        {tool.version}
                      </span>
                      <span className="font-mono text-[10px] text-outline border border-outline-variant px-2 py-1 rounded-full tracking-wider uppercase">
                        {tool.license}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        <span className="font-mono text-[10px] text-primary tracking-widest uppercase font-bold">
                          PyPI
                        </span>
                      </span>
                    </div>
                    <h3 className="font-sans text-2xl font-semibold text-on-surface">
                      {tool.name}
                    </h3>
                  </div>

                  <InstallCommand command={tool.install} />
                </div>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-7">
                  {spec.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">
                  <div className="glass-panel rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Blocks size={14} className="text-primary" />
                      <h4 className="font-mono text-[10px] text-primary tracking-widest uppercase font-bold">
                        {t.tools.mcpToolsLabel}
                      </h4>
                      <span className="font-mono text-[10px] text-outline">
                        [{tool.mcpTools.length}]
                      </span>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {tool.mcpTools.map((mcpTool) => (
                        <li key={mcpTool.name} className="border-l-2 border-primary/30 pl-3">
                          <code className="font-mono text-[11px] text-primary block mb-0.5">
                            {mcpTool.name}()
                          </code>
                          <p className="font-body text-xs text-on-surface-variant leading-snug">
                            {spec.tools[mcpTool.name]}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench size={14} className="text-primary" />
                        <h4 className="font-mono text-[10px] text-primary tracking-widest uppercase font-bold">
                          {t.tools.features}
                        </h4>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {spec.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-2 font-body text-xs text-on-surface-variant leading-snug"
                          >
                            <Check size={13} className="text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal size={14} className="text-primary" />
                        <h4 className="font-mono text-[10px] text-primary tracking-widest uppercase font-bold">
                          {t.tools.config}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-2">
                        {spec.configs.map((cfg) => (
                          <div key={cfg.client} className="glass-panel rounded-lg px-3 py-2">
                            <p className="font-mono text-[9px] text-outline tracking-widest uppercase mb-1">
                              {cfg.client}
                            </p>
                            <pre className="font-mono text-[10px] text-on-surface-variant overflow-x-auto">
                              <code>{cfg.json}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <MetaItem icon={ShieldCheck} label={t.tools.license} value={tool.license} />
                  <MetaItem icon={Cpu} label={t.tools.clients} value={tool.clients.join(" · ")} />
                  <div className="flex flex-wrap gap-1.5">
                    {tool.tech.map((tch) => (
                      <span
                        key={tch}
                        className="font-mono text-[10px] text-primary bg-primary-container/60 px-2 py-1 rounded-full tracking-wider font-medium"
                      >
                        {tch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={tool.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-gradient flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
                  >
                    <Github size={16} />
                    {t.tools.code}
                  </a>
                  <a
                    href={tool.package}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/40 uppercase tracking-widest transition-all duration-300"
                  >
                    <Package size={16} />
                    {t.tools.package}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function InstallCommand({ command }: { command: string }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="shrink-0">
      <p className="font-mono text-[9px] text-outline tracking-widest uppercase mb-1.5">
        {t.tools.install}
      </p>
      <button
        onClick={copy}
        className="flex items-center gap-2 glass-panel rounded-full pl-4 pr-3 py-2.5 hover:border-primary/50 transition-all duration-300 group"
      >
        <span className="font-mono text-[11px] text-on-surface">{command}</span>
        {copied ? (
          <Check size={14} className="text-primary shrink-0" />
        ) : (
          <Copy size={14} className="text-outline group-hover:text-primary shrink-0 transition-colors duration-300" />
        )}
      </button>
    </div>
  )
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Icon size={14} className="text-outline" />
      <div>
        <p className="font-mono text-[9px] text-outline tracking-widest uppercase leading-none">
          {label}
        </p>
        <p className="font-mono text-[10px] text-on-surface-variant mt-0.5">{value}</p>
      </div>
    </div>
  )
}