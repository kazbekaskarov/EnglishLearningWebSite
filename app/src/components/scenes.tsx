import type { Game } from '../data/games'

/* Pixel art scenes — 64×40 grid (16:10).
   Each scene is hand-composed to evoke the game's topic. */

interface SceneProps {
  palette: Game['palette']
}

const Scene: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 40"
    shapeRendering="crispEdges"
    preserveAspectRatio="xMidYMid slice"
  >
    {children}
  </svg>
)

const Sky: React.FC<{ c: string; h?: number; cloud?: boolean }> = ({ c, h = 24, cloud = true }) => (
  <>
    <rect x="0" y="0" width="64" height={h} fill={c} />
    {cloud && (
      <g fill="#f4f0e6" opacity="0.85">
        <rect x="6" y="5" width="6" height="2" />
        <rect x="5" y="6" width="8" height="1" />
        <rect x="44" y="9" width="8" height="2" />
        <rect x="43" y="10" width="10" height="1" />
      </g>
    )}
    <g fill="#ffcd75" opacity="0.6">
      <rect x="2" y="3" width="1" height="1" />
      <rect x="20" y="4" width="1" height="1" />
      <rect x="58" y="3" width="1" height="1" />
    </g>
  </>
)

const Ground: React.FC<{ c: string; y?: number; h?: number }> = ({ c, y = 30, h = 10 }) => (
  <rect x="0" y={y} width="64" height={h} fill={c} />
)

export const KitchenScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={20} />
    <rect x="0" y="20" width="64" height="20" fill={palette.ground} />
    {/* Counter */}
    <rect x="4" y="22" width="56" height="3" fill="#5d275d" />
    <rect x="4" y="25" width="56" height="11" fill="#29274c" />
    {/* Pot */}
    <g>
      <rect x="10" y="18" width="14" height="6" fill="#0f1020" />
      <rect x="9" y="18" width="16" height="2" fill="#5e5871" />
      <rect x="13" y="14" width="2" height="4" fill="#73eff7" opacity="0.6" />
      <rect x="17" y="13" width="2" height="5" fill="#73eff7" opacity="0.5" />
      <rect x="20" y="14" width="2" height="4" fill="#73eff7" opacity="0.6" />
    </g>
    {/* Cutting board + knife */}
    <rect x="32" y="22" width="14" height="2" fill="#e7d2bb" />
    <rect x="34" y="20" width="3" height="2" fill={palette.accent} />
    <rect x="38" y="20" width="3" height="2" fill={palette.accent2} />
    <rect x="42" y="20" width="3" height="2" fill="#a7f070" />
    <rect x="48" y="18" width="1" height="6" fill="#f4f0e6" />
    <rect x="47" y="22" width="3" height="2" fill="#5e5871" />
    {/* Stars */}
    <rect x="50" y="4" width="1" height="1" fill="#fff" />
  </Scene>
)

export const GearScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={26} />
    <Ground c={palette.ground} y={26} h={14} />
    {/* Court lines */}
    <rect x="0" y="32" width="64" height="1" fill="#f4f0e6" opacity="0.5" />
    <rect x="32" y="26" width="1" height="14" fill="#f4f0e6" opacity="0.4" />
    {/* Player silhouette */}
    <g fill="#0f1020">
      <rect x="14" y="14" width="4" height="4" />
      <rect x="13" y="18" width="6" height="6" />
      <rect x="11" y="20" width="2" height="3" />
      <rect x="19" y="20" width="2" height="3" />
      <rect x="14" y="24" width="2" height="4" /><rect x="16" y="24" width="2" height="4" />
    </g>
    {/* Whistle */}
    <rect x="40" y="16" width="6" height="4" fill={palette.accent} />
    <rect x="46" y="17" width="2" height="2" fill={palette.accent} />
    <rect x="40" y="14" width="2" height="2" fill="#5e5871" />
    {/* Ball */}
    <rect x="48" y="28" width="6" height="6" fill="#f4f0e6" />
    <rect x="49" y="28" width="4" height="1" fill="#0f1020" />
    <rect x="49" y="33" width="4" height="1" fill="#0f1020" />
  </Scene>
)

