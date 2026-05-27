"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              SYSTEM_BIO v2.0
            </p>
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-8">
            NODE <span className="text-primary">BIO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.about.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-on-surface text-sm">
                    Formación
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">
                    Ingeniería Civil en Informática
                  </p>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 mt-1 tracking-wider">
                    Universidad Adventista de Chile · 2019-2024
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-on-surface text-sm">
                    Ubicación
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant mt-1">
                    {personalInfo.location}
                  </p>
                  <p className="font-mono text-[10px] text-secondary mt-1 tracking-wider">
                    STATUS: AVAILABLE
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
