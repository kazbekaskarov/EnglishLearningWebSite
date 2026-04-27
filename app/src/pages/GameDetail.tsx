import { Link, useParams, useNavigate } from 'react-router-dom'
import { GAMES } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxClock, PxFlame, PxStar, PxUsers } from '../components/PxIcon'

export default function GameDetail() {
  const { id } = useParams<{ id: string }>()
  const nav = useNavigate()
  const game = GAMES.find(g => g.id === id)
  if (!game) {
    return (
      <section className="section">
        <div className="container">
          <h1>404 · Quest Not Found</h1>
          <Link to="/games" className="pix-btn mt-6">Back to library</Link>
        </div>
      </section>
    )
  }

  const idx = GAMES.findIndex(g => g.id === id)
  const prev = GAMES[(idx - 1 + GAMES.length) % GAMES.length]
  const next = GAMES[(idx + 1) % GAMES.length]

  return (
    <section className="section">
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 18 }}>
          <Link to="/games" className="pix-btn ghost sm">◂ All Quests</Link>
          <div className="row">
            <button className="pix-btn ghost sm" onClick={() => nav(`/games/${prev.id}`)}>◂ {prev.number}</button>
            <button className="pix-btn ghost sm" onClick={() => nav(`/games/${next.id}`)}>{next.number} ▸</button>
          </div>
        </div>

        <span className="section-eyebrow">QUEST #{game.number} · {game.topic.toUpperCase()}</span>
        <h1 style={{ color: 'var(--c-sun)' }}>{game.title}</h1>
        <p className="muted mt-4" style={{ maxWidth: 720, fontSize: 24 }}>{game.tagline}</p>

        <div className="row mt-6">
          <span className="tag"><PxClock size={10} color="#73eff7" />&nbsp;{game.durationMin}</span>
          <span className="tag pink"><PxUsers size={10} color="#f4b4c5" />&nbsp;{labelKind(game.kind)}</span>
          <span className="tag coral"><PxFlame size={10} color="#ef7d57" />&nbsp;DIFF {'★'.repeat(game.difficulty)}{'☆'.repeat(3 - game.difficulty)}</span>
          <span className="tag green"><PxStar size={10} color="#a7f070" />&nbsp;CEFR B1</span>
        </div>

        <div className="detail-grid mt-8">
          <div>
            <h3 className="mb-4">▸ How to play</h3>
            <ol className="steps">
              {game.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ol>

            <h3 className="mt-8 mb-4">▸ Vocabulary loot</h3>
            <div className="vocab-grid">
              {game.vocabulary.map(v => <span key={v} className="vocab-chip">{v}</span>)}
            </div>
          </div>

          <div className="col">
            <div className="detail-art">
              {getScene(game)}
              <div className="scan" />
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--c-sun)' }} className="mb-4">▸ Tips & Tweaks</h3>
              <ul style={{ paddingLeft: 18 }}>
                <li>Подбери лексику под собственную тему урока — слова можно заменить.</li>
                <li>Засекай время через <Link to="/manager?tab=timer" style={{ color: 'var(--c-sun)' }}>Timer</Link> в Manager.</li>
                <li>Деление на команды — <Link to="/manager?tab=random" style={{ color: 'var(--c-sun)' }}>Randomizer</Link>.</li>
              </ul>
            </div>

            <div className="card" style={{ background: 'var(--c-grape)' }}>
              <h3 style={{ color: 'var(--c-pink)' }} className="mb-4">▸ Print pack</h3>
              <p>Карточки, поле и материалы доступны в разделе <Link to="/manager?tab=print" style={{ color: 'var(--c-sun)' }}>Printables</Link>.</p>
              <Link to="/manager?tab=print" className="pix-btn pink sm mt-4">
                Open <PxArrow size={14} color="#1a1c2c" />
              </Link>
            </div>
          </div>
        </div>

        <div className="divider mt-8">NEXT QUEST</div>

        <Link to={`/games/${next.id}`} className="game-card" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'stretch' }}>
          <div className="game-card-screen" style={{ aspectRatio: 'auto' }}>
            {getScene(next)}
            <div className="scan" />
          </div>
          <div className="game-card-body" style={{ justifyContent: 'center' }}>
            <span className="game-card-no">QUEST #{next.number}</span>
            <div className="game-card-title">{next.title}</div>
            <div className="game-card-topic">{next.topic}</div>
          </div>
        </Link>
      </div>
    </section>
  )
}

function labelKind(k: string) {
  return k === 'team' ? 'TEAM' : k === 'pair' ? 'PAIR' : k === 'solo' ? 'SOLO' : 'WHOLE CLASS'
}

