import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GAMES } from '../data/games'
import { PxArrow, PxClock, PxDice, PxPrinter, PxSpark, PxSpeaker } from '../components/PxIcon'

type Tab = 'noise' | 'random' | 'timer' | 'flash' | 'print'

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'noise',  label: 'Noise',     icon: <PxSpeaker size={14} /> },
  { key: 'random', label: 'Randomizer', icon: <PxDice size={14} /> },
  { key: 'timer',  label: 'Timer',     icon: <PxClock size={14} /> },
  { key: 'flash',  label: 'Flashcards', icon: <PxSpark size={14} /> },
  { key: 'print',  label: 'Printables', icon: <PxPrinter size={14} /> },
]

export default function Manager() {
  const [params, setParams] = useSearchParams()
  const initial = (params.get('tab') as Tab) ?? 'noise'
  const [tab, setTab] = useState<Tab>(initial)

  useEffect(() => { setParams({ tab }) }, [tab, setParams])

  return (
    <section className="section">
      <div className="container">
        <span className="section-eyebrow">UTILITY BELT · CLASSROOM MANAGER</span>
        <h1>Live Tools</h1>
        <p className="muted mt-4" style={{ maxWidth: 720, fontSize: 24 }}>
          Цифровые компаньоны хэндбука: контролируй шум, делите класс, отсчитывай раунд, гоняй карточки и печатай раздатку.
        </p>

        <div className="tabs mt-8">
          {TABS.map(t => (
            <button key={t.key} className={`tab ${tab === t.key ? 'active' : ''}`} onClick={() => setTab(t.key)}>
              {t.icon} {t.label}
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

/* ============================================================
   NOISE METER
   ============================================================ */
function NoiseTool() {
  const [active, setActive] = useState(false)
  const [level, setLevel] = useState(0) // 0..1
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; c: string }[]>([])
  const audioRef = useRef<{ ctx: AudioContext; analyser: AnalyserNode; data: Uint8Array; raf: number; stream: MediaStream } | null>(null)
  const idRef = useRef(0)

  useEffect(() => () => stop(), [])

  async function start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new AudioContext()
      const src = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 512
      src.connect(analyser)
      const data = new Uint8Array(analyser.frequencyBinCount)

      const tick = () => {
        analyser.getByteTimeDomainData(data)
        let sum = 0
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128
          sum += v * v
        }
        const rms = Math.sqrt(sum / data.length)
        const lvl = Math.min(1, rms * 6)
        setLevel(prev => prev * 0.7 + lvl * 0.3)
        audioRef.current!.raf = requestAnimationFrame(tick)
      }
      audioRef.current = { ctx, analyser, data, raf: requestAnimationFrame(tick), stream }
      setActive(true)
    } catch (e) {
      alert('Микрофон не доступен. Можно включить Demo-режим.')
    }
  }

  function stop() {
    if (audioRef.current) {
      cancelAnimationFrame(audioRef.current.raf)
      audioRef.current.stream.getTracks().forEach(t => t.stop())
      audioRef.current.ctx.close()
      audioRef.current = null
    }
    setActive(false)
    setLevel(0)
  }

  // Demo mode
  const [demo, setDemo] = useState(false)
  useEffect(() => {
    if (!demo) return
    const id = setInterval(() => {
      setLevel(l => Math.max(0, Math.min(1, l + (Math.random() - 0.5) * 0.4)))
    }, 200)
    return () => clearInterval(id)
  }, [demo])

  // Spawn bubbles
  useEffect(() => {
    const id = setInterval(() => {
      if (level > 0.05) {
        const count = Math.floor(level * 6) + 1
        setBubbles(prev => [
          ...prev.slice(-40),
          ...Array.from({ length: count }, () => ({
            id: ++idRef.current,
            x: Math.random() * 96 + 2,
            y: 88,
            c: pickColor(level),
          })),
        ])
      }
    }, 220)
    return () => clearInterval(id)
  }, [level])

  // Move bubbles up
  useEffect(() => {
    const id = setInterval(() => {
      setBubbles(prev => prev
        .map(b => ({ ...b, y: b.y - (1.2 + level * 3) }))
        .filter(b => b.y > -5))
    }, 60)
    return () => clearInterval(id)
  }, [level])

  const status = level < 0.25 ? { text: 'CALM',     cls: '' }
                : level < 0.55 ? { text: 'BUSY',     cls: 'warn' }
                : { text: 'TOO LOUD!', cls: 'crit' }

  return (
    <div className="col mt-6">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3>▸ Noise Controller</h3>
        <div className="row">
          {!active && !demo && <button className="pix-btn green sm" onClick={start}>Use Microphone</button>}
          {!active && !demo && <button className="pix-btn ghost sm" onClick={() => setDemo(true)}>Demo</button>}
          {(active || demo) && <button className="pix-btn rose sm" onClick={() => { stop(); setDemo(false); }}>Stop</button>}
        </div>
      </div>

      <div className="noise-stage">
        <div className="noise-readout">
          NOISE: <span className={`level ${status.cls}`}>{status.text}</span> · {Math.round(level * 100)}%
        </div>
        {bubbles.map(b => (
          <div
            key={b.id}
            className="noise-bubble"
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              background: b.c,
              transform: `translateY(-50%)`,
            }}
          />
        ))}
        <div className="noise-floor" />
      </div>

      <p className="muted">
        Шарики поднимаются по уровню звука в классе. Когда становится «too loud» — индикатор краснеет.
      </p>
    </div>
  )
}

