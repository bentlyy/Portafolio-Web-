"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Download, FileText } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-8 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-secondary" />
            <p className="font-mono text-xs text-secondary tracking-widest uppercase">
              CONTACTO
            </p>
            <span className="w-12 h-[1px] bg-secondary" />
          </div>
          <h2 className="font-sans text-[32px] md:text-[48px] font-semibold text-on-surface leading-tight mb-4">
            ENVÍA UN <span className="text-primary">MENSAJE</span>
          </h2>
          <p className="font-body text-on-surface-variant max-w-xl mx-auto">
            Estoy en búsqueda activa de nuevas oportunidades profesionales. Si tienes
            un proyecto, una idea o simplemente quieres conversar — estaré encantado de
            escucharte.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                     Correo
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <MapPin size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    Ubicación
                  </p>
                  <p className="font-body text-sm text-on-surface-variant">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Github size={18} className="text-purple-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    GitHub
                  </p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    @bentlyy
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                    LinkedIn
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors line-clamp-1"
                  >
                    Alejandro Muñoz Garay
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t md:border-t-0 md:border-l border-white/10 md:pl-8 pt-8 md:pt-0">
              <div className="text-center">
                <FileText size={36} className="text-primary mx-auto mb-3" />
                <h3 className="font-sans font-semibold text-on-surface mb-1">
                  Descargar CV
                </h3>
                <p className="font-body text-xs text-on-surface-variant/60 mb-5">
                  Registro completo con experiencia, proyectos y formación.
                </p>
                <a
                  href="/cv.pdf"
                  download="AlejandroMuñozCV.pdf"
                  className="pill-gradient inline-flex items-center gap-2 text-on-primary px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest"
                >
                  <Download size={16} />
                  Descargar
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
