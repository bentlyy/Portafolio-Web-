"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(32px,6vw,72px)] font-medium leading-tight tracking-tight mb-6"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-text-secondary max-w-xl mb-10"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-text-secondary/30 hover:decoration-accent"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-text-secondary/30 hover:decoration-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-text-secondary/30 hover:decoration-accent"
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
