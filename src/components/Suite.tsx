"use client"

import { useState } from "react"
import {
  CalendarDays,
  Trophy,
  ClipboardList,
  Package,
  Calculator,
  FileText,
  Bell,
  Users,
  ArrowUpRight,
  Layers,
  ChevronDown,
} from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
import { suite } from "@/lib/data"
import type { LucideIcon } from "lucide-react"

const icons: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  trophy: Trophy,
  clipboard: ClipboardList,
  package: Package,
  calculator: Calculator,
  file: FileText,
  bell: Bell,
  users: Users,
}

export default function Suite() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-6 w-full">
      <div className="relative rounded-2xl border border-outline-variant bg-surface-container-lowest overflow-hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="relative w-full px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer hover:bg-primary/5 transition-colors duration-300"
          >
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] text-on-primary bg-primary px-3 py-1.5 rounded-full tracking-widest uppercase font-bold">
                  <Layers size={12} />
                  {t.projects.suiteLabel}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] text-outline tracking-widest uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  {suite.products.length} {t.projects.live}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="hidden sm:inline-block font-mono text-[10px] text-primary tracking-widest uppercase font-bold">
                  {open ? t.projects.suiteCollapse : t.projects.suiteExpand}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </div>
            </div>
          </button>

          {open && (
            <div className="px-5 md:px-6 pt-5 pb-6 md:pb-8 border-t border-outline-variant/40">
              <h3 className="font-sans text-2xl md:text-3xl font-semibold text-on-surface leading-tight mb-3">
                {t.projects.suiteTitle}
              </h3>
              <p className="font-body text-sm md:text-base text-on-surface-variant max-w-3xl mb-6">
                {t.projects.suiteDescription}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
                {suite.products.map((product) => {
                  const Icon = icons[product.icon] ?? Layers
                  return (
                    <a
                      key={product.id}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel rounded-xl px-3.5 py-3 flex items-center gap-2.5 text-left hover:text-primary hover:border-primary/40 transition-all duration-300"
                    >
                      <Icon size={16} className="text-primary flex-shrink-0" />
                      <span className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors leading-tight">
                        {product.id}
                      </span>
                    </a>
                  )
                })}
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/40 pt-5">
                <p className="font-mono text-[10px] text-outline tracking-widest uppercase">
                  {t.projects.suiteHint}
                </p>
                <a
                  href={suite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-gradient py-3 px-6 rounded-full flex items-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
                >
                  {t.projects.suiteCta}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}