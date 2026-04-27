import { Link } from 'react-router-dom'
import { GAMES } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxBook, PxController, PxFlame, PxSpark, PxStar, PxUsers } from '../components/PxIcon'

const HeroStage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    shapeRendering="crispEdges"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Sky gradient via stripes */}
    <rect x="0" y="0" width="64" height="22" fill="#29274c" />
    <rect x="0" y="22" width="64" height="6" fill="#5d275d" />
    <rect x="0" y="28" width="64" height="6" fill="#b13e53" />
    <rect x="0" y="34" width="64" height="4" fill="#ef7d57" />
    <rect x="0" y="38" width="64" height="2" fill="#ffcd75" />

    {/* Stars */}
    <g fill="#ffcd75">
      <rect x="6" y="4" width="1" height="1" /><rect x="20" y="2" width="1" height="1" />
      <rect x="34" y="6" width="1" height="1" /><rect x="48" y="3" width="1" height="1" />
      <rect x="58" y="8" width="1" height="1" /><rect x="14" y="14" width="1" height="1" />
    </g>

    {/* Moon */}
    <g fill="#f4f0e6">
      <rect x="44" y="6" width="6" height="6" />
      <rect x="46" y="4" width="2" height="2" />
      <rect x="50" y="8" width="2" height="2" />
    </g>
    <rect x="48" y="6" width="2" height="4" fill="#5d275d" opacity="0.6" />

    {/* Mountains */}
    <g fill="#29274c">
      <rect x="0" y="22" width="6" height="2" /><rect x="2" y="20" width="2" height="2" />
      <rect x="10" y="18" width="6" height="6" /><rect x="12" y="16" width="2" height="2" />
      <rect x="22" y="20" width="8" height="4" /><rect x="24" y="18" width="4" height="2" />
    </g>

    {/* Ground / grass */}
    <rect x="0" y="40" width="64" height="24" fill="#a7f070" />
    <g fill="#38b764">
      <rect x="0" y="40" width="64" height="2" />
      <rect x="2" y="44" width="2" height="1" /><rect x="14" y="46" width="2" height="1" />
      <rect x="28" y="44" width="2" height="1" /><rect x="42" y="48" width="2" height="1" />
      <rect x="56" y="46" width="2" height="1" />
    </g>

    {/* Castle (school) on a hill */}
    <rect x="34" y="32" width="22" height="2" fill="#5d275d" />
    <rect x="36" y="34" width="20" height="14" fill="#5d275d" />
    <rect x="36" y="30" width="4" height="4" fill="#5d275d" />
    <rect x="52" y="30" width="4" height="4" fill="#5d275d" />
    <rect x="44" y="28" width="4" height="6" fill="#5d275d" />
    {/* Banner */}
    <rect x="46" y="22" width="1" height="6" fill="#0f1020" />
    <rect x="47" y="22" width="3" height="2" fill="#ffcd75" />
    {/* Door */}
    <rect x="44" y="42" width="4" height="6" fill="#0f1020" />
    <rect x="45" y="44" width="2" height="3" fill="#ffcd75" />
    {/* Windows */}
    <rect x="40" y="38" width="2" height="2" fill="#73eff7" />
    <rect x="50" y="38" width="2" height="2" fill="#73eff7" />

    {/* Hero (player) */}
    <g>
      <rect x="14" y="42" width="4" height="4" fill="#ffcd75" />{/* head */}
      <rect x="13" y="46" width="6" height="6" fill="#b13e53" />{/* body */}
      <rect x="11" y="48" width="2" height="3" fill="#ffcd75" />{/* arm */}
      <rect x="19" y="48" width="2" height="3" fill="#ffcd75" />{/* arm */}
      <rect x="13" y="52" width="2" height="3" fill="#5d275d" />
      <rect x="17" y="52" width="2" height="3" fill="#5d275d" />
      <rect x="14" y="40" width="4" height="2" fill="#0f1020" />{/* hat */}
      <rect x="13" y="41" width="6" height="1" fill="#0f1020" />
    </g>

    {/* Sword icon next to hero */}
    <rect x="22" y="44" width="1" height="8" fill="#73eff7" />
    <rect x="21" y="50" width="3" height="1" fill="#5e5871" />

    {/* Sparkles */}
    <g fill="#ffcd75">
      <rect x="26" y="36" width="1" height="1" /><rect x="28" y="38" width="1" height="1" />
      <rect x="60" y="44" width="1" height="1" /><rect x="62" y="50" width="1" height="1" />
    </g>

    {/* Flowers */}
    <g>
      <rect x="6" y="50" width="1" height="2" fill="#38b764" />
      <rect x="6" y="49" width="1" height="1" fill="#b13e53" />
      <rect x="60" y="52" width="1" height="2" fill="#38b764" />
      <rect x="60" y="51" width="1" height="1" fill="#f4b4c5" />
    </g>
  </svg>
)

