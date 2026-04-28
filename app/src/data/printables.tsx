import type { ReactNode } from 'react'
import type { Lang } from '../i18n/dict'
import { AcademicBoardSvg } from './academicBoardSvg'

/* ============================================================
   Printable templates for the Classroom Manager.
   Each renderer returns layout-ready JSX styled for A4/A5/A3.
   ============================================================ */

export type LText = Record<Lang, string>

export interface Printable {
  id: string
  name: string
  game: string
  meta: string
  desc: LText
  paper: 'A4' | 'A5' | 'A3' | 'A6'
  render: () => ReactNode
}

const d = (en: string, ru: string, kk: string, tr: string): LText => ({ en, ru, kk, tr })

/* ---------- helpers ---------- */
const Sheet: React.FC<{ children: ReactNode; title: string; subtitle?: string }> = ({ children, title, subtitle }) => (
  <div className="print-sheet">
    <header className="print-head">
      <div>
        <div className="print-game">★ {title}</div>
        {subtitle && <div className="print-sub">{subtitle}</div>}
      </div>
      <div className="print-stamp">ENGAGE.exe · v1.0</div>
    </header>
    <div className="print-body">{children}</div>
    <footer className="print-foot">
      <span>cut along ⤵</span>
      <span>—————————————————————————————————</span>
      <span>cut along ⤴</span>
    </footer>
  </div>
)

const Card: React.FC<{
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: string
  title?: string
}> = ({ children, size = 'md', color = '#ffcd75', title }) => (
  <div className={`print-card print-card-${size}`} style={{ background: color }}>
    {title && <div className="print-card-title">{title}</div>}
    <div className="print-card-body">{children}</div>
  </div>
)

