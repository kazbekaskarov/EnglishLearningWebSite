import { Link, useParams, useNavigate } from 'react-router-dom'
import { GAMES, gameTitle, gameTopic } from '../data/games'
import { getScene } from '../components/scenes'
import { PxArrow, PxClock, PxFlame, PxStar, PxUsers } from '../components/PxIcon'
import { useLang, useT } from '../i18n/I18n'

export default function GameDetail() {
  const { id } = useParams<{ id: string }>()
  const nav = useNavigate()
  const t = useT()
  const lang = useLang()
  const game = GAMES.find(g => g.id === id)

  if (!game) {
    return (
      <section className="section">
        <div className="container">
          <h1>{t('404.title')}</h1>
          <Link to="/games" className="pix-btn mt-6">{t('404.back')}</Link>
        </div>
      </section>
    )
  }

  const idx = GAMES.findIndex(g => g.id === id)
  const prev = GAMES[(idx - 1 + GAMES.length) % GAMES.length]
  const next = GAMES[(idx + 1) % GAMES.length]

  const kindLabel = (k: string) =>
    k === 'team' ? t('games.kind.team') :
    k === 'pair' ? t('games.kind.pair') :
    k === 'solo' ? t('games.kind.solo') :
                   t('games.kind.whole')

  return (
    <section className="section">
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 18 }}>
          <Link to="/games" className="pix-btn ghost sm">{t('detail.back')}</Link>
          <div className="row">
            <button className="pix-btn ghost sm" onClick={() => nav(`/games/${prev.id}`)}>◂ {prev.number}</button>
            <button className="pix-btn ghost sm" onClick={() => nav(`/games/${next.id}`)}>{next.number} ▸</button>
          </div>
        </div>

        <span className="section-eyebrow">{t('detail.quest')} #{game.number} · {gameTopic(game, lang).toUpperCase()}</span>
        <h1 style={{ color: 'var(--c-sun)' }}>{gameTitle(game, lang)}</h1>
        <p className="muted mt-4" style={{ maxWidth: 720, fontSize: 24 }}>{game.tagline[lang]}</p>

        <div className="row mt-6">
          <span className="tag"><PxClock size={10} color="#73eff7" />&nbsp;{game.durationMin}</span>
          <span className="tag pink"><PxUsers size={10} color="#f4b4c5" />&nbsp;{kindLabel(game.kind)}</span>
          <span className="tag coral"><PxFlame size={10} color="#ef7d57" />&nbsp;DIFF {'★'.repeat(game.difficulty)}{'☆'.repeat(3 - game.difficulty)}</span>
          <span className="tag green"><PxStar size={10} color="#a7f070" />&nbsp;CEFR B1</span>
        </div>

        <div className="detail-grid mt-8">
          <div>
            <h3 className="mb-4">{t('detail.howto')}</h3>
            <ol className="steps">
              {game.steps[lang].map((step, i) => <li key={i}>{step}</li>)}
            </ol>

            <h3 className="mt-8 mb-4">{t('detail.vocab')}</h3>
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
              <h3 style={{ color: 'var(--c-sun)' }} className="mb-4">{t('detail.tips')}</h3>
              <ul style={{ paddingLeft: 18 }}>
                <li>{t('detail.tip.replace')}</li>
                <li>{t('detail.tip.timer')}</li>
                <li>{t('detail.tip.random')}</li>
              </ul>
            </div>

            <div className="card" style={{ background: 'var(--c-grape)' }}>
              <h3 style={{ color: 'var(--c-pink)' }} className="mb-4">{t('detail.print')}</h3>
              <p>{t('detail.print.note')} <Link to="/manager?tab=print" style={{ color: 'var(--c-sun)' }}>{t('tab.print')}</Link>.</p>
              <Link to="/manager?tab=print" className="pix-btn pink sm mt-4">
                {t('detail.print.open')} <PxArrow size={14} color="#1a1c2c" />
              </Link>
            </div>
          </div>
        </div>

        <div className="divider mt-8">{t('detail.next')}</div>

        <Link to={`/games/${next.id}`} className="game-card" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'stretch' }}>
          <div className="game-card-screen" style={{ aspectRatio: 'auto' }}>
            {getScene(next)}
            <div className="scan" />
          </div>
          <div className="game-card-body" style={{ justifyContent: 'center' }}>
            <span className="game-card-no">{t('detail.quest')} #{next.number}</span>
            <div className="game-card-title">{gameTitle(next, lang)}</div>
            <div className="game-card-topic">{gameTopic(next, lang)}</div>
          </div>
        </Link>
      </div>
    </section>
  )
}