export const CashScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    {/* Stars */}
    <g fill="#ffcd75">
      <rect x="6" y="6" width="1" height="1" /><rect x="20" y="3" width="1" height="1" />
      <rect x="42" y="8" width="1" height="1" /><rect x="58" y="5" width="1" height="1" />
    </g>
    {/* Banknotes flying */}
    {[
      [6, 14, '#a7f070'], [22, 8, '#73eff7'], [40, 12, '#ffcd75'],
      [12, 26, '#f4b4c5'], [34, 28, '#a7f070'], [48, 22, '#73eff7'],
    ].map(([x, y, c], i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <rect x="0" y="0" width="12" height="6" fill={c as string} />
        <rect x="0" y="0" width="12" height="1" fill="#0f1020" />
        <rect x="0" y="5" width="12" height="1" fill="#0f1020" />
        <rect x="0" y="0" width="1" height="6" fill="#0f1020" />
        <rect x="11" y="0" width="1" height="6" fill="#0f1020" />
        <rect x="5" y="2" width="2" height="2" fill="#0f1020" opacity="0.4" />
      </g>
    ))}
    <Ground c={palette.ground} y={36} h={4} />
  </Scene>
)

export const CinemaScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    {/* Screen */}
    <rect x="6" y="6" width="52" height="24" fill="#0f1020" />
    <rect x="8" y="8" width="48" height="20" fill={palette.accent2} />
    {/* Filmstrip top */}
    <g fill="#0f1020">
      {[10,16,22,28,34,40,46,52].map(x => <rect key={x} x={x} y="8" width="2" height="2" />)}
      {[10,16,22,28,34,40,46,52].map(x => <rect key={x} x={x} y="26" width="2" height="2" />)}
    </g>
    {/* Star on screen */}
    <g fill={palette.accent}>
      <rect x="30" y="14" width="4" height="4" />
      <rect x="28" y="16" width="8" height="2" />
      <rect x="29" y="13" width="2" height="1" /><rect x="33" y="13" width="2" height="1" />
      <rect x="29" y="18" width="2" height="2" /><rect x="33" y="18" width="2" height="2" />
    </g>
    {/* Seats */}
    <rect x="0" y="32" width="64" height="8" fill={palette.ground} />
    <g fill="#0f1020" opacity="0.6">
      <rect x="6" y="34" width="6" height="6" />
      <rect x="16" y="34" width="6" height="6" />
      <rect x="26" y="34" width="6" height="6" />
      <rect x="36" y="34" width="6" height="6" />
      <rect x="46" y="34" width="6" height="6" />
    </g>
  </Scene>
)

export const TowerScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={32} />
    <Ground c={palette.ground} y={32} />
    {/* Stack of cups */}
    {[
      [22, 26, palette.accent], [30, 26, palette.accent2], [38, 26, palette.accent],
      [26, 20, palette.accent2], [34, 20, palette.accent],
      [30, 14, palette.accent2],
    ].map(([x, y, c], i) => (
      <g key={i}>
        <rect x={x as number} y={y as number} width="8" height="6" fill={c as string} />
        <rect x={x as number} y={y as number} width="8" height="1" fill="#f4f0e6" />
        <rect x={(x as number) - 1} y={y as number} width="1" height="6" fill="#0f1020" />
        <rect x={(x as number) + 8} y={y as number} width="1" height="6" fill="#0f1020" />
      </g>
    ))}
    {/* Hand */}
    <g fill="#ffcd75">
      <rect x="6" y="20" width="6" height="6" />
      <rect x="6" y="18" width="2" height="2" /><rect x="8" y="16" width="2" height="2" />
      <rect x="10" y="14" width="2" height="2" /><rect x="12" y="16" width="2" height="2" />
    </g>
    <g fill="#0f1020" opacity="0.4">
      <rect x="8" y="22" width="2" height="2" />
    </g>
  </Scene>
)

export const AcademicScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={22} />
    <Ground c={palette.ground} y={22} h={18} />
    {/* Path tiles */}
    {[4,12,20,28,36,44,52].map((x, i) => (
      <g key={i}>
        <rect x={x} y={28} width="6" height="4" fill={i === 3 ? palette.accent : '#e7d2bb'} stroke="#0f1020" />
        <rect x={x} y={28} width="6" height="1" fill="#0f1020" />
        <rect x={x} y={31} width="6" height="1" fill="#0f1020" />
      </g>
    ))}
    {/* Building (school) */}
    <rect x="44" y="10" width="14" height="12" fill={palette.accent} />
    <rect x="44" y="8" width="14" height="2" fill={palette.accent2} />
    <rect x="49" y="14" width="4" height="4" fill="#0f1020" />
    <rect x="46" y="14" width="2" height="2" fill="#73eff7" />
    <rect x="54" y="14" width="2" height="2" fill="#73eff7" />
    {/* Flag */}
    <rect x="50" y="4" width="1" height="6" fill="#0f1020" />
    <rect x="51" y="4" width="4" height="3" fill="#b13e53" />
    {/* Player token */}
    <rect x="29" y="24" width="4" height="4" fill="#b13e53" />
    <rect x="30" y="22" width="2" height="2" fill="#ffcd75" />
  </Scene>
)