/* ---------- 1) FAST CASH BILLS ---------- */
const cashWords = [
  ['MORTGAGE', '$500'], ['LOAN', '$250'], ['SALARY', '$1000'], ['REFUND', '$50'],
  ['DEBT', '$200'], ['INCOME', '$1500'], ['TAX', '$100'], ['DEPOSIT', '$300'],
  ['CASH', '$20'], ['CURRENCY', '$100'], ['INVOICE', '$80'], ['INVESTMENT', '$2000'],
  ['BUDGET', '$500'], ['EXPENSE', '$150'], ['SAVINGS', '$700'], ['INTEREST', '$45'],
  ['BANKRUPT', '$0'], ['PROFIT', '$900'], ['BILL', '$60'], ['CHANGE', '$5'],
  ['DISCOUNT', '$15'], ['FEE', '$25'], ['PAYMENT', '$400'], ['WAGE', '$800'],
]
const fastCashBills: Printable = {
  id: 'fast_cash_bills',
  name: 'fast_cash_bills.pdf',
  game: 'Fast Cash',
  meta: 'A4 · 24 bills',
  paper: 'A4',
  desc: d(
    '24 "banknotes" with economy vocabulary, ready to cut out and post around the room.',
    '24 «купюры» с экономической лексикой для распечатки и расклейки.',
    'Үнемдік лексикасы бар 24 «купюра» — басып шығарып, сыныпқа жапсыруға арналған.',
    'Kesip sınıfa asmak için ekonomi kelimeleriyle 24 "banknot".',
  ),
  render: () => (
    <Sheet title="Fast Cash · Banknotes" subtitle="Cut and stick around the classroom. Players grab the matching bill on cue.">
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '10mm' }}>
        {cashWords.map(([w, v], i) => (
          <div key={w} className="banknote">
            <div className="bn-corner tl">{v}</div>
            <div className="bn-corner tr">{v}</div>
            <div className="bn-corner bl">{v}</div>
            <div className="bn-corner br">{v}</div>
            <div className="bn-word">{w}</div>
            <div className="bn-serial">№ {String(i + 1).padStart(3, '0')} · ENGAGE BANK</div>
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 2) KITCHEN RECIPES ---------- */
const recipes = [
  { name: 'Beshbarmak',         from: 'Kazakhstan', items: ['horse meat', 'onion', 'noodle dough', 'broth', 'parsley'], verbs: ['boil', 'slice', 'simmer', 'serve'] },
  { name: 'Pasta with Chicken', from: 'Italy',      items: ['pasta', 'chicken breast', 'cream', 'garlic', 'parmesan'], verbs: ['fry', 'whisk', 'simmer', 'mix'] },
  { name: 'Plov',               from: 'Uzbekistan', items: ['rice', 'lamb', 'carrot', 'onion', 'cumin'],               verbs: ['fry', 'add', 'simmer', 'rest'] },
  { name: 'Lagman',             from: 'Central Asia', items: ['noodles', 'beef', 'pepper', 'tomato', 'spices'],         verbs: ['stir-fry', 'boil', 'pour', 'sprinkle'] },
  { name: 'Mushroom Risotto',   from: 'Italy',      items: ['arborio rice', 'mushrooms', 'onion', 'butter', 'broth'],   verbs: ['stir', 'add', 'simmer', 'taste'] },
  { name: 'Caesar Salad',       from: 'USA',        items: ['lettuce', 'croutons', 'parmesan', 'chicken', 'dressing'],   verbs: ['chop', 'toss', 'grate', 'plate'] },
]
const kitchenRecipes: Printable = {
  id: 'kitchen_recipes',
  name: 'kitchen_recipes.pdf',
  game: 'Kitchen Quest',
  meta: 'A4 · 6 cards',
  paper: 'A4',
  desc: d(
    'Dish cards for teams: name + ingredient list + cooking verbs.',
    'Карточки блюд для команд: название блюда + список ингредиентов + глаголы готовки.',
    'Командаларға арналған тағам карталары: атау + ингредиенттер + пісіру етістіктері.',
    'Takımlar için yemek kartları: ad + malzeme listesi + pişirme fiilleri.',
  ),
  render: () => (
    <Sheet title="Kitchen Quest · Recipe Cards" subtitle="Hand one card per team. They must hunt the ingredients and assemble the recipe.">
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8mm' }}>
        {recipes.map(r => (
          <div key={r.name} className="recipe-card">
            <div className="rc-head">
              <h3>{r.name}</h3>
              <span className="rc-flag">{r.from}</span>
            </div>
            <div className="rc-section">
              <strong>Ingredients</strong>
              <ul>{r.items.map(it => <li key={it}>☐ {it}</li>)}</ul>
            </div>
            <div className="rc-section">
              <strong>Cooking verbs</strong>
              <div className="rc-verbs">{r.verbs.map(v => <span key={v}>{v}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 3) KITCHEN INGREDIENTS (32 small cards) ---------- */
const ingredients = [
  'horse meat', 'onion', 'mushroom', 'cream', 'garlic', 'butter', 'rice', 'pasta',
  'lamb', 'carrot', 'pepper', 'tomato', 'beef', 'noodles', 'cumin', 'parsley',
  'lettuce', 'parmesan', 'croutons', 'chicken', 'broth', 'arborio rice', 'spices', 'dough',
  'sugar', 'salt', 'oil', 'flour', 'egg', 'milk', 'cheese', 'lemon',
]
const kitchenIngredients: Printable = {
  id: 'kitchen_ingredients',
  name: 'kitchen_ingredients.pdf',
  game: 'Kitchen Quest',
  meta: 'A4 · 32 cards',
  paper: 'A4',
  desc: d(
    'Small ingredient cards — hide them around the room for the quest.',
    'Маленькие карточки продуктов — спрятать по классу для квеста.',
    'Кішкене өнім карталары — тапсырма үшін сынып бойынша жасырыңыз.',
    'Küçük malzeme kartları — görev için sınıfa saklayın.',
  ),
  render: () => (
    <Sheet title="Kitchen Quest · Ingredients" subtitle="Cut and hide around the classroom. Teams must find the right ones for their recipe.">
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '4mm' }}>
        {ingredients.map(i => (
          <div key={i} className="ingredient-card">
            <div className="ic-icon">▣</div>
            <div className="ic-word">{i}</div>
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 4) GEAR ROLE CARDS ---------- */
const gearPairs: [string, string, string][] = [
  ['Tennis player', 'Racket', 'Court'],
  ['Footballer', 'Ball', 'Stadium'],
  ['Swimmer', 'Goggles', 'Pool'],
  ['Boxer', 'Gloves', 'Ring'],
  ['Skier', 'Skis', 'Slope'],
  ['Cyclist', 'Helmet', 'Track'],
  ['Goalkeeper', 'Gloves', 'Goal'],
  ['Coach', 'Whistle', 'Bench'],
  ['Referee', 'Whistle', 'Pitch'],
  ['Spectator', 'Ticket', 'Stand'],
]
const gearRoleCards: Printable = {
  id: 'gear_role_cards',
  name: 'gear_role_cards.pdf',
  game: 'Guess Your Gear',
  meta: 'A4 · 30 cards',
  paper: 'A4',
  desc: d(
    'Role / gear / place cards to stick on each student\'s back.',
    'Карточки role/gear/place для приклеивания на спину.',
    'Оқушының арқасына жапсыруға арналған role/gear/place карталары.',
    'Her öğrencinin sırtına yapıştırmak için role/gear/place kartları.',
  ),
  render: () => (
    <Sheet title="Guess Your Gear · Role Cards" subtitle="Stick one card on each student's back. They use Yes/No questions to discover their identity.">
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '6mm' }}>
        {gearPairs.flatMap(([a, b, c]) => [
          { label: 'ROLE',  word: a, color: '#ffcd75' },
          { label: 'GEAR',  word: b, color: '#a7f070' },
          { label: 'PLACE', word: c, color: '#73eff7' },
        ]).map((card, i) => (
          <Card key={i} color={card.color} size="md">
            <div style={{ fontSize: 9, letterSpacing: 2, opacity: 0.7 }}>{card.label}</div>
            <div className="big-word">{card.word}</div>
          </Card>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 5) CINEMA WORDS ---------- */
const cinemaWords = [
  ['plot',       'main story of a film'],
  ['sequel',     'a film that follows another'],
  ['soundtrack', 'music from a film'],
  ['cast',       'all actors in a film'],
  ['director',   'person who leads a film'],
  ['script',     'written text of a film'],
  ['trailer',    'short ad for a film'],
  ['review',     'a critic\'s opinion'],
  ['genre',      'category of film'],
  ['actor',      'person who plays a role'],
  ['scene',      'one part of a film'],
  ['cinematography', 'art of filming'],
]
const cinemaList: Printable = {
  id: 'cinema_words',
  name: 'cinema_words.pdf',
  game: 'Roll & Write',
  meta: 'A4 · 1 sheet',
  paper: 'A4',
  desc: d(
    'List of cinema terms for Roll & Write.',
    'Список киношных терминов для Roll & Write.',
    'Roll & Write үшін кино терминдерінің тізімі.',
    'Roll & Write için sinema terimleri listesi.',
  ),
  render: () => (
    <Sheet title="Roll & Write · Cinema Vocabulary" subtitle="Roll a die. On 5 or 6, grab the pen and start writing definitions.">
      <table className="word-table">
        <thead><tr><th>#</th><th>Word</th><th>Your definition</th></tr></thead>
        <tbody>
          {cinemaWords.map(([w], i) => (
            <tr key={w}><td>{i + 1}</td><td className="word-cell">{w}</td><td className="def-cell"></td></tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: '6mm', fontSize: 11 }}>Hidden answers (for the teacher only):</p>
      <div className="answers">
        {cinemaWords.map(([w, d]) => <div key={w}><b>{w}</b> — {d}</div>)}
      </div>
    </Sheet>
  ),
}

/* ---------- 6) ACADEMIC BOARD ---------- */
/* The visual board (pink road, trees, lake, houses, task bubbles, ★ stars,
   START / BOSS / GRADUATION badges) is rendered by AcademicBoardSvg.
   Below we only define the deck of EVENT cards drawn whenever a player
   lands on a yellow ★ square. */

const academicEvents: string[] = [
  'OVERSLEPT! · Skip your next turn.',
  'TOP MARK! · Move forward 2 squares.',
  'CAUGHT CHEATING · Go back 3 squares.',
  'SCHOLARSHIP! · Move forward 3 squares.',
  'FAILED THE QUIZ · Go back 2 squares.',
  'GROUP PROJECT · Swap places with the player behind you.',
  'TEACHER\'S PET · Take another turn.',
  'PRINCIPAL\'S OFFICE · Skip your next turn AND answer 1 task card.',
  'STUDY HARD · Roll the die again.',
  'LIBRARY DAY · Pick any task square and answer it for +1 step.',
  'FIELD TRIP · Move forward 1 square and tell the class about a real trip.',
  'LATE BUS · Stay where you are this turn.',
]

const academicBoard: Printable = {
  id: 'academic_board',
  name: 'academic_board.pdf',
  game: 'Academic Journey',
  meta: 'A3 · 1 board + event cards',
  paper: 'A3',
  desc: d(
    'A board-game path from kindergarten to graduation, with real B1 task prompts on every pink square and a deck of event cards for the yellow stars.',
    'Игровое поле-бродилка от kindergarten до graduation: на розовых клетках — реальные B1-задания, на жёлтых звёздах — карточки событий.',
    'Kindergarten-нан graduation-ға дейінгі ойын тақтасы: қызғылт шаршыларда — нақты B1-тапсырмалар, сары жұлдыздарда — оқиға карталары.',
    'Kindergarten\'dan graduation\'a uzanan oyun tahtası: pembe karelerde gerçek B1 görev sorularıyla, sarı yıldızlarda olay kartı destesiyle.',
  ),
  render: () => (
    <Sheet
      title="Academic Journey · Game Board"
      subtitle="Roll a die, answer the B1 task on every pink bubble, draw an EVENT card on every ★. First to reach GRADUATION wins."
    >
      <div style={{ width: '100%', border: '3px solid #1a1c2c', boxShadow: '4px 4px 0 #b13e53', overflow: 'hidden' }}>
        <AcademicBoardSvg />
      </div>

      <div style={{ marginTop: '4mm', fontSize: 11 }}>
        <b>Legend:</b>
        <span style={{ background:'#e83e8c', color:'#fff', padding:'1px 6px', marginLeft:'2mm', borderRadius: 10 }}>task bubble</span>
        <span style={{ background:'#ffe066', padding:'1px 6px', marginLeft:'2mm', border:'1px solid #b13e53' }}>★ event</span>
        <span style={{ background:'#9bd0ec', padding:'1px 6px', marginLeft:'2mm' }}>lake</span>
        &nbsp;·&nbsp; bring tokens & one die.
      </div>

      <h3 style={{ marginTop: '8mm', fontFamily: "'Press Start 2P', monospace", fontSize: 12, color: '#b13e53' }}>
        ★ EVENT CARDS · cut and shuffle into a deck
      </h3>
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '4mm', marginTop: '3mm' }}>
        {academicEvents.map((e, i) => (
          <div key={i} className="print-card print-card-sm" style={{ background: '#fff6c9', borderStyle: 'dashed' }}>
            <div className="print-card-title" style={{ color: '#b13e53' }}>★ EVENT #{String(i + 1).padStart(2, '0')}</div>
            <div className="print-card-body" style={{ fontSize: 12 }}>{e}</div>
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 7) CRIME DOSSIERS ---------- */
const suspects = [
  {
    name: 'Hugh Jass', role: 'Security Guard', age: 47,
    photo: 'guard',
    alibi: '"I was on patrol in Wing C between 22:00 and 23:30."',
    motive: 'Was passed over for promotion last year. Holds a grudge against the curator.',
    evidence: ['Master keys to all halls', 'Reported stomach ache, left post early', 'No camera footage 22:45–22:53'],
  },
  {
    name: 'Cruella la Grande', role: 'Art Historian', age: 58,
    photo: 'historian',
    alibi: '"I was giving a lecture in Hall 12. Forty witnesses, darling."',
    motive: 'Believes the painting is a forgery and "deserves to disappear".',
    evidence: ['Recently published article calling the work "fake"', 'Has gloves matching fibers found at the scene', 'Lecture ended at 22:00 — 53 unaccounted minutes'],
  },
  {
    name: 'Jackie Bon', role: 'Cleaner', age: 31,
    photo: 'cleaner',
    alibi: '"I was emptying bins in the Egyptian section."',
    motive: 'Massive student loan. Was seen browsing dark-web forums.',
    evidence: ['Cleaning cart found near the empty frame', 'Wears size-9 shoes — matches print', 'Searched "how to forge ID" on a museum computer'],
  },
]
const crimeDossier: Printable = {
  id: 'crime_dossier',
  name: 'crime_dossier.pdf',
  game: 'Case File X',
  meta: 'A4 · 3 pages',
  paper: 'A4',
  desc: d(
    'Suspect dossiers for the detective investigation.',
    'Досье подозреваемых для детективного расследования.',
    'Детективтік тергеуге арналған күдіктілердің досьесі.',
    'Dedektif soruşturması için şüpheli dosyaları.',
  ),
  render: () => (
    <Sheet title="Case File X · Suspect Dossiers" subtitle="A painting has vanished from the Louvre. Three suspects. One thief. Find them.">
      <div className="dossier-grid">
        {suspects.map(s => (
          <div key={s.name} className="dossier">
            <div className="dossier-photo">{photoArt(s.photo)}</div>
            <div className="dossier-id">
              <div className="d-name">{s.name}</div>
              <div className="d-meta">{s.role} · age {s.age}</div>
            </div>
            <div className="dossier-row"><b>ALIBI</b><p>{s.alibi}</p></div>
            <div className="dossier-row"><b>MOTIVE</b><p>{s.motive}</p></div>
            <div className="dossier-row"><b>EVIDENCE</b>
              <ul>{s.evidence.map(e => <li key={e}>· {e}</li>)}</ul>
            </div>
            <div className="dossier-stamp">CONFIDENTIAL</div>
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

function photoArt(kind: string) {
  /* Tiny pixel-art portrait per role */
  const colors = kind === 'guard'    ? ['#29274c', '#41a6f6']
              : kind === 'historian' ? ['#5d275d', '#b13e53']
              :                        ['#257179', '#a7f070']
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" width="100%" height="100%">
      <rect width="16" height="16" fill={colors[0]} />
      <rect x="5" y="3" width="6" height="6" fill="#ffcd75" />
      <rect x="4" y="9" width="8" height="6" fill={colors[1]} />
      <rect x="6" y="5" width="1" height="1" fill="#0f1020" />
      <rect x="9" y="5" width="1" height="1" fill="#0f1020" />
      <rect x="6" y="7" width="4" height="1" fill="#0f1020" />
      <rect x="4" y="3" width="8" height="1" fill="#0f1020" />
    </svg>
  )
}

/* ---------- 8) SHOPPING ITEMS ---------- */
const shoppingItems = [
  { word: 'receipt',  cat: 'document' }, { word: 'refund',   cat: 'service' },
  { word: 'discount', cat: 'service'  }, { word: 'sale',     cat: 'service' },
  { word: 'cashier',  cat: 'person'   }, { word: 'aisle',    cat: 'place'   },
  { word: 'warranty', cat: 'document' }, { word: 'bargain',  cat: 'service' },
  { word: 'retail',   cat: 'concept'  }, { word: 'exchange', cat: 'service' },
  { word: 'queue',    cat: 'concept'  }, { word: 'trolley',  cat: 'object'  },
  { word: 'till',     cat: 'object'   }, { word: 'tag',      cat: 'object'  },
  { word: 'shelf',    cat: 'place'    }, { word: 'basket',   cat: 'object'  },
  { word: 'voucher',  cat: 'document' }, { word: 'brand',    cat: 'concept' },
  { word: 'expired',  cat: 'concept'  }, { word: 'return',   cat: 'service' },
  { word: 'bargain hunter', cat: 'person' }, { word: 'bag',  cat: 'object'  },
  { word: 'change',   cat: 'object'   }, { word: 'price tag', cat: 'object' },
]
const shoppingCards: Printable = {
  id: 'shopping_items',
  name: 'shopping_items.pdf',
  game: 'Shopping Slap',
  meta: 'A4 · 24 cards',
  paper: 'A4',
  desc: d(
    'Item and category cards for the slap game.',
    'Карточки товаров и категорий для шлепков.',
    'Соғу ойынына арналған өнім және санат карталары.',
    'Tokat oyunu için ürün ve kategori kartları.',
  ),
  render: () => (
    <Sheet title="Shopping Slap · Item Cards" subtitle="Place face-up on the table. Players slap the matching card on cue.">
      <div className="print-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '5mm' }}>
        {shoppingItems.map(it => (
          <div key={it.word} className="shop-card">
            <div className="shop-cat">{it.cat.toUpperCase()}</div>
            <div className="shop-word">{it.word}</div>
            <div className="shop-bar" />
          </div>
        ))}
      </div>
    </Sheet>
  ),
}

/* ---------- 9) PYRAMID ---------- */
const pyramidTemplate: Printable = {
  id: 'pyramid_template',
  name: 'pyramid_template.pdf',
  game: 'Pyramid',
  meta: 'A4 · 1 sheet',
  paper: 'A4',
  desc: d(
    'Blank pyramid template — fill in the words yourself.',
    'Пустой шаблон пирамиды для написания слов учителем.',
    'Бос пирамида шаблоны — мұғалімге сөз жазуға арналған.',
    'Boş piramit şablonu — kelimeleri öğretmen yazar.',
  ),
  render: () => (
    <Sheet title="Pyramid · Blank Template" subtitle="Write one word per box. Player A describes from bottom to top, player B guesses with their back turned.">
      <div className="pyramid">
        {[5, 4, 3, 2, 1].map(n => (
          <div key={n} className="pyr-row">
            {Array.from({ length: n }).map((_, i) => (
              <div key={i} className="pyr-box"></div>
            ))}
          </div>
        ))}
      </div>
      <p style={{ marginTop: '6mm', textAlign: 'center', fontSize: 13 }}>
        Reach the top → shout "<b>PYRAMID!</b>"
      </p>
    </Sheet>
  ),
}

/* ---------- REGISTRY ---------- */
export const PRINTABLES: Printable[] = [
  fastCashBills,
  kitchenRecipes,
  kitchenIngredients,
  gearRoleCards,
  cinemaList,
  academicBoard,
  crimeDossier,
  shoppingCards,
  pyramidTemplate,
]

