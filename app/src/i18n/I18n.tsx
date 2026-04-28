import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LANGS, T, type Lang, tr } from './dict'

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nCtx = createContext<Ctx>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
})

const STORAGE_KEY = 'engage.lang'

function detect(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && LANGS.some(l => l.code === saved)) return saved
  // English by default for new visitors
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return detect() } catch { return 'en' }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem(STORAGE_KEY, lang) } catch { /* noop */ }
  }, [lang])

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: setLangState,
    t: (key: string) => tr(key, lang),
  }), [lang])

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>
}

export function useI18n() {
  return useContext(I18nCtx)
}

export function useT() {
  return useContext(I18nCtx).t
}

export function useLang() {
  return useContext(I18nCtx).lang
}

/* Helper for inline pickers from a Record<Lang, X> */
export function pickL<X>(rec: Record<Lang, X>, lang: Lang): X {
  return rec[lang] ?? rec.en
}

export { T, LANGS }
export type { Lang }

/* ============================================================
   Lang switcher button group
   ============================================================ */
export function LangSwitcher() {
  const { lang, setLang } = useI18n()
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {LANGS.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`lang-btn ${lang === l.code ? 'active' : ''}`}
          aria-pressed={lang === l.code}
          title={l.code.toUpperCase()}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}