const featured = ['kitchen-quest','case-file-x','tallest-tower','academic-journey']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-pretitle">PRESS START · LOAD GAME</span>
            <h1>
              <span className="accent">B1 Vocabulary</span><br />
              <span className="accent2">Quest Mode:</span>{' '}
              <span className="accent3">Engaged.</span>
            </h1>
            <p className="hero-sub">
              15 готовых игр, ритмов и квестов для уроков английского.
              Один хэндбук, один спутник-сайт и нулевой риск скучных drill-сессий.
            </p>
            <div className="hero-cta">
              <Link to="/games" className="pix-btn">
                <PxController size={18} color="#1a1c2c" /> Play All Games
              </Link>
              <Link to="/manager" className="pix-btn green">
                <PxSpark size={18} color="#1a1c2c" /> Open Manager
              </Link>
            </div>

            <div className="row mt-8" style={{ gap: 28 }}>
              <Stat icon={<PxBook color="#a7f070" />} value="15" label="GAMES" />
              <Stat icon={<PxUsers color="#f4b4c5" />} value="∞" label="STUDENTS" />
              <Stat icon={<PxFlame color="#ef7d57" />} value="B1" label="CEFR LVL" />
            </div>
          </div>

          <div className="hero-stage">
            <HeroStage />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <div className="container">
        <div className="quote">
          <p>"Tell me and I forget, teach me and I may remember, involve me and I learn."</p>
          <span className="author">— Benjamin Franklin · 1750-ish</span>
        </div>
      </div>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">FEATURED CARTRIDGES</span>
              <h2>Choose Your Quest</h2>
            </div>
            <Link to="/games" className="pix-btn ghost sm">
              All 15 games <PxArrow size={14} />
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
                    <span className="game-card-no">QUEST #{g.number}</span>
                    <span className="tag green">{g.durationMin}</span>
                  </div>
                  <div className="game-card-title">{g.title}</div>
                  <div className="game-card-topic">{g.topic}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section dither-bg">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">DESIGN PHILOSOPHY</span>
              <h2>Why Pixels?</h2>
            </div>
          </div>

          <div className="games-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            <Why
              icon={<PxController color="#ffcd75" size={28} />}
              title="Game UI"
              text="Каждая игра — это «картридж»: HP-бары, очки опыта, респаун. Ученик не «учит лексику», а проходит уровень."
            />
            <Why
              icon={<PxFlame color="#ef7d57" size={28} />}
              title="Body & Voice"
              text="Кинестетика, ритм, голос. Ученик встаёт со стула, шлёпает карточки, кричит «Treasure!» — мозг запоминает контекстом."
            />
            <Why
              icon={<PxUsers color="#f4b4c5" size={28} />}
              title="Team Loops"
              text="Парные дуэли, команды по 3-5, вся группа разом. Социальное давление работает на повторение лексики."
            />
            <Why
              icon={<PxStar color="#a7f070" size={28} />}
              title="Zero Setup"
              text="Хэндбук + сайт-спутник. Шум, таймер, рандомайзер, печать карточек — за один клик. Ничего не нужно ставить."
            />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="divider">END OF DEMO · INSERT COIN</div>
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