export const HouseScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={26} />
    <Ground c={palette.ground} y={32} h={8} />
    {/* House */}
    <rect x="14" y="16" width="36" height="16" fill={palette.accent} />
    <rect x="10" y="14" width="44" height="2" fill="#0f1020" />
    {/* Roof */}
    <g fill={palette.accent2}>
      <rect x="14" y="10" width="36" height="4" />
      <rect x="18" y="8" width="28" height="2" />
      <rect x="22" y="6" width="20" height="2" />
    </g>
    {/* Door */}
    <rect x="28" y="22" width="6" height="10" fill="#5d275d" />
    <rect x="32" y="26" width="1" height="1" fill="#ffcd75" />
    {/* Windows */}
    <rect x="18" y="20" width="6" height="6" fill="#73eff7" />
    <rect x="40" y="20" width="6" height="6" fill="#73eff7" />
    <rect x="21" y="20" width="0" height="6" />
    <rect x="20" y="20" width="2" height="6" fill="#0f1020" opacity="0.3" />
    <rect x="42" y="20" width="2" height="6" fill="#0f1020" opacity="0.3" />
    {/* Smoke */}
    <rect x="42" y="2" width="2" height="2" fill="#f4f0e6" opacity="0.5" />
    <rect x="44" y="0" width="2" height="2" fill="#f4f0e6" opacity="0.5" />
    {/* Sun */}
    <rect x="54" y="4" width="6" height="6" fill="#ffcd75" />
  </Scene>
)

export const WorkScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    <Ground c={palette.ground} y={28} h={12} />
    {/* Desk */}
    <rect x="8" y="22" width="48" height="2" fill="#5e5871" />
    <rect x="10" y="24" width="2" height="6" fill="#5e5871" />
    <rect x="52" y="24" width="2" height="6" fill="#5e5871" />
    {/* Cup in middle */}
    <g>
      <rect x="30" y="18" width="4" height="4" fill={palette.accent} />
      <rect x="30" y="17" width="4" height="1" fill="#f4f0e6" />
    </g>
    {/* Two players */}
    <g fill="#0f1020">
      <rect x="16" y="14" width="4" height="4" />
      <rect x="14" y="18" width="8" height="6" />
    </g>
    <rect x="17" y="15" width="2" height="2" fill="#ffcd75" />
    <g fill="#0f1020">
      <rect x="44" y="14" width="4" height="4" />
      <rect x="42" y="18" width="8" height="6" />
    </g>
    <rect x="45" y="15" width="2" height="2" fill="#ffcd75" />
    {/* Sparks */}
    <rect x="32" y="14" width="1" height="1" fill={palette.accent2} />
    <rect x="34" y="13" width="1" height="1" fill={palette.accent2} />
  </Scene>
)

export const CrimeScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    {/* Magnifying glass */}
    <g>
      <rect x="14" y="10" width="20" height="20" fill="none" stroke={palette.accent} strokeWidth="2" />
      <rect x="14" y="10" width="20" height="2" fill={palette.accent} />
      <rect x="14" y="28" width="20" height="2" fill={palette.accent} />
      <rect x="14" y="10" width="2" height="20" fill={palette.accent} />
      <rect x="32" y="10" width="2" height="20" fill={palette.accent} />
      <rect x="16" y="12" width="16" height="16" fill="#73eff7" opacity="0.2" />
      <rect x="34" y="30" width="2" height="2" fill={palette.accent} />
      <rect x="36" y="32" width="2" height="2" fill={palette.accent} />
      <rect x="38" y="34" width="3" height="3" fill={palette.accent} />
    </g>
    {/* Footprint */}
    <g fill={palette.accent2} opacity="0.8">
      <rect x="44" y="12" width="4" height="6" />
      <rect x="45" y="11" width="2" height="1" />
      <rect x="44" y="20" width="4" height="2" />
      <rect x="50" y="22" width="4" height="6" />
      <rect x="51" y="21" width="2" height="1" />
    </g>
    {/* Tape */}
    <g fill="#ffcd75">
      <rect x="0" y="6" width="64" height="2" transform="rotate(-8 32 7)" />
    </g>
  </Scene>
)

