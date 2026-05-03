"use client"

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react"
import { Language, Region, regions, translations } from "./translations"

interface LanguageContextType {
  language: Language
  region: Region
  setLanguageAndRegion: (lang: Language, reg: Region) => void
  t: (section: keyof typeof translations, key: string) => string
  tArray: (section: keyof typeof translations, key: string) => string[]
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [region, setRegion] = useState<Region>("austria")

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return
    
    try {
      const savedLang = localStorage.getItem("azurel-language") as Language | null
      const savedRegion = localStorage.getItem("azurel-region") as Region | null
      
      if (savedLang && savedRegion) {
        setLanguage(savedLang)
        setRegion(savedRegion)
      }
    } catch (e) {
      console.error("Error loading language settings:", e)
    }
  }, [])

  // Save to localStorage when changed
  useEffect(() => {
    if (typeof window === "undefined") return
    
    try {
      localStorage.setItem("azurel-language", language)
      localStorage.setItem("azurel-region", region)
    } catch (e) {
      console.error("Error saving language settings:", e)
    }
  }, [language, region])

  const setLanguageAndRegion = useCallback((lang: Language, reg: Region) => {
    setLanguage(lang)
    setRegion(reg)
  }, [])

  // Translation function - supports nested keys like "pillarLabels.ethical"
  const t = useCallback((section: keyof typeof translations, key: string): string => {
    const sectionData = translations[section]
    if (!sectionData) return key
    
    // Handle nested keys like "pillarLabels.ethical"
    const keys = key.split(".")
    let data: unknown = sectionData
    
    for (const k of keys) {
      if (data && typeof data === "object" && k in data) {
        data = (data as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    
    // Now data should be the translation object with language keys
    if (data && typeof data === "object" && language in data) {
      const value = (data as Record<Language, string | string[]>)[language]
      if (typeof value === "string") return value
      if (Array.isArray(value)) return value.join(" ")
    }
    
    return key
  }, [language])

  // Translation function for arrays
  const tArray = useCallback((section: keyof typeof translations, key: string): string[] => {
    const sectionData = translations[section]
    if (!sectionData) return []
    
    const keyData = (sectionData as Record<string, Record<Language, string | string[]>>)[key]
    if (!keyData) return []
    
    const value = keyData[language]
    if (Array.isArray(value)) return value
    if (typeof value === "string") return [value]
    
    return []
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, region, setLanguageAndRegion, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return safe defaults
    return {
      language: "en" as Language,
      region: "austria" as Region,
      setLanguageAndRegion: () => {},
      t: (section: string, key: string) => key,
      tArray: () => [] as string[],
    }
  }
  return context
}
