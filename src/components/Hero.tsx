"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Download, ArrowDown } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Hero() {

  const navItems = [
    { label: "SOBRE MÍ", href: "#about" },
    { label: "PROYECTOS", href: "#projects" },
    { label: "EXPERIENCIA", href: "#experience" },
    { label: "CONTACTO", href: "#contact" },
  ]

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-24 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
              </span>
              <span className="font-mono text-[10px] text-secondary tracking-[0.3em] uppercase">
                DISPONIBLE
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-[clamp(36px,8vw,96px)] font-bold leading-none tracking-tight mb-4"
          >
            <span className="text-on-surface">{personalInfo.name.split(" ")[0]}</span>{" "}
            <span className="text-primary">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-on-surface-variant/80 max-w-2xl mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <span className="font-mono text-xs tracking-widest uppercase">{item.label}</span>
                <ArrowDown size={12} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-gradient px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-primary uppercase tracking-widest"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/40 uppercase tracking-widest transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              download="AlejandroMuñozCV.pdf"
              className="glass-panel px-6 py-3 rounded-full inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant hover:text-primary hover:border-primary/40 uppercase tracking-widest transition-all duration-300"
            >
              <Download size={16} />
              DESCARGAR CV
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] text-on-surface-variant/30 tracking-[0.4em] uppercase">DESPLAZA</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-on-surface-variant/30" />
        </motion.div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 hidden lg:flex flex-col gap-3">
        {[
          { label: "01 / ROL", value: "Full-Stack" },
          { label: "02 / ENFOQUE", value: "DevOps & ML" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            className="group cursor-default"
          >
            <p className="font-mono text-[9px] text-primary/30 tracking-[0.2em] uppercase mb-0.5 group-hover:text-primary/60 transition-colors">
              {item.label}
            </p>
            <p className="font-sans text-sm text-on-surface/60 font-medium group-hover:text-on-surface transition-colors">
              {item.value}
            </p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="group cursor-default"
        >
          <p className="font-mono text-[9px] text-primary/30 tracking-[0.2em] uppercase mb-0.5 group-hover:text-primary/60 transition-colors">
            03 / ESTADO
          </p>
          <p className="font-sans text-sm text-secondary font-medium flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
            </span>
            DISPONIBLE
          </p>
        </motion.div>
      </div>
    </section>
  )
}
