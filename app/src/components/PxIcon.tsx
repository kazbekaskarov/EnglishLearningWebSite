import type { CSSProperties } from 'react'

interface Props {
  size?: number
  color?: string
  className?: string
  style?: CSSProperties
}

const wrap = (children: React.ReactNode, { size = 20, className, style }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    className={className}
    style={{ display: 'block', imageRendering: 'pixelated', ...style }}
    aria-hidden="true"
  >
    {children}
  </svg>
)

/* Each icon is a 16×16 pixel sprite, hand-drawn. */

export const PxHeart = (p: Props) => wrap(
  <g fill={p.color ?? '#b13e53'}>
    <rect x="2" y="3" width="3" height="1" /><rect x="11" y="3" width="3" height="1" />
    <rect x="1" y="4" width="5" height="2" /><rect x="10" y="4" width="5" height="2" />
    <rect x="1" y="6" width="14" height="2" />
    <rect x="2" y="8" width="12" height="2" />
    <rect x="3" y="10" width="10" height="2" />
    <rect x="5" y="12" width="6" height="1" />
    <rect x="6" y="13" width="4" height="1" />
    <rect x="7" y="14" width="2" height="1" />
  </g>, p)

export const PxStar = (p: Props) => wrap(
  <g fill={p.color ?? '#ffcd75'}>
    <rect x="7" y="1" width="2" height="2" />
    <rect x="6" y="3" width="4" height="2" />
    <rect x="1" y="5" width="14" height="2" />
    <rect x="3" y="7" width="10" height="2" />
    <rect x="4" y="9" width="8" height="2" />
    <rect x="3" y="11" width="3" height="2" />
    <rect x="10" y="11" width="3" height="2" />
    <rect x="2" y="13" width="3" height="2" />
    <rect x="11" y="13" width="3" height="2" />
  </g>, p)

export const PxController = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#a7f070'}>
      <rect x="1" y="5" width="14" height="6" />
      <rect x="2" y="4" width="12" height="1" />
      <rect x="2" y="11" width="12" height="1" />
      <rect x="0" y="6" width="1" height="4" />
      <rect x="15" y="6" width="1" height="4" />
    </g>
    <g fill="#0f1020">
      <rect x="3" y="7" width="1" height="2" /><rect x="2" y="8" width="3" height="1" />
      <rect x="11" y="7" width="1" height="1" /><rect x="13" y="7" width="1" height="1" />
      <rect x="11" y="9" width="1" height="1" /><rect x="13" y="9" width="1" height="1" />
    </g>
  </>, p)

export const PxBook = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#41a6f6'}>
      <rect x="2" y="2" width="12" height="12" />
    </g>
    <g fill="#f4f0e6">
      <rect x="3" y="3" width="10" height="10" />
    </g>
    <g fill={p.color ?? '#41a6f6'}>
      <rect x="7" y="3" width="2" height="10" />
      <rect x="4" y="5" width="3" height="1" />
      <rect x="4" y="7" width="3" height="1" />
      <rect x="9" y="5" width="3" height="1" />
      <rect x="9" y="7" width="3" height="1" />
      <rect x="9" y="9" width="3" height="1" />
    </g>
  </>, p)

export const PxSpark = (p: Props) => wrap(
  <g fill={p.color ?? '#ffcd75'}>
    <rect x="7" y="0" width="2" height="3" />
    <rect x="7" y="13" width="2" height="3" />
    <rect x="0" y="7" width="3" height="2" />
    <rect x="13" y="7" width="3" height="2" />
    <rect x="6" y="6" width="4" height="4" />
    <rect x="3" y="3" width="2" height="2" />
    <rect x="11" y="3" width="2" height="2" />
    <rect x="3" y="11" width="2" height="2" />
    <rect x="11" y="11" width="2" height="2" />
  </g>, p)

export const PxClock = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#73eff7'}>
      <rect x="5" y="1" width="6" height="1" />
      <rect x="3" y="2" width="10" height="1" />
      <rect x="2" y="3" width="2" height="1" /><rect x="12" y="3" width="2" height="1" />
      <rect x="1" y="4" width="2" height="2" /><rect x="13" y="4" width="2" height="2" />
      <rect x="1" y="6" width="1" height="6" /><rect x="14" y="6" width="1" height="6" />
      <rect x="1" y="12" width="2" height="2" /><rect x="13" y="12" width="2" height="2" />
      <rect x="2" y="13" width="2" height="1" /><rect x="12" y="13" width="2" height="1" />
      <rect x="3" y="14" width="10" height="1" />
      <rect x="5" y="15" width="6" height="1" />
    </g>
    <g fill="#0f1020">
      <rect x="7" y="5" width="2" height="4" />
      <rect x="9" y="7" width="3" height="2" />
    </g>
  </>, p)

