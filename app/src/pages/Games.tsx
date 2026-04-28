import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { GAMES, gameTitle, gameTopic, type Game } from '../data/games'
import { getScene } from '../components/scenes'
import { useLang, useT } from '../i18n/I18n'

export default function Games() {
  const t = useT()
  const lang = useLang()
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const FILTERS: { key: string; label: string; test: (g: Game) => boolean }[] = [
    { key: 'all',   label: t('games.f.all'),   test: () => true },
    { key: 'team',  label: t('games.f.team'),  test: g => g.kind === 'team' },
    { key: 'pair',  label: t('games.f.pair'),  test: g => g.kind === 'pair' },
    { key: 'whole', label: t('games.f.whole'), test: g => g.kind === 'whole-class' },
    { key: 'short', label: t('games.f.short'), test: g => g.duration === 'short' },
    { key: 'long',  label: t('games.f.long'),  test: g => g.duration === 'long' },
  ]

  const filtered = useMemo(() => {
    const f = FILTERS.find(x => x.key === filter)!.test
    const q = query.toLowerCase()
    return GAMES.filter(g =>
      f(g) &&
      (g.title.toLowerCase().includes(q) ||
        g.topic.toLowerCase().includes(q) ||
        gameTitle(g, lang).toLowerCase().includes(q) ||
        gameTopic(g, lang).toLowerCase().includes(q) ||
        g.vocabulary.some(v => v.includes(q)))
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, query, lang])

  function kindLabel(k: Game['kind']) {
    return k === 'team' ? t('games.kind.team') :
           k === 'pair' ? t('games.kind.pair') :
           k === 'solo' ? t('games.kind.solo') :
                          t('games.kind.whole')
  }
  function kindClass(k: Game['kind']) {
    return k === 'team' ? 'pink' : k === 'pair' ? 'sky' : k === 'solo' ? 'green' : 'coral'
  }

  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">{t('games.eyebrow')}</span>
        <h1>{t('games.title')}</h1>
        <p className="muted mt-4" style={{ maxWidth: 640 }}>{t('games.sub')}</p>

        <div className="row mt-8" style={{ alignItems: 'stretch' }}>
          <input
            className="pix-input"
            placeholder={t('games.search')}
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
                  <span className="game-card-no">{t('detail.quest')} #{g.number}</span>
                  <span className="tag green">{g.durationMin}</span>
                </div>
                <div className="game-card-title">{gameTitle(g, lang)}</div>
                <div className="game-card-topic">{gameTopic(g, lang)} · {g.tagline[lang]}</div>
                <div className="game-card-meta">
                  <span className={`tag ${kindClass(g.kind)}`}>{kindLabel(g.kind)}</span>
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

