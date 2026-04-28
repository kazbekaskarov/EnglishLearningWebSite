 /* ============================================================
   Academic Journey · printable board illustration
   Pink winding road · pine trees · cute houses · lake · lavender
   12 task bubbles + 11 ★ event stars distributed at equal
   arc-length intervals along the road (stars sit between bubbles).
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

/* ---------- Bubble (pure-SVG text, prints reliably) ---------- */

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

const Bubble: React.FC<{ x: number; y: number; r: number; text: string; bg?: string; size?: number }> = ({x, y, r, text, bg = '#e83e8c', size: initialSize = 11,
}) => {
  /* Auto-shrink the font until every wrapped line fits the bubble width.
     Press Start 2P-like sans approx: char width ≈ size * 0.55. */
  let size = initialSize
  let lines: string[] = []
  for (let attempt = 0; attempt < 8; attempt++) {
    const maxChars = Math.max(6, Math.floor((r * 1.7) / (size * 0.55)))
    lines = wrapText(text, maxChars)
    const longest = lines.reduce((m, l) => Math.max(m, l.length), 0)
    if (longest <= maxChars) break
    if (size <= 8) break
    size -= 1
  }
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

const Badge: React.FC<{ x: number; y: number; r: number; label: string; icon?: ReactNode }> = ({ x, y, r, label, icon }) => {
  /* Press Start 2P is ~square; total label width ≈ chars * (fontSize + letterSpacing).
     Fit inside ~85% of badge diameter. */
  const avail = r * 1.7
  const maxByLen = avail / Math.max(1, label.length) - 1
  const fontSize = Math.max(6, Math.min(r * 0.32, maxByLen))
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#e83e8c" stroke="#a8285f" strokeWidth="3" />
      <circle cx={x - r * 0.4} cy={y - r * 0.5} r={r * 0.2} fill="rgba(255,255,255,0.4)" />
      {icon && <g transform={`translate(${x},${y - r * 0.45})`}>{icon}</g>}
      <text
        x={x} y={y + (icon ? r * 0.28 : 4)} textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Press Start 2P', monospace"
        fontSize={fontSize}
        fill="#fff"
        style={{ letterSpacing: 1 }}
      >
        {label}
      </text>
    </g>
  )
}

/* ---------- Road waypoints ----------
   The road is one clean serpentine from START → GRADUATION.
   Bubbles are spread at equal arc-length on the full path.
   BOSS sits exactly in the middle (replaces the central star). */

type Pt = { x: number; y: number }

const WAYPOINTS: Pt[] = [
  { x: 90,  y: 1060 }, // START (bottom-left)
  { x: 240, y: 1020 },
  { x: 420, y: 1000 },
  { x: 600, y: 970  },
  { x: 700, y: 870  },
  { x: 560, y: 790  },
  { x: 370, y: 770  },
  { x: 180, y: 720  },
  { x: 160, y: 600  },
  { x: 330, y: 560  },
  { x: 520, y: 540  },
  { x: 680, y: 470  },
  { x: 590, y: 360  },
  { x: 400, y: 330  },
  { x: 200, y: 290  },
  { x: 180, y: 180  },
  { x: 370, y: 150  },
  { x: 560, y: 130  },
  { x: 720, y: 110  }, // GRADUATION (top-right)
]

/* ---------- Tasks ----------
   PRE_TASKS go BEFORE the BOSS checkpoint, in narrative order.
   POST_TASKS sit BETWEEN the BOSS and the GRADUATION (the user wants
   "Name 3 academic subjects" and "Explain the best way to REVISE"
   after the boss). */

