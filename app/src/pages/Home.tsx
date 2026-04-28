import { Link } from 'react-router-dom'
import { GAMES } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxBook, PxController, PxFlame, PxSpark, PxStar, PxUsers } from '../components/PxIcon'
import { useLang, useT } from '../i18n/I18n'

const HeroStage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" shapeRendering="crispEdges" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="0" width="64" height="22" fill="#29274c" />
    <rect x="0" y="22" width="64" height="6" fill="#5d275d" />
    <rect x="0" y="28" width="64" height="6" fill="#b13e53" />
    <rect x="0" y="34" width="64" height="4" fill="#ef7d57" />
    <rect x="0" y="38" width="64" height="2" fill="#ffcd75" />
    <g fill="#ffcd75">
      <rect x="6" y="4" width="1" height="1" /><rect x="20" y="2" width="1" height="1" />
      <rect x="34" y="6" width="1" height="1" /><rect x="48" y="3" width="1" height="1" />
      <rect x="58" y="8" width="1" height="1" /><rect x="14" y="14" width="1" height="1" />
    </g>
    <g fill="#f4f0e6">
      <rect x="44" y="6" width="6" height="6" />
      <rect x="46" y="4" width="2" height="2" />
      <rect x="50" y="8" width="2" height="2" />
    </g>
    <rect x="48" y="6" width="2" height="4" fill="#5d275d" opacity="0.6" />
    <rect x="0" y="40" width="64" height="24" fill="#a7f070" />
    <g fill="#38b764">
      <rect x="0" y="40" width="64" height="2" />
      <rect x="2" y="44" width="2" height="1" /><rect x="14" y="46" width="2" height="1" />
      <rect x="28" y="44" width="2" height="1" /><rect x="42" y="48" width="2" height="1" />
      <rect x="56" y="46" width="2" height="1" />
    </g>
    <rect x="34" y="32" width="22" height="2" fill="#5d275d" />
    <rect x="36" y="34" width="20" height="14" fill="#5d275d" />
    <rect x="36" y="30" width="4" height="4" fill="#5d275d" />
    <rect x="52" y="30" width="4" height="4" fill="#5d275d" />
    <rect x="44" y="28" width="4" height="6" fill="#5d275d" />
    <rect x="46" y="22" width="1" height="6" fill="#0f1020" />
    <rect x="47" y="22" width="3" height="2" fill="#ffcd75" />
    <rect x="44" y="42" width="4" height="6" fill="#0f1020" />
    <rect x="45" y="44" width="2" height="3" fill="#ffcd75" />
    <rect x="40" y="38" width="2" height="2" fill="#73eff7" />
    <rect x="50" y="38" width="2" height="2" fill="#73eff7" />
    <g>
      <rect x="14" y="42" width="4" height="4" fill="#ffcd75" />
      <rect x="13" y="46" width="6" height="6" fill="#b13e53" />
      <rect x="11" y="48" width="2" height="3" fill="#ffcd75" />
      <rect x="19" y="48" width="2" height="3" fill="#ffcd75" />
      <rect x="13" y="52" width="2" height="3" fill="#5d275d" />
      <rect x="17" y="52" width="2" height="3" fill="#5d275d" />
      <rect x="14" y="40" width="4" height="2" fill="#0f1020" />
      <rect x="13" y="41" width="6" height="1" fill="#0f1020" />
    </g>
    <rect x="22" y="44" width="1" height="8" fill="#73eff7" />
    <rect x="21" y="50" width="3" height="1" fill="#5e5871" />
  </svg>
)

const featured = ['kitchen-quest','case-file-x','tallest-tower','academic-journey']

export default function Home() {
  const t = useT()
  const lang = useLang()

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-pretitle">{t('hero.pretitle')}</span>
            <h1>
              <span className="accent">{t('hero.title.l1')}</span><br />
              <span className="accent2">{t('hero.title.l2')}</span>{' '}
              <span className="accent3">{t('hero.title.l3')}</span>
            </h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-cta">
              <Link to="/games" className="pix-btn">
                <PxController size={18} color="#1a1c2c" /> {t('hero.cta.play')}
              </Link>
              <Link to="/manager" className="pix-btn green">
                <PxSpark size={18} color="#1a1c2c" /> {t('hero.cta.manager')}
              </Link>
            </div>

            <div className="row mt-8" style={{ gap: 28 }}>
              <Stat icon={<PxBook color="#a7f070" />} value="15" label={t('hero.stat.games')} />
              <Stat icon={<PxUsers color="#f4b4c5" />} value="∞" label={t('hero.stat.students')} />
              <Stat icon={<PxFlame color="#ef7d57" />} value="B1" label={t('hero.stat.cefr')} />
            </div>
          </div>

          <div className="hero-stage">
            <HeroStage />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="quote">
          <p>{t('quote.text')}</p>
          <span className="author">{t('quote.author')}</span>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('featured.eyebrow')}</span>
              <h2>{t('featured.title')}</h2>
            </div>
            <Link to="/games" className="pix-btn ghost sm">
              {t('featured.all')} <PxArrow size={14} />
            </Link>
          </div>

          <div className="games-grid">
            {GAMES.filter(g => featured.includes(g.id)).map(g => (
              <Link key={g.id} to={`/games/${g.id}`} className="game-card">
                <div className="game-card-screen">
                  {getScene(g)}
                  <div className="scan" />
                </div>
                <div className="game-card-body">
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <span className="game-card-no">{t('detail.quest')} #{g.number}</span>
                    <span className="tag green">{g.durationMin}</span>
                  </div>
                  <div className="game-card-title">{g.title}</div>
                  <div className="game-card-topic">{g.topic}</div>
                  <div className="game-card-topic" style={{ fontSize: 18, opacity: 0.85 }}>{g.tagline[lang]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dither-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">{t('why.eyebrow')}</span>
              <h2>{t('why.title')}</h2>
            </div>
          </div>

          <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            <Why icon={<PxController color="#ffcd75" size={28} />} title={t('why.game.title')} text={t('why.game.text')} />
            <Why icon={<PxFlame color="#ef7d57" size={28} />} title={t('why.body.title')} text={t('why.body.text')} />
            <Why icon={<PxUsers color="#f4b4c5" size={28} />} title={t('why.team.title')} text={t('why.team.text')} />
            <Why icon={<PxStar color="#a7f070" size={28} />} title={t('why.zero.title')} text={t('why.zero.text')} />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider">{t('divider.demo')}</div>
      </div>
    </>
  )
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      {icon}
      <div>
        <div className="pixel-font" style={{ fontSize: 18, color: 'var(--c-sun)' }}>{value}</div>
        <div className="pixel-font" style={{ fontSize: 8, color: 'var(--c-bone)' }}>{label}</div>
      </div>
    </div>
  )
}

function Why({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card">
      <div className="row mb-4">{icon} <h3 style={{ color: 'var(--c-sun)' }}>{title}</h3></div>
      <p style={{ color: 'var(--c-bone)' }}>{text}</p>
    </div>
  )
}

