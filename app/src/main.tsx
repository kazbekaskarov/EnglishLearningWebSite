import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { I18nProvider } from './i18n/I18n'

// Apply persisted theme synchronously to avoid flash of wrong theme
try {
  const saved = localStorage.getItem('engage.theme')
  const theme = saved === 'day' || saved === 'night' ? saved : 'night'
  document.documentElement.setAttribute('data-theme', theme)
} catch { /* noop */ }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>,
)

