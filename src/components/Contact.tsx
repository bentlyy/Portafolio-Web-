"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Download, FileText } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-primary tracking-wider uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Hablemos
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Si tienes una oportunidad laboral, un proyecto interesante o simplemente
            quieres conectar, no dudes en escribirme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-surface-light rounded-2xl border border-border p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Ubicación</p>
                  <p className="text-sm">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Github size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    @bentlyy
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors line-clamp-1"
                  >
                    Alejandro Muñoz Garay
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t md:border-t-0 md:border-l border-border md:pl-8 pt-8 md:pt-0">
              <div className="text-center">
                <FileText size={40} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Descarga mi CV</h3>
                <p className="text-xs text-text-muted mb-4">
                  PDF con mi experiencia completa, proyectos y formación.
                </p>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Download size={18} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