const PRE_TASKS: { text: string; size?: number }[] = [
  { text: 'Explain the difference between a nursery and a kindergarten.' },
  { text: 'What are the advantages of attending a state school compared to a private school?' },
  { text: 'Give two reasons why a parent might send their child to a boarding school.' },
  { text: 'Describe the typical daily routine of primary school pupils.' },
  { text: 'What are the main responsibilities of a head teacher?' },
  { text: 'Explain how a school year divided into terms differs from one divided into semesters.', size: 10 },
  { text: 'At what age do children in the UK usually start nursery, and is it compulsory?' },
  { text: 'Use "be allowed to" to describe a school rule.' },
  { text: 'In the US, what are the 3 levels of the school system before university?' },
  { text: 'Explain the difference between taking an exam and passing an exam.' },
]
const POST_TASKS: { text: string; size?: number }[] = [
  { text: 'Name 3 academic subjects where you might need to earn a degree.' },
  { text: 'Explain the best way to REVISE for an exam.' },
]

/* ---------- Geometry helpers ---------- */

/** Sample a point at the given fraction (0..1) of the polyline arc length. */
function pointOnPolyline(pts: Pt[], frac: number): Pt {
  if (pts.length === 1) return pts[0]
  const segs: number[] = []
  let total = 0
  for (let i = 0; i < pts.length - 1; i++) {
    const len = Math.hypot(pts[i + 1].x - pts[i].x, pts[i + 1].y - pts[i].y)
    segs.push(len)
    total += len
  }
  const target = Math.max(0, Math.min(1, frac)) * total
  let acc = 0
  for (let i = 0; i < segs.length; i++) {
    if (acc + segs[i] >= target) {
      const t = segs[i] === 0 ? 0 : (target - acc) / segs[i]
      return {
        x: pts[i].x + (pts[i + 1].x - pts[i].x) * t,
        y: pts[i].y + (pts[i + 1].y - pts[i].y) * t,
      }
    }
    acc += segs[i]
  }
  return pts[pts.length - 1]
}

/** Polyline path through a list of points (used for the actual road draw,
 *  AND for sampling marker positions — they share the exact same geometry). */
function buildPolylinePath(pts: Pt[]): string {
  if (pts.length === 0) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) d += ` L ${pts[i].x} ${pts[i].y}`
  return d
}

/** Densify a control-point list into a smooth, corner-free polyline by
 *  replaying SVG's Q/T algorithm: each Q segment goes from the previous
 *  midpoint to the next midpoint, using the original waypoint as control.
 *  The result LOOKS like a smooth bezier curve when stroked, but it's a
 *  plain polyline so we can sample positions on it exactly. */
function smoothPolyline(pts: Pt[], samplesPerSeg = 24): Pt[] {
  if (pts.length < 2) return pts.slice()
  const mid = (a: Pt, b: Pt): Pt => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })
  const quad = (p0: Pt, p1: Pt, p2: Pt, t: number): Pt => {
    const u = 1 - t
    return {
      x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
      y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
    }
  }
  const out: Pt[] = [pts[0]]
  let prevEnd: Pt = pts[0]
  for (let i = 1; i < pts.length - 1; i++) {
    const start = i === 1 ? pts[0] : prevEnd
    const ctrl  = pts[i]
    const end   = mid(pts[i], pts[i + 1])
    for (let s = 1; s <= samplesPerSeg; s++) {
      out.push(quad(start, ctrl, end, s / samplesPerSeg))
    }
    prevEnd = end
  }
  /* Final T segment of the SVG path is degenerate (straight line from the
     last midpoint to the last waypoint). Sample it as a line. */
  const last = pts[pts.length - 1]
  for (let s = 1; s <= samplesPerSeg; s++) {
    const t = s / samplesPerSeg
    out.push({
      x: prevEnd.x + (last.x - prevEnd.x) * t,
      y: prevEnd.y + (last.y - prevEnd.y) * t,
    })
  }
  return out
}

/* ---------- the printable board itself ---------- */

