import { useEffect, useState } from 'react'
import { useT } from '../i18n/I18n'

export type Theme = 'night' | 'day'
const KEY = 'engage.theme'

function read(): Theme {
  try {
    const v = localStorage.getItem(KEY) as Theme | null
    if (v === 'day' || v === 'night') return v
  } catch { /* noop */ }
  return 'night'
}

export function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(() => read())
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(KEY, theme) } catch { /* noop */ }
  }, [theme])
  return [theme, setTheme]
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()
  const t = useT()
  const next: Theme = theme === 'night' ? 'day' : 'night'
  const label = next === 'day' ? t('theme.day') : t('theme.night')
  return (
    <button
      type="button"
      className={`theme-toggle theme-${theme}`}
      onClick={() => setTheme(next)}
      title={label}
      aria-label={label}
    >
      {theme === 'night' ? '☀' : '☾'}
    </button>
  )
}