export const TravelScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={28} />
    <Ground c={palette.ground} y={28} />
    {/* Plane */}
    <g fill="#f4f0e6">
      <rect x="14" y="10" width="20" height="4" />
      <rect x="32" y="9" width="6" height="6" />
      <rect x="20" y="6" width="6" height="4" />
      <rect x="18" y="14" width="4" height="3" />
    </g>
    <rect x="34" y="10" width="2" height="2" fill="#73eff7" />
    <rect x="28" y="11" width="2" height="2" fill="#73eff7" />
    {/* Suitcase */}
    <rect x="42" y="22" width="14" height="10" fill={palette.accent} />
    <rect x="42" y="22" width="14" height="2" fill="#0f1020" />
    <rect x="46" y="20" width="6" height="2" fill="#0f1020" />
    <rect x="48" y="26" width="2" height="2" fill="#ffcd75" />
    {/* Cloud trail */}
    <g fill="#f4f0e6" opacity="0.6">
      <rect x="6" y="14" width="6" height="2" />
      <rect x="0" y="16" width="14" height="2" />
    </g>
  </Scene>
)

export const ShopScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={24} />
    <Ground c={palette.ground} y={28} h={12} />
    {/* Storefront */}
    <rect x="6" y="10" width="52" height="18" fill={palette.accent} />
    <rect x="6" y="8" width="52" height="2" fill="#0f1020" />
    {/* Awning stripes */}
    <g fill="#f4f0e6">
      <rect x="6" y="10" width="4" height="4" />
      <rect x="14" y="10" width="4" height="4" />
      <rect x="22" y="10" width="4" height="4" />
      <rect x="30" y="10" width="4" height="4" />
      <rect x="38" y="10" width="4" height="4" />
      <rect x="46" y="10" width="4" height="4" />
      <rect x="54" y="10" width="4" height="4" />
    </g>
    {/* Window items */}
    <rect x="10" y="18" width="10" height="8" fill="#73eff7" />
    <rect x="22" y="18" width="10" height="8" fill="#73eff7" />
    <rect x="34" y="18" width="10" height="8" fill="#73eff7" />
    <rect x="46" y="18" width="10" height="8" fill="#73eff7" />
    {/* Sale tag */}
    <g>
      <rect x="42" y="4" width="14" height="6" fill={palette.accent2} transform="rotate(-15 49 7)" />
    </g>
  </Scene>
)

export const TransportScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={22} />
    <rect x="0" y="22" width="64" height="6" fill="#5e5871" />
    <Ground c={palette.ground} y={28} h={12} />
    {/* Road dashes */}
    <g fill="#ffcd75">
      <rect x="4" y="25" width="6" height="2" />
      <rect x="14" y="25" width="6" height="2" />
      <rect x="24" y="25" width="6" height="2" />
      <rect x="34" y="25" width="6" height="2" />
      <rect x="44" y="25" width="6" height="2" />
      <rect x="54" y="25" width="6" height="2" />
    </g>
    {/* Car */}
    <g>
      <rect x="14" y="14" width="22" height="8" fill={palette.accent} />
      <rect x="18" y="10" width="14" height="4" fill={palette.accent} />
      <rect x="20" y="12" width="4" height="2" fill="#73eff7" />
      <rect x="26" y="12" width="4" height="2" fill="#73eff7" />
      <rect x="14" y="22" width="4" height="2" fill="#0f1020" />
      <rect x="32" y="22" width="4" height="2" fill="#0f1020" />
    </g>
    {/* Traffic light */}
    <rect x="50" y="6" width="6" height="14" fill="#0f1020" />
    <rect x="51" y="7" width="4" height="4" fill={palette.accent2} />
    <rect x="51" y="14" width="4" height="4" fill="#a7f070" />
    <rect x="52" y="20" width="2" height="6" fill="#0f1020" />
  </Scene>
)

