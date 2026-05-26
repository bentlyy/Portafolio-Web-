"use client"

import { Heart } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
        </p>
        <p className="text-xs text-text-muted/50 flex items-center gap-1">
          Hecho con <Heart size={12} className="text-red-400" /> y Next.js
        </p>
      </div>
    </footer>
  )
}
