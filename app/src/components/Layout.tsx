import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { PxController, PxHeart, PxStar } from './PxIcon'
import { LangSwitcher, useT } from '../i18n/I18n'
import { NoiseOverlay, NoiseBubbleField } from './Noise'
import { ThemeSwitcher } from './Theme'

const AUTHORS = [
  'Assel Mengdulla',
  'Symbat Azamatkyzy',
  'Amina Kozykhanova',
  'Zhanaiym Kozhantay',
  'Dilnaz Galymova',
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const t = useT()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-logo">
              <PxController size={26} color="#ffcd75" />
            </span>
            <span className="brand-name">
              ENGAGE<span>.exe</span>
            </span>
          </Link>

          <button
            type="button"
            className={`burger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>

          <nav className={`nav${menuOpen ? ' open' : ''}`}>
            <NavLink to="/" end>{t('nav.start')}</NavLink>
            <NavLink to="/games">{t('nav.games')}</NavLink>
            <NavLink to="/manager">{t('nav.manager')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <div className="nav-mobile-extras">
              <LangSwitcher />
              <ThemeSwitcher />
            </div>
          </nav>

          <div className="topbar-stats">
            <LangSwitcher />
            <ThemeSwitcher />
            <div className="hp" title="Player HP">
              <PxHeart size={16} />
              <div className="hp-track"><div className="hp-fill" style={{ width: '78%' }} /></div>
              <span style={{ color: 'var(--c-cream)' }}>78/100</span>
            </div>
            <div className="hp" title="XP">
              <PxStar size={16} />
              <span style={{ color: 'var(--c-sun)' }}>LV 12</span>
            </div>
          </div>
        </div>
        {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <div className="marquee">
        <div className="marquee-track">
          <span>★</span> {t('marquee.1')}
          <span>★</span> {t('marquee.2')}
          <span>★</span> {t('marquee.3')}
          <span>★</span> {t('marquee.4')}
          <span>★</span> {t('marquee.1')}
          <span>★</span> {t('marquee.2')}
          <span>★</span> {t('marquee.3')}
          <span>★</span> {t('marquee.4')}
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer-tagline">
            ENGAGE.EXE · v1.0 · {t('footer.tagline')} <span className="heart">♥</span> {t('footer.and')}
          </p>

          <div className="footer-divider">▸ {t('footer.authors')} ◂</div>

          <ul className="footer-authors">
            {AUTHORS.map((a, i) => (
              <li key={a}>
                <span className="author-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="author-name">{a}</span>
              </li>
            ))}
          </ul>

          <p className="footer-rights">
            © 2026 · {t('footer.rights')}
          </p>
          <p style={{ color: 'var(--c-shadow)', fontSize: 8 }}>{t('footer.companion')}</p>
        </div>
      </footer>

      <div className="crt-overlay" />
      <NoiseBubbleField />
      <NoiseOverlay />
    </div>
  )
}
