import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSearchParams } from 'react-router-dom'
import { GAMES, gameTitle, gameTopic } from '../data/games'
import { PRINTABLES, type Printable } from '../data/printables'
import { PxArrow, PxClock, PxDice, PxPrinter, PxSpark, PxSpeaker } from '../components/PxIcon'
import { useT, useLang } from '../i18n/I18n'
import { NoiseStage, useNoise } from '../components/Noise'

type Tab = 'noise' | 'random' | 'timer' | 'flash' | 'print'

export default function Manager() {
  const t = useT()
  const [params, setParams] = useSearchParams()
  const initial = (params.get('tab') as Tab) ?? 'noise'
  const [tab, setTab] = useState<Tab>(initial)

  useEffect(() => { setParams({ tab }) }, [tab, setParams])

  const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'noise',  label: t('tab.noise'),  icon: <PxSpeaker size={14} /> },
    { key: 'random', label: t('tab.random'), icon: <PxDice size={14} /> },
    { key: 'timer',  label: t('tab.timer'),  icon: <PxClock size={14} /> },
    { key: 'flash',  label: t('tab.flash'),  icon: <PxSpark size={14} /> },
    { key: 'print',  label: t('tab.print'),  icon: <PxPrinter size={14} /> },
  ]

  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">{t('manager.eyebrow')}</span>
        <h1>{t('manager.title')}</h1>
        <p className="muted mt-4" style={{ maxWidth: 720, fontSize: 24 }}>{t('manager.sub')}</p>

        <div className="tabs mt-8">
          {TABS.map(tt => (
            <button key={tt.key} className={`tab ${tab === tt.key ? 'active' : ''}`} onClick={() => setTab(tt.key)}>
              {tt.icon} {tt.label}
            </button>
          ))}
        </div>

        {tab === 'noise'  && <NoiseTool />}
        {tab === 'random' && <RandomTool />}
        {tab === 'timer'  && <TimerTool />}
        {tab === 'flash'  && <FlashTool />}
        {tab === 'print'  && <PrintTool />}
      </div>
    </section>
  )
}

/* ============================================================ NOISE */
function NoiseTool() {
  const t = useT()
  const {
    active, demo, wide, sensitivity,
    start, stop, toggleDemo, setSensitivity, setWide,
  } = useNoise()

  return (
    <div className="col mt-6">
      <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <h3>{t('noise.title')}</h3>
        <div className="row" style={{ flexWrap: 'wrap', gap: 8 }}>
          {(active || demo) && (
            <label className="row" style={{ gap: 6, fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: 'var(--c-bone)' }}>
              {t('noise.sens')}
              <input
                type="range" min={4} max={40} step={1}
                value={sensitivity}
                onChange={e => setSensitivity(Number(e.target.value))}
                style={{ width: 110 }}
              />
            </label>
          )}
          <button className="pix-btn ghost sm" onClick={() => setWide(w => !w)}>
            {wide ? t('noise.dock') : t('noise.wide')}
          </button>
          {!active && !demo && <button className="pix-btn green sm" onClick={start}>{t('noise.mic')}</button>}
          {!active && !demo && <button className="pix-btn ghost sm" onClick={toggleDemo}>{t('noise.demo')}</button>}
          {(active || demo) && <button className="pix-btn rose sm" onClick={() => { stop(); if (demo) toggleDemo() }}>{t('noise.stop')}</button>}
        </div>
      </div>

      {/* Inline stage hides while widescreen overlay is active */}
      {!wide && <NoiseStage />}

      <p className="muted">{t('noise.desc')}</p>
    </div>
  )
}


