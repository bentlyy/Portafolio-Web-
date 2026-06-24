"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, type Lang, type TranslationSet } from "./translations"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationSet
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es")
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
