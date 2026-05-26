"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Download } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-surface pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-mono text-primary border border-primary/30 rounded-full px-4 py-1.5 mb-6 tracking-wider">
            INGENIERO CIVIL EN INFORMÁTICA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8"
        >
          Construyo sistemas completos — desde el frontend hasta la nube — con foco en
          escalabilidad, automatización y código limpio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="border border-text-muted/30 hover:border-primary/50 text-text hover:text-primary px-6 py-3 rounded-lg font-medium transition-all"
          >
            Contactar
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 text-text-muted hover:text-text transition-colors px-6 py-3"
          >
            <Download size={18} />
            <span className="text-sm">CV</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-text-muted hover:text-text transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