export const PxDice = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#f4f0e6'}>
      <rect x="2" y="2" width="12" height="12" />
    </g>
    <g fill="#0f1020">
      <rect x="2" y="2" width="12" height="1" /><rect x="2" y="13" width="12" height="1" />
      <rect x="2" y="2" width="1" height="12" /><rect x="13" y="2" width="1" height="12" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="10" y="10" width="2" height="2" />
    </g>
  </>, p)

export const PxPrinter = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#a7f070'}>
      <rect x="3" y="2" width="10" height="4" />
      <rect x="1" y="6" width="14" height="6" />
    </g>
    <g fill="#f4f0e6">
      <rect x="4" y="9" width="8" height="6" />
    </g>
    <g fill="#0f1020">
      <rect x="5" y="11" width="6" height="1" />
      <rect x="5" y="13" width="6" height="1" />
      <rect x="11" y="8" width="2" height="1" />
    </g>
  </>, p)

export const PxSpeaker = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#ef7d57'}>
      <rect x="2" y="6" width="2" height="4" />
      <rect x="4" y="5" width="2" height="6" />
      <rect x="6" y="3" width="2" height="10" />
      <rect x="8" y="2" width="2" height="12" />
    </g>
    <g fill={p.color ?? '#ef7d57'}>
      <rect x="11" y="5" width="1" height="1" /><rect x="13" y="4" width="1" height="1" />
      <rect x="12" y="7" width="1" height="2" /><rect x="14" y="6" width="1" height="4" />
      <rect x="11" y="10" width="1" height="1" /><rect x="13" y="11" width="1" height="1" />
    </g>
  </>, p)

export const PxUsers = (p: Props) => wrap(
  <g fill={p.color ?? '#f4b4c5'}>
    <rect x="3" y="2" width="3" height="3" />
    <rect x="10" y="2" width="3" height="3" />
    <rect x="2" y="5" width="5" height="1" />
    <rect x="9" y="5" width="5" height="1" />
    <rect x="1" y="6" width="6" height="5" />
    <rect x="9" y="6" width="6" height="5" />
    <rect x="2" y="11" width="4" height="3" />
    <rect x="10" y="11" width="4" height="3" />
  </g>, p)

export const PxArrow = (p: Props) => wrap(
  <g fill={p.color ?? '#ffcd75'}>
    <rect x="2" y="7" width="9" height="2" />
    <rect x="9" y="5" width="2" height="6" />
    <rect x="11" y="6" width="2" height="4" />
    <rect x="13" y="7" width="1" height="2" />
  </g>, p)

export const PxFlame = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#ef7d57'}>
      <rect x="7" y="1" width="2" height="2" />
      <rect x="6" y="3" width="4" height="2" />
      <rect x="5" y="5" width="6" height="2" />
      <rect x="4" y="7" width="8" height="4" />
      <rect x="3" y="11" width="10" height="3" />
      <rect x="5" y="14" width="6" height="1" />
    </g>
    <g fill="#ffcd75">
      <rect x="6" y="9" width="4" height="3" />
      <rect x="7" y="12" width="2" height="2" />
    </g>
  </>, p)

export const PxKey = (p: Props) => wrap(
  <>
    <g fill={p.color ?? '#ffcd75'}>
      <rect x="2" y="5" width="6" height="6" />
      <rect x="8" y="7" width="6" height="2" />
      <rect x="11" y="9" width="1" height="2" />
      <rect x="13" y="9" width="1" height="2" />
    </g>
    <g fill="#0f1020">
      <rect x="4" y="7" width="2" height="2" />
    </g>
  </>, p)

export const PxMenu = (p: Props) => wrap(
  <g fill={p.color ?? '#f4f0e6'}>
    <rect x="2" y="3" width="12" height="2" />
    <rect x="2" y="7" width="12" height="2" />
    <rect x="2" y="11" width="12" height="2" />
  </g>, p)

export const PxClose = (p: Props) => wrap(
  <g fill={p.color ?? '#f4f0e6'}>
    <rect x="3" y="3" width="2" height="2" /><rect x="11" y="3" width="2" height="2" />
    <rect x="5" y="5" width="2" height="2" /><rect x="9" y="5" width="2" height="2" />
    <rect x="7" y="7" width="2" height="2" />
    <rect x="5" y="9" width="2" height="2" /><rect x="9" y="9" width="2" height="2" />
    <rect x="3" y="11" width="2" height="2" /><rect x="11" y="11" width="2" height="2" />
  </g>, p)

