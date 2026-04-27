import { NavLink, Link } from 'react-router-dom'
import { PxController, PxHeart, PxStar } from './PxIcon'

export default function Layout({ children }: { children: React.ReactNode }) {
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

          <nav className="nav">
            <NavLink to="/" end>Start</NavLink>
            <NavLink to="/games">Games</NavLink>
            <NavLink to="/manager">Manager</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>

          <div className="topbar-stats">
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
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <div className="marquee">
        <div className="marquee-track">
          <span>★</span> ENGAGE ME AND I LEARN
          <span>★</span> 15 GAMES · B1 LEVEL · CEFR
          <span>★</span> NO BORING DRILLS
          <span>★</span> POWERED BY PIXELS
          <span>★</span> ENGAGE ME AND I LEARN
          <span>★</span> 15 GAMES · B1 LEVEL · CEFR
          <span>★</span> NO BORING DRILLS
          <span>★</span> POWERED BY PIXELS
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>ENGAGE.EXE · v1.0 · MADE WITH <span className="heart">♥</span> & PIXELS</p>
          <p style={{ color: 'var(--c-shadow)' }}>© 2026 — A COMPANION TO «GAMIFICATION: B1 VOCABULARY HANDBOOK FOR TEACHERS»</p>
        </div>
      </footer>

      <div className="crt-overlay" />
    </div>
  )
}

