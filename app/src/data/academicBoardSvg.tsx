/* ============================================================
   Academic Journey · printable board illustration
   Pink winding road · pine trees · cute houses · lake · lavender
   12 task bubbles · 6 ★ event stars · START / BOSS / GRADUATION
   ============================================================ */
import type { ReactNode } from 'react'

/* ---------- decorative atoms ---------- */

const Tree: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${s})`}>
    <rect x="-4" y="2" width="8" height="14" fill="#5a3a22" />
    <polygon points="0,-46 -22,-10 22,-10" fill="#2c7a3a" />
    <polygon points="0,-26 -18,8  18,8"  fill="#3aa54a" />
    <polygon points="0,-8  -12,18 12,18" fill="#4ec460" />
  </g>
)

const House: React.FC<{ x: number; y: number; color: string; roof: string; door?: string }> = ({ x, y, color, roof, door = '#b13e53' }) => (
  <g transform={`translate(${x},${y})`}>
    <rect x="-22" y="-14" width="44" height="36" fill={color} stroke="#1a1c2c" strokeWidth="2" />
    <polygon points="-26,-14 0,-42 26,-14" fill={roof} stroke="#1a1c2c" strokeWidth="2" />
    <rect x="-7" y="2" width="14" height="20" fill={door} stroke="#1a1c2c" strokeWidth="1.5" />
    <rect x="-16" y="-8" width="8" height="8" fill="#fff6c9" stroke="#1a1c2c" strokeWidth="1.5" />
    <rect x="8"   y="-8" width="8" height="8" fill="#fff6c9" stroke="#1a1c2c" strokeWidth="1.5" />
  </g>
)

const Lake: React.FC<{ x: number; y: number; rx: number; ry: number }> = ({ x, y, rx, ry }) => (
  <g>
    <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#9bd0ec" stroke="#1a1c2c" strokeWidth="2" />
    <ellipse cx={x - rx * 0.3} cy={y - ry * 0.3} rx={rx * 0.35} ry={ry * 0.18} fill="#cfe9f5" />
    <path d={`M ${x - rx * 0.4} ${y + ry * 0.2} q 10 -4 20 0`} stroke="#fff" strokeWidth="2" fill="none" />
  </g>
)

const Lavender: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <rect x="-1" y="0" width="2" height="20" fill="#3aa54a" />
    <rect x="-3" y="-8" width="6" height="10" fill="#9d6cc7" />
    <rect x="-2" y="-12" width="4" height="6" fill="#c4a3e6" />
  </g>
)

const Star: React.FC<{ x: number; y: number; s?: number }> = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${s})`}>
    <polygon
      points="0,-26 7,-8 26,-8 11,3 17,22 0,11 -17,22 -11,3 -26,-8 -7,-8"
      fill="#ffe066" stroke="#b13e53" strokeWidth="3" strokeLinejoin="round"
    />
  </g>
)

const Cap: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <polygon points="-22,-2 0,-12 22,-2 0,8" fill="#1a1c2c" />
    <rect x="-12" y="2" width="24" height="6" fill="#1a1c2c" />
    <line x1="14" y1="-2" x2="20" y2="14" stroke="#ffcd75" strokeWidth="2" />
    <circle cx="20" cy="15" r="3" fill="#ffcd75" />
  </g>
)

const Crown: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <polygon points="-18,4 -18,-10 -10,-2 0,-14 10,-2 18,-10 18,4" fill="#ffcd75" stroke="#1a1c2c" strokeWidth="2" />
    <rect x="-18" y="4" width="36" height="4" fill="#ffcd75" stroke="#1a1c2c" strokeWidth="2" />
    <circle cx="-10" cy="-2" r="2" fill="#b13e53" />
    <circle cx="0"   cy="-9" r="2" fill="#b13e53" />
    <circle cx="10"  cy="-2" r="2" fill="#b13e53" />
  </g>
)

/* Word-wrap a string into lines fitting roughly `maxChars` per line. */
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    const test = line ? line + ' ' + w : w
    if (test.length > maxChars && line) {
      lines.push(line)
      line = w
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  return lines
}

/* Pink task bubble with multi-line text — pure SVG (prints reliably) */
const Bubble: React.FC<{ x: number; y: number; r: number; text: string; bg?: string; size?: number }> = ({
  x, y, r, text, bg = '#e83e8c', size = 11,
}) => {
  const maxChars = Math.max(10, Math.floor((r * 1.7) / (size * 0.55)))
  const lines = wrapText(text, maxChars)
  const lh = size * 1.2
  const startY = y - ((lines.length - 1) * lh) / 2
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={bg} stroke="#a8285f" strokeWidth="2" />
      <circle cx={x - r * 0.35} cy={y - r * 0.45} r={r * 0.18} fill="rgba(255,255,255,0.35)" />
      <text
        x={x}
        y={startY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={600}
        fontSize={size}
        fill="#fff"
      >
        {lines.map((ln, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : lh}>{ln}</tspan>
        ))}
      </text>
    </g>
  )
}

