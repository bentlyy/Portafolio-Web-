"use client"

import { GraduationCap, MapPin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="relative w-full h-full flex items-center justify-center overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 md:px-0 py-12 md:py-20 w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-[1px] bg-secondary" />
          <p className="font-mono text-xs text-secondary tracking-widest uppercase">
            SISTEMA v2.0
          </p>
        </div>
        <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-8">
          SOBRE <span className="text-primary">MÍ</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {personalInfo.about.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
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
                    DISPONIBLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
