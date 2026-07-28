"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/LanguageProvider"
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

export default function Home() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  const touchStart = useRef<number | null>(null)

  useEffect(() => {
    const saved = sessionStorage.getItem("currentSection")
    if (saved) setCurrent(Number(saved))
  }, [])

  useEffect(() => {
    sessionStorage.setItem("currentSection", String(current))
  }, [current])

  const SECTIONS = [
    { id: "hero", label: t.nav.home, Component: Hero },
    { id: "about", label: t.nav.about, Component: About },
    { id: "experience", label: t.nav.experience, Component: Experience },
    { id: "projects", label: t.nav.projects, Component: Projects },
    { id: "skills", label: t.nav.skills, Component: Skills },
    { id: "infra", label: t.nav.infra, Component: Infra },
    { id: "contact", label: t.nav.contact, Component: Contact },
  ]

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
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
        e.preventDefault()
        if (e.deltaX > 0) next()
        else prev()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("wheel", handleWheel)
    }
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
          aria-label={t.page.prev}
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {current < SECTIONS.length - 1 && (
        <button
          onClick={next}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full glass-panel hover:border-primary/50 hover:text-primary hover:scale-110 transition-all duration-300 text-on-surface-variant/60"
          aria-label={t.page.next}
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