/* Big label badge (START / BOSS / GRADUATION) */
const Badge: React.FC<{ x: number; y: number; r: number; label: string; icon?: ReactNode }> = ({ x, y, r, label, icon }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="#e83e8c" stroke="#a8285f" strokeWidth="3" />
    <circle cx={x - r * 0.4} cy={y - r * 0.5} r={r * 0.2} fill="rgba(255,255,255,0.4)" />
    {icon && <g transform={`translate(${x},${y - r * 0.45})`}>{icon}</g>}
    <text
      x={x} y={y + (icon ? r * 0.25 : 4)} textAnchor="middle"
      fontFamily="'Press Start 2P', monospace"
      fontSize={r * 0.32}
      fill="#fff"
      style={{ letterSpacing: 1 }}
    >
      {label}
    </text>
  </g>
)

/* ---------- Path nodes (in walk order) ----------
   x in [0..800], y in [0..1130]. The road snakes through them. */

type Node =
  | { kind: 'start';    x: number; y: number }
  | { kind: 'task';     x: number; y: number; r: number; text: string; size?: number }
  | { kind: 'event';    x: number; y: number }
  | { kind: 'boss';     x: number; y: number }
  | { kind: 'grad';     x: number; y: number }
  | { kind: 'turn';     x: number; y: number } // pure path waypoint, no marker

const NODES: Node[] = [
  { kind: 'start', x: 90,  y: 1050 },
  { kind: 'task',  x: 230, y: 990,  r: 56, text: 'Explain the difference between a nursery and a kindergarten.' },
  { kind: 'event', x: 380, y: 1010 },
  { kind: 'task',  x: 540, y: 1000, r: 60, text: 'What are the advantages of attending a state school compared to a private school?' },
  { kind: 'task',  x: 670, y: 880,  r: 60, text: 'Give two reasons why a parent might send their child to a boarding school.' },
  { kind: 'task',  x: 470, y: 800,  r: 60, text: 'Describe the typical daily routine of primary school pupils.' },
  { kind: 'event', x: 290, y: 790 },
  { kind: 'task',  x: 170, y: 700,  r: 58, text: 'What are the main responsibilities of a head teacher?' },
  { kind: 'task',  x: 340, y: 600,  r: 60, text: 'Name 3 academic subjects where you might need to earn a degree.' },
  { kind: 'event', x: 520, y: 580 },
  { kind: 'task',  x: 560, y: 470,  r: 62, text: 'Explain how a school year divided into terms differs from one divided into semesters.', size: 10 },
  { kind: 'task',  x: 480, y: 370,  r: 60, text: 'At what age do children in the UK usually start nursery, and is it compulsory?' },
  { kind: 'event', x: 300, y: 350 },
  { kind: 'task',  x: 140, y: 280,  r: 58, text: 'Explain the best way to REVISE for an exam.' },
  { kind: 'task',  x: 290, y: 190,  r: 58, text: 'Use "be allowed to" to describe a school rule.' },
  { kind: 'event', x: 470, y: 170 },
  { kind: 'task',  x: 600, y: 120,  r: 60, text: 'In the US, what are the 3 levels of the school system before university?' },
  { kind: 'boss',  x: 720, y: 90 },
  // road snakes back down the right side
  { kind: 'turn',  x: 740, y: 280 },
  { kind: 'task',  x: 720, y: 440,  r: 60, text: 'Explain the difference between taking an exam and passing an exam.' },
  { kind: 'event', x: 740, y: 600 },
  { kind: 'turn',  x: 730, y: 800 },
  { kind: 'turn',  x: 740, y: 980 },
  { kind: 'grad',  x: 720, y: 1080 },
]

/* Build a smooth path through node centers using quadratic curves
   (each midpoint becomes a curve target; the previous point is the control). */
function buildPath(nodes: Node[]): string {
  const pts = nodes.map(n => ({ x: n.x, y: n.y }))
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2
    const my = (pts[i].y + pts[i + 1].y) / 2
    d += ` Q ${pts[i].x} ${pts[i].y} ${mx} ${my}`
  }
  const last = pts[pts.length - 1]
  d += ` T ${last.x} ${last.y}`
  return d
}

