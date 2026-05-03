"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { regions, languageNames, Language, Region } from "@/lib/translations"

export function LanguageSwitcher() {
  const { language, region, setLanguageAndRegion } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (reg: Region, lang: Language) => {
    setLanguageAndRegion(lang, reg)
    setIsOpen(false)
  }

  const currentRegionName = regions[region].name

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[0.65rem] tracking-[1.5px] uppercase text-wine-deep/70 hover:text-wine-deep transition-colors bg-transparent border-none p-0"
        aria-label="Select language and region"
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span>{currentRegionName} · {languageNames[language]}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-ivory border border-blue-mid/20 shadow-lg min-w-[200px] z-[1001] animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3 border-b border-blue-mid/10">
            <span className="text-[0.6rem] tracking-[2px] uppercase text-blue-mid">
              Select Region
            </span>
          </div>

          {/* Regions & Languages */}
          <div className="py-2">
            {(Object.entries(regions) as [Region, typeof regions[Region]][]).map(([regionKey, regionConfig]) => (
              <div key={regionKey} className="px-4 py-2">
                {/* Region Name */}
                <div className="text-[0.7rem] font-medium text-wine-deep mb-2 tracking-wide">
                  {regionConfig.name}
                </div>
                
                {/* Language Options */}
                <div className="flex gap-2">
                  {regionConfig.languages.map((lang) => {
                    const isSelected = region === regionKey && language === lang
                    return (
                      <button
                        key={lang}
                        onClick={() => handleSelect(regionKey, lang)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-[1px] uppercase transition-colors border ${
                          isSelected
                            ? "bg-wine text-ivory border-wine"
                            : "bg-transparent text-wine-deep/70 border-blue-mid/20 hover:border-wine hover:text-wine-deep"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" strokeWidth={2} />}
                        {languageNames[lang]}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