export const AcademicBoardSvg: React.FC = () => {
  /* The smoothed road & all marker positions live on the SAME dense polyline
     — so bubbles & stars always sit exactly on the asphalt, no matter how
     curvy the road gets. */
  const ROAD = smoothPolyline(WAYPOINTS, 28)
  const roadD = buildPolylinePath(ROAD)

  /* Slot layout along the road — every slot is one equal arc-length step:
       0          → START
       1..10      → PRE_TASKS  (10 bubbles)
       11         → BOSS
       12..13     → POST_TASKS (2 bubbles)
       14 (= 1.0) → GRADUATION
     ⇒ 15 markers, 14 intervals.
     A star sits EXACTLY in the middle of EVERY interval — so the road
     reads as a perfectly uniform alternation:
       START ★ t1 ★ t2 ★ … ★ t10 ★ BOSS ★ t11 ★ t12 ★ GRADUATION       */
  const PRE = PRE_TASKS.length     // 10
  const POST = POST_TASKS.length   // 2
  const SLOTS = PRE + POST + 2     // 14 — interval count

  const fracOf = (slot: number) => slot / SLOTS

  const preBubbles = PRE_TASKS.map((t, i) => {
    const p = pointOnPolyline(ROAD, fracOf(i + 1))
    return { ...p, ...t }
  })
  const postBubbles = POST_TASKS.map((t, i) => {
    const p = pointOnPolyline(ROAD, fracOf(PRE + 2 + i)) // 12, 13
    return { ...p, ...t }
  })
  const bubbles = [...preBubbles, ...postBubbles]

  /* One star centered in every interval between consecutive markers. */
  const stars = Array.from({ length: SLOTS }, (_, i) =>
    pointOnPolyline(ROAD, (i + 0.5) / SLOTS)
  )

  const bossP  = pointOnPolyline(ROAD, fracOf(PRE + 1))  // 11/14
  const gradP  = pointOnPolyline(ROAD, fracOf(SLOTS))    // 14/14 = end
  const startP = ROAD[0]

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
    { x: 760, y: 240 }, { x: 740, y: 1020 }, { x: 60, y: 1080 }, { x: 230, y: 1080 },
    { x: 60,  y: 250 }, { x: 50,  y: 700  },
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
      <ellipse cx="700" cy="220" rx="120" ry="50" fill="#e6c2dc" opacity="0.45" />
      <ellipse cx="120" cy="1030" rx="200" ry="55" fill="#e6c2dc" opacity="0.45" />
      <ellipse cx="500" cy="1090" rx="220" ry="40" fill="#c8aedc" opacity="0.45" />

      {/* lake (middle-left) */}
      <Lake x={300} y={870} rx={70} ry={28} />

      {/* houses cluster — moved away from the new top-right GRADUATION */}
      <House x={70}  y={70}  color="#7aa3d6" roof="#9bb6e0" />
      <House x={130} y={75}  color="#9d6cc7" roof="#b58edc" door="#5d275d" />
      <House x={70}  y={130} color="#7fc59f" roof="#a3dab6" />

      {/* graduation hut (next to the new GRADUATION badge, top-right) */}
      <House x={650} y={210} color="#b97a56" roof="#8a5a3a" door="#5d275d" />

      {/* trees */}
      {trees.map((t, i) => <Tree key={i} {...t} />)}
      {lavenders.map((l, i) => <Lavender key={`lv-${i}`} {...l} />)}

      {/* the pink road — outer dark stroke, inner pink, white dashed center */}
      <path d={roadD} fill="none" stroke="#a8285f" strokeWidth="46" strokeLinecap="round" strokeLinejoin="round" />
      <path d={roadD} fill="none" stroke="#e83e8c" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
      <path d={roadD} fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 12" strokeLinecap="round" />

      {/* stars first — bubbles render on top so any tiny overlap looks clean */}
      {stars.map((p, i) => <Star key={`st-${i}`} x={p.x} y={p.y} s={1.1} />)}

      {/* task bubbles — equal arc-length spacing along the road */}
      {bubbles.map((b, i) => (
        <Bubble key={`b-${i}`} x={b.x} y={b.y} r={54} text={b.text} size={b.size} />
      ))}

      {/* START / BOSS / GRADUATION badges */}
      <Badge x={startP.x} y={startP.y} r={56} label="START" />
      <Badge x={bossP.x}  y={bossP.y}  r={62} label="BOSS"       icon={<Crown x={0} y={0} />} />
      <Badge x={gradP.x}  y={gradP.y}  r={70} label="GRADUATION" icon={<Cap   x={0} y={0} />} />
    </svg>
  )
}