/* ---------- the printable board itself ---------- */

export const AcademicBoardSvg: React.FC = () => {
  const roadD = buildPath(NODES)

  /* scattered trees — fixed positions so it prints identically every time */
  const trees: { x: number; y: number; s: number }[] = [
    { x: 60,  y: 940, s: 0.9 }, { x: 130, y: 880, s: 1.0 }, { x: 80,  y: 820, s: 0.8 },
    { x: 360, y: 940, s: 0.9 }, { x: 410, y: 880, s: 1.0 }, { x: 460, y: 920, s: 0.85 },
    { x: 340, y: 870, s: 0.7 },
    { x: 600, y: 700, s: 1.0 }, { x: 640, y: 760, s: 0.85 }, { x: 720, y: 700, s: 0.9 },
    { x: 100, y: 540, s: 0.95 }, { x: 60,  y: 600, s: 0.8 }, { x: 150, y: 600, s: 0.75 },
    { x: 220, y: 480, s: 0.9 }, { x: 270, y: 540, s: 0.85 },
    { x: 480, y: 540, s: 0.85 },
    { x: 60,  y: 380, s: 0.95 }, { x: 30,  y: 320, s: 0.8 }, { x: 130, y: 380, s: 0.85 },
    { x: 60,  y: 220, s: 0.85 }, { x: 30,  y: 160, s: 0.75 },
    { x: 200, y: 320, s: 0.9 }, { x: 380, y: 320, s: 0.85 }, { x: 440, y: 280, s: 0.8 },
    { x: 200, y: 130, s: 0.85 }, { x: 360, y: 130, s: 0.8 }, { x: 540, y: 230, s: 0.85 },
    { x: 580, y: 60,  s: 0.7 },  { x: 660, y: 200, s: 0.7 },
  ]

  const lavenders = [
    { x: 720, y: 350 }, { x: 700, y: 540 }, { x: 740, y: 720 },
    { x: 690, y: 920 }, { x: 60,  y: 1080 }, { x: 230, y: 1080 },
  ]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 1130"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block', width: '100%', height: 'auto', background: '#fbf3df' }}
    >
      {/* paper texture / soft swatches */}
      <rect x="0" y="0" width="800" height="1130" fill="#fbf3df" />
      <ellipse cx="700" cy="180" rx="120" ry="50" fill="#e6c2dc" opacity="0.45" />
      <ellipse cx="120" cy="1030" rx="200" ry="55" fill="#e6c2dc" opacity="0.45" />
      <ellipse cx="500" cy="1090" rx="220" ry="40" fill="#c8aedc" opacity="0.45" />

      {/* lake (middle-left) */}
      <Lake x={300} y={870} rx={70} ry={28} />

      {/* houses cluster (top middle) */}
      <House x={380} y={70}  color="#7aa3d6" roof="#9bb6e0" />
      <House x={440} y={75}  color="#9d6cc7" roof="#b58edc" door="#5d275d" />
      <House x={500} y={80}  color="#7fc59f" roof="#a3dab6" />
      <House x={560} y={75}  color="#e8a4b8" roof="#f4b4c5" />

      {/* graduation hut (near GRADUATION) */}
      <House x={650} y={1010} color="#b97a56" roof="#8a5a3a" door="#5d275d" />

      {/* trees */}
      {trees.map((t, i) => <Tree key={i} {...t} />)}
      {lavenders.map((l, i) => <Lavender key={`lv-${i}`} {...l} />)}

      {/* the pink road — outer dark stroke, inner pink, white dashed center */}
      <path d={roadD} fill="none" stroke="#a8285f" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
      <path d={roadD} fill="none" stroke="#e83e8c" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
      <path d={roadD} fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 12" strokeLinecap="round" />

      {/* nodes (markers + bubbles) */}
      {NODES.map((n, i) => {
        if (n.kind === 'task') {
          return <Bubble key={i} x={n.x} y={n.y} r={n.r} text={n.text} size={n.size} />
        }
        if (n.kind === 'event') {
          return <Star key={i} x={n.x} y={n.y} s={1.2} />
        }
        if (n.kind === 'start') {
          return <Badge key={i} x={n.x} y={n.y} r={56} label="START" />
        }
        if (n.kind === 'boss') {
          return <Badge key={i} x={n.x} y={n.y} r={62} label="BOSS" icon={<Crown x={0} y={0} />} />
        }
        if (n.kind === 'grad') {
          return <Badge key={i} x={n.x} y={n.y} r={62} label="GRADUATION" icon={<Cap x={0} y={0} />} />
        }
        return null
      })}
    </svg>
  )
}


