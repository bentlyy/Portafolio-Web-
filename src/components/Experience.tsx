"use client"

import { motion } from "framer-motion"
import { Briefcase, ExternalLink, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      className="relative w-full h-full flex items-start justify-center overflow-y-auto pt-[61px] md:pt-[69px]"
    >
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-4 md:py-8 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-primary" />
          <p className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
            {t.experience.subtitle}
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-8">
          {t.experience.title}
        </h2>

        <div className="relative space-y-6">
          <div className="absolute left-[15px] md:left-[17px] top-2 bottom-2 w-px bg-outline-variant" />

          {t.experienceData.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 md:pl-14"
            >
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary-container border border-primary/30">
                <Briefcase size={15} className="text-primary" />
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-sans font-semibold text-on-surface text-lg leading-snug">
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs text-primary mt-1 tracking-wide">
                      {job.company}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-outline border border-outline-variant px-3 py-1 rounded-full tracking-wider">
                    {job.period}
                  </span>
                </div>

                <p className="font-body text-[15px] text-on-surface-variant leading-relaxed mt-3">
                  {job.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/bentlyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:gap-3 transition-all"
          >
            {t.experience.active}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