export const SocialScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    {/* Phone */}
    <rect x="22" y="4" width="20" height="32" fill="#0f1020" />
    <rect x="24" y="8" width="16" height="24" fill={palette.ground} />
    {/* Tic-tac-toe grid */}
    <g fill="#0f1020">
      <rect x="29" y="10" width="1" height="20" />
      <rect x="34" y="10" width="1" height="20" />
      <rect x="25" y="16" width="14" height="1" />
      <rect x="25" y="22" width="14" height="1" />
    </g>
    {/* X and O */}
    <g fill={palette.accent}>
      <rect x="25" y="11" width="1" height="1" /><rect x="28" y="11" width="1" height="1" />
      <rect x="26" y="12" width="2" height="2" />
      <rect x="25" y="14" width="1" height="1" /><rect x="28" y="14" width="1" height="1" />
    </g>
    <g fill={palette.accent2}>
      <rect x="36" y="11" width="3" height="1" />
      <rect x="36" y="14" width="3" height="1" />
      <rect x="36" y="11" width="1" height="4" />
      <rect x="38" y="11" width="1" height="4" />
    </g>
    {/* Notification */}
    <rect x="44" y="6" width="6" height="4" fill={palette.accent} />
    <rect x="46" y="2" width="2" height="4" fill={palette.accent} />
  </Scene>
)

export const PyramidScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <Sky c={palette.sky} h={28} />
    <Ground c={palette.ground} y={28} h={12} />
    {/* Pyramid layers */}
    {[
      [4, 24, 56], [10, 18, 44], [16, 12, 32], [22, 6, 20], [28, 0, 8],
    ].map(([x, y, w], i) => (
      <rect key={i} x={x} y={y} width={w} height="6" fill={i % 2 ? palette.accent : palette.accent2} stroke="#0f1020" />
    ))}
    {/* Sun */}
    <rect x="50" y="2" width="6" height="6" fill="#ffcd75" />
    {/* Star top */}
    <rect x="30" y="-2" width="4" height="2" fill="#ffcd75" />
  </Scene>
)

export const StarScene: React.FC<SceneProps> = ({ palette }) => (
  <Scene>
    <rect x="0" y="0" width="64" height="40" fill={palette.sky} />
    {/* Spotlight */}
    <g fill={palette.accent2} opacity="0.18">
      <polygon points="32,4 8,40 56,40" />
    </g>
    {/* Big star */}
    <g fill={palette.accent}>
      <rect x="28" y="8" width="8" height="8" />
      <rect x="22" y="14" width="20" height="4" />
      <rect x="30" y="6" width="4" height="2" />
      <rect x="20" y="13" width="2" height="1" /><rect x="42" y="13" width="2" height="1" />
      <rect x="20" y="18" width="2" height="1" /><rect x="42" y="18" width="2" height="1" />
      <rect x="24" y="18" width="4" height="6" />
      <rect x="36" y="18" width="4" height="6" />
    </g>
    {/* Speech bubbles */}
    <rect x="4" y="6" width="8" height="6" fill="#f4f0e6" />
    <rect x="6" y="12" width="2" height="2" fill="#f4f0e6" />
    <rect x="52" y="20" width="10" height="6" fill="#f4f0e6" />
    <rect x="54" y="26" width="2" height="2" fill="#f4f0e6" />
    {/* Ground */}
    <Ground c={palette.ground} y={32} />
  </Scene>
)

export function getScene(g: Game) {
  switch (g.artId) {
    case 'kitchen': return <KitchenScene palette={g.palette} />
    case 'gear': return <GearScene palette={g.palette} />
    case 'cash': return <CashScene palette={g.palette} />
    case 'cinema': return <CinemaScene palette={g.palette} />
    case 'tower': return <TowerScene palette={g.palette} />
    case 'academic': return <AcademicScene palette={g.palette} />
    case 'house': return <HouseScene palette={g.palette} />
    case 'work': return <WorkScene palette={g.palette} />
    case 'crime': return <CrimeScene palette={g.palette} />
    case 'travel': return <TravelScene palette={g.palette} />
    case 'shop': return <ShopScene palette={g.palette} />
    case 'transport': return <TransportScene palette={g.palette} />
    case 'social': return <SocialScene palette={g.palette} />
    case 'pyramid': return <PyramidScene palette={g.palette} />
    case 'star': return <StarScene palette={g.palette} />
  }
}

