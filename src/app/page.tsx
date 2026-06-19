"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Infra from "@/components/Infra"
import Contact from "@/components/Contact"
import NebulaParticles from "@/components/NebulaParticles"
import ScrollIndicator from "@/components/ScrollIndicator"

const SECTIONS = [
  { id: "hero", label: "INICIO", Component: Hero },
  { id: "about", label: "SOBRE MÍ", Component: About },
  { id: "experience", label: "EXPERIENCIA", Component: Experience },
  { id: "projects", label: "PROYECTOS", Component: Projects },
  { id: "skills", label: "STACK", Component: Skills },
  { id: "infra", label: "INFRAESTRUCTURA", Component: Infra },
  { id: "contact", label: "CONTACTO", Component: Contact },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const touchStart = useRef<number | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    if (current < SECTIONS.length - 1) {
      setCurrent((c) => c + 1)
    }
  }, [current])

  const prev = useCallback(() => {
    if (current > 0) {
      setCurrent((c) => c - 1)
    }
  }, [current])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next()
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [next, prev])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = e.changedTouches[0].clientX - touchStart.current
    if (Math.abs(diff) > 50) {
      if (diff < 0) next()
      else prev()
    }
    touchStart.current = null
  }

  return (
    <main
      className="h-dvh w-screen overflow-hidden nebula-bg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <NebulaParticles />
      <ScrollIndicator currentSection={current} totalSections={SECTIONS.length} />
      <Header currentSection={current} onNavigate={goTo} sections={SECTIONS} />

      <div
        className="flex h-full will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {SECTIONS.map(({ id, Component }) => (
          <section
            key={id}
            id={id}
            className="w-screen h-dvh flex-shrink-0 overflow-y-auto"
          >
            <Component />
          </section>
        ))}
      </div>

      {current > 0 && (
        <button
          onClick={prev}
          className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full glass-panel hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 text-on-surface-variant/60"
          aria-label="Anterior"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {current < SECTIONS.length - 1 && (
        <button
          onClick={next}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full glass-panel hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 text-on-surface-variant/60"
          aria-label="Siguiente"
        >
          <ChevronRight size={22} />
        </button>
      )}

      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5">
        {SECTIONS.map(({ label }, i) => (
          <button
            key={label}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? "w-7 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={label}
          />
        ))}
      </div>
    </main>
  )
}