function pickColor(level: number) {
  const palette = level < 0.3
    ? ['#a7f070', '#73eff7', '#41a6f6']
    : level < 0.6
    ? ['#ffcd75', '#ef7d57', '#f4b4c5']
    : ['#b13e53', '#ef7d57', '#ffcd75']
  return palette[Math.floor(Math.random() * palette.length)]
}

/* ============================================================
   RANDOMIZER (teams)
   ============================================================ */
function RandomTool() {
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
      <h3>▸ Team Randomizer</h3>
      <p className="muted">Вбей имена (по одному в строке), укажи число команд и нажми Shuffle.</p>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <textarea
          className="pix-textarea"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="One name per line"
        />
        <div className="col" style={{ minWidth: 220 }}>
          <label className="pixel-font" style={{ fontSize: 10, color: 'var(--c-sun)' }}>Number of teams</label>
          <input
            className="pix-input"
            type="number"
            min={2} max={10}
            value={teamCount}
            onChange={(e) => setTeamCount(Math.max(2, Math.min(10, Number(e.target.value) || 2)))}
          />
          <button className="pix-btn" onClick={shuffle}>
            <PxDice size={16} color="#1a1c2c" /> Shuffle <PxArrow size={14} color="#1a1c2c" />
          </button>
        </div>
      </div>

      {teams.length > 0 && (
        <div className="team-grid">
          {teams.map((t, i) => (
            <div key={i} className="team-card">
              <h4>TEAM {String.fromCharCode(65 + i)}</h4>
              <ul>
                {t.map(name => <li key={name}>★ {name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================================
   TIMER
   ============================================================ */
function TimerTool() {
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

  function setPreset(s: number) {
    setSeconds(s); setLeft(s); setRunning(false)
  }

  return (
    <div className="col mt-6">
      <h3>▸ Round Timer</h3>
      <div className={`timer-display ${cls}`}>
        {mm}:{ss}
      </div>

      <div className="row" style={{ justifyContent: 'center' }}>
        {!running
          ? <button className="pix-btn green" onClick={() => { if (left === 0) setLeft(seconds); setRunning(true); }}>
              ▶ Start
            </button>
          : <button className="pix-btn coral" onClick={() => setRunning(false)}>❚❚ Pause</button>}
        <button className="pix-btn ghost" onClick={() => { setLeft(seconds); setRunning(false) }}>↺ Reset</button>
      </div>

      <div className="preset-row">
        {[60, 180, 300, 600, 900, 1800].map(s => (
          <button key={s} className="pix-btn sm" onClick={() => setPreset(s)}>
            {Math.floor(s / 60)} MIN
          </button>
        ))}
      </div>

      <p className="center muted">
        Подсказка: для «Grab It First» хватит 5-10 минут, для «Academic Journey» — 20-30.
      </p>
    </div>
  )
}

/* ============================================================
   FLASHCARDS
   ============================================================ */
function FlashTool() {
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
        <h3>▸ Digital Flashcards</h3>
        <select
          className="pix-input"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          style={{ maxWidth: 280 }}
        >
          {GAMES.map(g => <option key={g.id} value={g.id}>{g.topic} — {g.title}</option>)}
        </select>
      </div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
        <div className="flashcard-inner">
          <div className="flashcard-side">
            <span className="tag green" style={{ position: 'absolute', top: 12, left: 12 }}>WORD</span>
            <span className="flashcard-word">{card.word}</span>
          </div>
          <div className="flashcard-side back">
            <span className="tag pink" style={{ position: 'absolute', top: 12, left: 12 }}>DEFINITION</span>
            <span className="flashcard-def">{card.def}</span>
          </div>
        </div>
      </div>

      <div className="fc-controls">
        <button className="pix-btn ghost sm" onClick={prev}>◂ Prev</button>
        <button className="pix-btn sm" onClick={() => setFlipped(f => !f)}>FLIP</button>
        <button className="pix-btn green sm" onClick={next}>Next ▸</button>
      </div>
      <div className="fc-progress">{idx + 1} / {deck.length}</div>
    </div>
  )
}

/* Tiny built-in mini-glossary so flashcards have meaningful definitions */
const MINI_DICT: Record<string, string> = {
  chop: 'cut into small pieces with a knife',
  whisk: 'beat ingredients quickly with a wire tool',
  simmer: 'cook gently below boiling point',
  fry: 'cook in hot oil',
  boil: 'heat liquid until bubbling',
  grate: 'shred food with a metal grater',
  dough: 'flour mixture before baking',
  recipe: 'cooking instructions for a dish',
  ingredient: 'a single component of a recipe',
  referee: 'official who enforces sports rules',
  whistle: 'object used to make a sharp sound',
  court: 'enclosed area for tennis or basketball',
  racket: 'stringed bat for tennis',
  goalkeeper: 'player who guards the goal',
  net: 'mesh used in sports like volleyball',
  coach: 'person who trains a sports team',
  helmet: 'hard headwear for protection',
  arena: 'large indoor sports venue',
  spectator: 'person watching a match',
  mortgage: 'long-term loan to buy property',
  loan: 'money borrowed that must be returned',
  salary: 'fixed monthly payment for a job',
  refund: 'money returned for a returned item',
  debt: 'money you owe',
  income: 'money you earn',
  tax: 'money paid to the government',
  deposit: 'first payment, often for a flat',
  cash: 'physical money',
  currency: 'official money of a country',
  plot: 'main story of a film or book',
  sequel: 'a film that follows another',
  soundtrack: 'music from a film',
  cast: 'all actors in a film',
  director: 'person who leads a film',
  script: 'written text of a film',
  trailer: 'short ad for a film',
  review: 'a critic\'s opinion',
  genre: 'category of film, e.g. comedy',
  actor: 'person who plays a role',
  scene: 'one part of a film',
  nod: 'move the head to say yes',
  stomach: 'where food is digested',
  ankle: 'joint between foot and leg',
  wrist: 'joint between hand and arm',
  knee: 'joint in the middle of the leg',
  shoulder: 'joint where arm meets body',
  elbow: 'joint in the middle of the arm',
  sneeze: 'sudden sound from nose',
  blink: 'close and open the eyes quickly',
  frown: 'expression of displeasure',
  kindergarten: 'school for very young children',
  primary: 'first level of school',
  secondary: 'middle level of school',
  college: 'higher education institution',
  degree: 'qualification after university',
  exam: 'a formal test',
  tuition: 'fee paid for studies',
  scholarship: 'money awarded to study',
  graduation: 'ceremony of finishing studies',
  semester: 'half of an academic year',
  terrace: 'paved area outside a house',
  patio: 'paved area, often enclosed',
  realtor: 'person who sells houses',
  tenant: 'person who rents a place',
  landlord: 'owner who rents out property',
  attic: 'room under the roof',
  basement: 'room below ground level',
  balcony: 'platform on a high floor',
  cottage: 'small country house',
  resign: 'leave a job voluntarily',
  promote: 'move someone to higher position',
  fire: 'remove someone from a job',
  hire: 'give someone a job',
  overtime: 'extra hours beyond normal',
  intern: 'trainee at a company',
  colleague: 'person you work with',
  deadline: 'final time to finish a task',
  contract: 'official work agreement',
  alibi: 'proof you were elsewhere',
  motive: 'reason for committing a crime',
  witness: 'person who saw an event',
  suspect: 'person believed to have done it',
  evidence: 'proof in an investigation',
  clue: 'small hint to a mystery',
  robbery: 'taking something by force',
  theft: 'taking something secretly',
  arrest: 'when police take a suspect',
  interrogate: 'question intensely',
  'boarding pass': 'document to enter a plane',
  luggage: 'bags you travel with',
  passport: 'document that proves nationality',
  customs: 'border check for goods',
  itinerary: 'travel plan',
  hostel: 'cheap shared accommodation',
  'jet lag': 'tiredness after a long flight',
  souvenir: 'object kept as a memory',
  departure: 'leaving a place',
  receipt: 'proof of payment',
  sale: 'goods sold at lower prices',
  discount: 'a price reduction',
  bargain: 'something cheap and good',
  retail: 'selling to the public',
  warranty: 'guarantee a product will work',
  cashier: 'person at the till',
  aisle: 'walkway between shelves',
  exchange: 'swap one item for another',
  'rush hour': 'busiest time on the roads',
  'pedestrian crossing': 'place to cross the road',
  'traffic jam': 'long line of stopped cars',
  commute: 'travel daily to work',
  fare: 'money paid for transport',
  platform: 'where you board a train',
  pavement: 'path beside the road',
  overtake: 'pass another vehicle',
  intersection: 'where two roads meet',
  roundabout: 'circular road junction',
  vlog: 'video blog',
  influencer: 'person who shapes opinions online',
  feed: 'stream of social media posts',
  hashtag: 'word with # to tag a post',
  livestream: 'broadcast in real time',
  meme: 'humorous viral image',
  subscribe: 'follow a channel',
  trending: 'currently popular',
  comment: 'reply to a post',
  viral: 'spreading rapidly online',
  classmate: 'someone in your class',
  partner: 'romantic or business companion',
  propose: 'ask someone to marry you',
  wedding: 'marriage ceremony',
  divorce: 'legal end of a marriage',
  engagement: 'agreement to marry',
  crush: 'romantic attraction',
  date: 'romantic meeting',
  breakup: 'end of a relationship',
  spouse: 'husband or wife',
  ambitious: 'strongly wants success',
  rebellious: 'resists authority',
  generous: 'gives freely to others',
  reserved: 'quiet, not open',
  outgoing: 'sociable, friendly',
  stubborn: 'refuses to change opinion',
  witty: 'cleverly funny',
  cautious: 'careful and prudent',
  arrogant: 'thinks too highly of self',
  humble: 'modest about oneself',
  onion: 'sharp-tasting bulb vegetable',
  mushroom: 'fungus used in cooking',
  cream: 'fatty part of milk',
  mortgage_alt: '',
}
function defOf(w: string) { return MINI_DICT[w] ?? `(B1) ${w}` }

/* ============================================================
   PRINTABLES
   ============================================================ */
function PrintTool() {
  const items = [
    { name: 'fast_cash_bills.pdf',  game: 'Fast Cash',        meta: 'A4 · 24 bills',  desc: '24 «купюры» с экономической лексикой для распечатки и расклейки.' },
    { name: 'kitchen_recipes.pdf',  game: 'Kitchen Quest',    meta: 'A4 · 6 cards',   desc: 'Карточки блюд: Beshbarmak, Pasta with chicken, Plov, Lagman.' },
    { name: 'kitchen_ingredients.pdf', game: 'Kitchen Quest', meta: 'A5 · 32 cards',  desc: 'Карточки продуктов для квеста по классу.' },
    { name: 'gear_role_cards.pdf',  game: 'Guess Your Gear',  meta: 'A6 · 30 pairs',  desc: 'Парные карточки role/gear/place для лбного приклеивания.' },
    { name: 'cinema_words.pdf',     game: 'Roll & Write',     meta: 'A4 · 1 sheet',   desc: 'Список киношных терминов для списка-стопера.' },
    { name: 'academic_board.pdf',   game: 'Academic Journey', meta: 'A3 · 1 board',   desc: 'Игровое поле-бродилка от kindergarten до graduation.' },
    { name: 'crime_dossier.pdf',    game: 'Case File X',      meta: 'A4 · 3 pages',   desc: 'Досье подозреваемых: Hugh Jass, Cruella la Grande, Jackie Bon.' },
    { name: 'shopping_items.pdf',   game: 'Shopping Slap',    meta: 'A5 · 24 cards',  desc: 'Карточки товаров и категорий для шлепков.' },
    { name: 'pyramid_template.pdf', game: 'Pyramid',          meta: 'A4 · 1 sheet',   desc: 'Пустой шаблон пирамиды для написания слов учителем.' },
  ]
  return (
    <div className="col mt-6">
      <h3>▸ Printables</h3>
      <p className="muted">Все материалы из Appendix хэндбука, готовые к печати. PDF откроются в новом окне.</p>

      <div className="printable-grid">
        {items.map(it => (
          <div key={it.name} className="printable">
            <div className="file-header">
              <span className="file-name">{it.name}</span>
              <span className="file-meta">{it.meta}</span>
            </div>
            <p style={{ marginBottom: 8 }}><b style={{ color: 'var(--c-grape)' }}>{it.game}</b></p>
            <p>{it.desc}</p>
            <button className="pix-btn coral sm mt-4" onClick={() => alert(`Заглушка: PDF «${it.name}» скоро будет здесь.`)}>
              <PxPrinter size={14} color="#1a1c2c" /> Print
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

