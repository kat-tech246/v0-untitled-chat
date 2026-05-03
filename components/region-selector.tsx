"use client"

import { X, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { regions, languageNames, Language, Region } from "@/lib/translations"

interface RegionSelectorProps {
  isOpen: boolean
  onClose: () => void
}

export function RegionSelector({ isOpen, onClose }: RegionSelectorProps) {
  const { language, region, setLanguageAndRegion, t } = useLanguage()

  const handleSelect = (reg: Region, lang: Language) => {
    setLanguageAndRegion(lang, reg)
    onClose()
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
      document.body.scrollTo({ top: 0, behavior: 'smooth' })
      const main = document.querySelector('main')
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-wine-deep/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? "translate-y-0" : "translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 flex items-center justify-center text-ivory/60 hover:text-ivory transition-colors bg-transparent border-none"
          aria-label={t("misc", "close")}
        >
          <X className="w-6 h-6" strokeWidth={1} />
        </button>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif italic font-light text-3xl md:text-4xl text-ivory mb-3">
            {t("region", "title")}
          </h2>
          <p className="text-[0.7rem] tracking-[2px] text-ivory/50">
            {t("region", "subtitle")}
          </p>
        </div>

        {/* Region Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-[600px]">
          {(Object.entries(regions) as [Region, typeof regions[Region]][]).map(([regionKey, regionConfig]) => {
            const isCurrentRegion = region === regionKey
            
            return (
              <div 
                key={regionKey}
                className={`flex-1 border transition-all duration-300 ${
                  isCurrentRegion 
                    ? "border-ivory/30 bg-ivory/5" 
                    : "border-ivory/10 hover:border-ivory/20"
                }`}
              >
                {/* Region Header */}
                <div className="px-6 py-5 border-b border-ivory/10">
                  <h3 className="font-serif italic text-xl text-ivory tracking-wide">
                    {regionConfig.name}
                  </h3>
                </div>

                {/* Language Options */}
                <div className="p-4 space-y-2">
                  {regionConfig.languages.map((lang) => {
                    const isSelected = region === regionKey && language === lang
                    
                    return (
                      <button
                        key={lang}
                        onClick={() => handleSelect(regionKey, lang)}
                        className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 bg-transparent border-none text-left ${
                          isSelected
                            ? "text-ivory"
                            : "text-ivory/50 hover:text-ivory/80"
                        }`}
                      >
                        <span className="text-[0.8rem] tracking-[1px]">
                          {languageNames[lang]}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full border border-ivory flex items-center justify-center">
                            <Check className="w-3 h-3" strokeWidth={2} />
                          </div>
                        )}
                        {!isSelected && (
                          <div className="w-5 h-5 rounded-full border border-ivory/30" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Current Selection Display */}
        <div className="mt-12 text-center">
          <p className="text-[0.6rem] tracking-[3px] uppercase text-ivory/40">
            {regions[region].name} · {languageNames[language]}
          </p>
        </div>
      </div>
    </div>
  )
}
