"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-text-secondary mb-8 tracking-wide">
            Sobre mí
          </h2>

          <div className="space-y-4 max-w-3xl">
            {personalInfo.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-text leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
