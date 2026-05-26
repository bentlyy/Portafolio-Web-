"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase">Sobre mí</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
            Conoce un poco más de mí
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-surface-light rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Formación</h3>
                  <p className="text-sm text-text-muted mt-1">
                    Ingeniería Civil en Informática
                  </p>
                  <p className="text-xs text-text-muted/60">
                    Universidad Adventista de Chile · 2019-2024
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-light rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-sm text-text-muted mt-1">
                    San Pablo, Santiago, Chile
                  </p>
                  <p className="text-xs text-text-muted/60">Disponibilidad inmediata</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
