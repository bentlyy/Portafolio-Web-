"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-text-secondary mb-12 tracking-wide">
            Contacto
          </h2>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors w-fit"
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors w-fit"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors w-fit"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