/* ============================================================ RANDOM */
function RandomTool() {
  const t = useT()
  const [names, setNames] = useState('Aiganym\nBota\nDias\nErlan\nKamilla\nMadi\nNursultan\nTomiris\nZhanibek')
  const [teamCount, setTeamCount] = useState(3)
  const [teams, setTeams] = useState<string[][]>([])

  function shuffle() {
    const list = names.split('\n').map(s => s.trim()).filter(Boolean)
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]]
    }
    const out: string[][] = Array.from({ length: teamCount }, () => [])
    list.forEach((n, i) => out[i % teamCount].push(n))
    setTeams(out)
  }

  return (
    <div className="col mt-6">
      <h3>{t('random.title')}</h3>
      <p className="muted">{t('random.desc')}</p>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <textarea
          className="pix-textarea"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder={t('random.placeholder')}
        />
        <div className="col" style={{ minWidth: 220 }}>
          <label className="pixel-font" style={{ fontSize: 10, color: 'var(--c-sun)' }}>{t('random.count')}</label>
          <input
            className="pix-input"
            type="number"
            min={2} max={10}
            value={teamCount}
            onChange={(e) => setTeamCount(Math.max(2, Math.min(10, Number(e.target.value) || 2)))}
          />
          <button className="pix-btn" onClick={shuffle}>
            <PxDice size={16} color="#1a1c2c" /> {t('random.shuffle')} <PxArrow size={14} color="#1a1c2c" />
          </button>
        </div>
      </div>

      {teams.length > 0 && (
        <div className="team-grid">
          {teams.map((tm, i) => (
            <div key={i} className="team-card">
              <h4>{t('random.team')} {String.fromCharCode(65 + i)}</h4>
              <ul>
                {tm.map(name => <li key={name}>★ {name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================================ TIMER */
function TimerTool() {
  const t = useT()
  const [seconds, setSeconds] = useState(300)
  const [left, setLeft] = useState(300)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (left <= 0) { setRunning(false); return }
    const id = setInterval(() => setLeft(l => Math.max(0, l - 1)), 1000)
    return () => clearInterval(id)
  }, [running, left])

  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')
  const cls = left === 0 ? 'done' : left < 30 ? 'warn' : ''

  function setPreset(s: number) { setSeconds(s); setLeft(s); setRunning(false) }

  return (
    <div className="col mt-6">
      <h3>{t('timer.title')}</h3>
      <div className={`timer-display ${cls}`}>{mm}:{ss}</div>

      <div className="row" style={{ justifyContent: 'center' }}>
        {!running
          ? <button className="pix-btn green" onClick={() => { if (left === 0) setLeft(seconds); setRunning(true); }}>
              {t('timer.start')}
            </button>
          : <button className="pix-btn coral" onClick={() => setRunning(false)}>{t('timer.pause')}</button>}
        <button className="pix-btn ghost" onClick={() => { setLeft(seconds); setRunning(false) }}>{t('timer.reset')}</button>
      </div>

      <div className="preset-row">
        {[60, 180, 300, 600, 900, 1800].map(s => (
          <button key={s} className="pix-btn sm" onClick={() => setPreset(s)}>
            {Math.floor(s / 60)} {t('timer.min')}
          </button>
        ))}
      </div>

      <p className="center muted">{t('timer.tip')}</p>
    </div>
  )
}

/* ============================================================ FLASH */
function FlashTool() {
  const t = useT()
  const lang = useLang()
  const [topic, setTopic] = useState(GAMES[0].id)
  const game = GAMES.find(g => g.id === topic)!
  const deck = useMemo(() => game.vocabulary.map(w => ({ word: w, def: defOf(w) })), [game])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => { setIdx(0); setFlipped(false) }, [topic])

  const card = deck[idx]
  function next() { setFlipped(false); setIdx(i => (i + 1) % deck.length) }
  function prev() { setFlipped(false); setIdx(i => (i - 1 + deck.length) % deck.length) }

  return (
    <div className="col mt-6">
      <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <h3>{t('flash.title')}</h3>
        <select
          className="pix-input"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          style={{ maxWidth: 280 }}
        >
          {GAMES.map(g => <option key={g.id} value={g.id}>{gameTopic(g, lang)} — {gameTitle(g, lang)}</option>)}
        </select>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
        <div className="flashcard-inner">
          <div className="flashcard-side">
            <span className="tag green" style={{ position: 'absolute', top: 12, left: 12 }}>{t('flash.word')}</span>
            <span className="flashcard-word">{card.word}</span>
          </div>
          <div className="flashcard-side back">
            <span className="tag pink" style={{ position: 'absolute', top: 12, left: 12 }}>{t('flash.def')}</span>
            <span className="flashcard-def">{card.def}</span>
          </div>
        </div>
      </div>

      <div className="fc-controls">
        <button className="pix-btn ghost sm" onClick={prev}>{t('flash.prev')}</button>
        <button className="pix-btn sm" onClick={() => setFlipped(f => !f)}>{t('flash.flip')}</button>
        <button className="pix-btn green sm" onClick={next}>{t('flash.next')}</button>
      </div>
      <div className="fc-progress">{idx + 1} / {deck.length}</div>
    </div>
  )
}

const MINI_DICT: Record<string, string> = {
  chop: 'cut into small pieces with a knife', whisk: 'beat ingredients quickly with a wire tool',
  simmer: 'cook gently below boiling point', fry: 'cook in hot oil', boil: 'heat liquid until bubbling',
  grate: 'shred food with a metal grater', dough: 'flour mixture before baking',
  recipe: 'cooking instructions for a dish', ingredient: 'a single component of a recipe',
  referee: 'official who enforces sports rules', whistle: 'object used to make a sharp sound',
  court: 'enclosed area for tennis or basketball', racket: 'stringed bat for tennis',
  goalkeeper: 'player who guards the goal', net: 'mesh used in sports like volleyball',
  coach: 'person who trains a sports team', helmet: 'hard headwear for protection',
  arena: 'large indoor sports venue', spectator: 'person watching a match',
  mortgage: 'long-term loan to buy property', loan: 'money borrowed that must be returned',
  salary: 'fixed monthly payment for a job', refund: 'money returned for a returned item',
  debt: 'money you owe', income: 'money you earn', tax: 'money paid to the government',
  deposit: 'first payment, often for a flat', cash: 'physical money',
  currency: 'official money of a country', plot: 'main story of a film or book',
  sequel: 'a film that follows another', soundtrack: 'music from a film',
  cast: 'all actors in a film', director: 'person who leads a film',
  script: 'written text of a film', trailer: 'short ad for a film',
  review: "a critic's opinion", genre: 'category of film, e.g. comedy',
  actor: 'person who plays a role', scene: 'one part of a film',
  nod: 'move the head to say yes', stomach: 'where food is digested',
  ankle: 'joint between foot and leg', wrist: 'joint between hand and arm',
  knee: 'joint in the middle of the leg', shoulder: 'joint where arm meets body',
  elbow: 'joint in the middle of the arm', sneeze: 'sudden sound from nose',
  blink: 'close and open the eyes quickly', frown: 'expression of displeasure',
  kindergarten: 'school for very young children', primary: 'first level of school',
  secondary: 'middle level of school', college: 'higher education institution',
  degree: 'qualification after university', exam: 'a formal test',
  tuition: 'fee paid for studies', scholarship: 'money awarded to study',
  graduation: 'ceremony of finishing studies', semester: 'half of an academic year',
  terrace: 'paved area outside a house', patio: 'paved area, often enclosed',
  realtor: 'person who sells houses', tenant: 'person who rents a place',
  landlord: 'owner who rents out property', attic: 'room under the roof',
  basement: 'room below ground level', balcony: 'platform on a high floor',
  cottage: 'small country house', resign: 'leave a job voluntarily',
  promote: 'move someone to higher position', fire: 'remove someone from a job',
  hire: 'give someone a job', overtime: 'extra hours beyond normal',
  intern: 'trainee at a company', colleague: 'person you work with',
  deadline: 'final time to finish a task', contract: 'official work agreement',
  alibi: 'proof you were elsewhere', motive: 'reason for committing a crime',
  witness: 'person who saw an event', suspect: 'person believed to have done it',
  evidence: 'proof in an investigation', clue: 'small hint to a mystery',
  robbery: 'taking something by force', theft: 'taking something secretly',
  arrest: 'when police take a suspect', interrogate: 'question intensely',
  'boarding pass': 'document to enter a plane', luggage: 'bags you travel with',
  passport: 'document that proves nationality', customs: 'border check for goods',
  itinerary: 'travel plan', hostel: 'cheap shared accommodation',
  'jet lag': 'tiredness after a long flight', souvenir: 'object kept as a memory',
  departure: 'leaving a place', receipt: 'proof of payment',
  sale: 'goods sold at lower prices', discount: 'a price reduction',
  bargain: 'something cheap and good', retail: 'selling to the public',
  warranty: 'guarantee a product will work', cashier: 'person at the till',
  aisle: 'walkway between shelves', exchange: 'swap one item for another',
  'rush hour': 'busiest time on the roads', 'pedestrian crossing': 'place to cross the road',
  'traffic jam': 'long line of stopped cars', commute: 'travel daily to work',
  fare: 'money paid for transport', platform: 'where you board a train',
  pavement: 'path beside the road', overtake: 'pass another vehicle',
  intersection: 'where two roads meet', roundabout: 'circular road junction',
  vlog: 'video blog', influencer: 'person who shapes opinions online',
  feed: 'stream of social media posts', hashtag: 'word with # to tag a post',
  livestream: 'broadcast in real time', meme: 'humorous viral image',
  subscribe: 'follow a channel', trending: 'currently popular',
  comment: 'reply to a post', viral: 'spreading rapidly online',
  classmate: 'someone in your class', partner: 'romantic or business companion',
  propose: 'ask someone to marry you', wedding: 'marriage ceremony',
  divorce: 'legal end of a marriage', engagement: 'agreement to marry',
  crush: 'romantic attraction', date: 'romantic meeting',
  breakup: 'end of a relationship', spouse: 'husband or wife',
  ambitious: 'strongly wants success', rebellious: 'resists authority',
  generous: 'gives freely to others', reserved: 'quiet, not open',
  outgoing: 'sociable, friendly', stubborn: 'refuses to change opinion',
  witty: 'cleverly funny', cautious: 'careful and prudent',
  arrogant: 'thinks too highly of self', humble: 'modest about oneself',
  onion: 'sharp-tasting bulb vegetable', mushroom: 'fungus used in cooking',
  cream: 'fatty part of milk',
}
function defOf(w: string) { return MINI_DICT[w] ?? `(B1) ${w}` }

/* ============================================================ PRINT */
function PrintTool() {
  const t = useT()
  const lang = useLang()
  const [active, setActive] = useState<Printable | null>(null)

  function doPrint(item: Printable) {
    setActive(item)
    setTimeout(() => { window.print() }, 80)
  }

  useEffect(() => {
    const handler = () => setActive(null)
    window.addEventListener('afterprint', handler)
    return () => window.removeEventListener('afterprint', handler)
  }, [])

  return (
    <div className="col mt-6">
      <h3>{t('print.title')}</h3>
      <p className="muted">{t('print.desc')}</p>

      <div className="printable-grid">
        {PRINTABLES.map(it => (
          <div key={it.id} className="printable">
            <div className="file-header">
              <span className="file-name" title={it.name}>{it.name}</span>
              <span className="file-meta">{it.paper} · {it.meta.split('·')[1]?.trim() ?? ''}</span>
            </div>
            <span className="game-name">{it.game}</span>
            <p className="desc">{it.desc[lang]}</p>
            <div className="actions">
              <button className="pix-btn coral sm" onClick={() => doPrint(it)}>
                <PxPrinter size={14} color="#1a1c2c" /> {t('print.print')}
              </button>
              <button
                className="pix-btn ghost sm"
                onClick={() => { setActive(it); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }}
              >
                {t('print.preview')}
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div className="preview-wrap mt-8">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3>{t('print.preview_label')} · {active.name}</h3>
            <div className="row">
              <button className="pix-btn sm" onClick={() => doPrint(active)}>
                <PxPrinter size={14} color="#1a1c2c" /> {t('print.this')}
              </button>
              <button className="pix-btn ghost sm" onClick={() => setActive(null)}>{t('print.close')}</button>
            </div>
          </div>
          <div className={`preview-frame paper-${active.paper.toLowerCase()}`}>
            {active.render()}
          </div>
        </div>
      )}

      <div className={`print-only paper-${active?.paper.toLowerCase() ?? 'a4'}`} aria-hidden="true">
        {active?.render()}
      </div>
      {/* Portal a duplicate of the print sheet directly under <body> so it
          escapes the .shell wrapper. The @media print rules hide .shell and
          show only this portaled sheet — guarantees the SVG board renders. */}
      {active && createPortal(
        <div className={`print-portal paper-${active.paper.toLowerCase()}`} aria-hidden="true">
          {active.render()}
        </div>,
        document.body,
      )}
    </div>
  )
}

