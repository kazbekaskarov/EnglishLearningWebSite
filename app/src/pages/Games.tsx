import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { GAMES, type Game } from '../data/games'
import { getScene } from '../components/scenes'

const FILTERS: { key: string; label: string; test: (g: Game) => boolean }[] = [
  { key: 'all',   label: 'ALL',          test: () => true },
  { key: 'team',  label: 'TEAM',         test: g => g.kind === 'team' },
  { key: 'pair',  label: 'PAIR',         test: g => g.kind === 'pair' },
  { key: 'whole', label: 'WHOLE CLASS',  test: g => g.kind === 'whole-class' },
  { key: 'short', label: 'SHORT (≤15)',  test: g => g.duration === 'short' },
  { key: 'long',  label: 'LONG (20+)',   test: g => g.duration === 'long' },
]

export default function Games() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const f = FILTERS.find(x => x.key === filter)!.test
    return GAMES.filter(g =>
      f(g) &&
      (g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.topic.toLowerCase().includes(query.toLowerCase()) ||
        g.vocabulary.some(v => v.includes(query.toLowerCase())))
    )
  }, [filter, query])

  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">SELECT MISSION · 15 / 15</span>
        <h1>Game Library</h1>
        <p className="muted mt-4" style={{ maxWidth: 640 }}>
          Каждая «игра» — это самодостаточный модуль урока. Кликай по картриджу чтобы получить полный сценарий, лексику и таймер.
        </p>

        <div className="row mt-8" style={{ alignItems: 'stretch' }}>
          <input
            className="pix-input"
            placeholder="search by title, topic or word..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: 360 }}
          />
        </div>

        <div className="tabs mt-6">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`tab ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="games-grid mt-6">
          {filtered.map(g => (
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
                <div className="game-card-topic">{g.topic} · {g.tagline}</div>
                <div className="game-card-meta">
                  <span className={`tag ${kindClass(g.kind)}`}>{labelKind(g.kind)}</span>
                  <span className="tag rose">DIFF {'★'.repeat(g.difficulty)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function kindClass(k: Game['kind']) {
  return k === 'team' ? 'pink' : k === 'pair' ? 'sky' : k === 'solo' ? 'green' : 'coral'
}
function labelKind(k: Game['kind']) {
  return k === 'team' ? 'TEAM' : k === 'pair' ? 'PAIR' : k === 'solo' ? 'SOLO' : 'WHOLE CLASS'
}

