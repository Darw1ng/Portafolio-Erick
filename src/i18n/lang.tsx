import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'
/** Todo texto visible se escribe como par ES/EN. */
export type L = { es: string; en: string }

const STORAGE_KEY = 'wawin-lang' // clave histórica: cambiarla borraría la preferencia de quien ya visitó

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (p: L) => string }
const LangCtx = createContext<Ctx>({ lang: 'es', setLang: () => {}, t: (p) => p.es })

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch { /* modo privado */ }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* modo privado */ }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const t = useCallback((p: L) => p[lang], [lang])
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)
