import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useT } from '../i18n/I18n'

export interface Bubble {
  id: number
  x: number       // viewport %
  size: number    // px
  dur: number     // rise duration, seconds
  sway: number    // horizontal wobble, px
  swayDur: number // wobble duration, seconds
}

interface NoiseCtx {
  active: boolean
  demo: boolean
  level: number
  bubbles: Bubble[]
  sensitivity: number
  wide: boolean
  start: () => Promise<void>
  stop: () => void
  toggleDemo: () => void
  setSensitivity: (n: number) => void
  setWide: (w: boolean | ((p: boolean) => boolean)) => void
}

const Ctx = createContext<NoiseCtx | null>(null)

export function NoiseProvider({ children }: { children: ReactNode }) {
  const t = useT()
  const [active, setActive] = useState(false)
  const [demo, setDemo] = useState(false)
  const [level, setLevel] = useState(0)
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [sensitivity, setSensitivity] = useState(14)
  const [wide, setWide] = useState(false)

  const audioRef = useRef<{ ctx: AudioContext; analyser: AnalyserNode; data: Uint8Array; raf: number; stream: MediaStream } | null>(null)
  const sensRef = useRef(sensitivity)
  const idRef = useRef(0)
  useEffect(() => { sensRef.current = sensitivity }, [sensitivity])

  const stop = useCallback(() => {
    if (audioRef.current) {
      cancelAnimationFrame(audioRef.current.raf)
      audioRef.current.stream.getTracks().forEach(tr => tr.stop())
      audioRef.current.ctx.close()
      audioRef.current = null
    }
    setActive(false)
    setLevel(0)
  }, [])

  const start = useCallback(async () => {
    if (audioRef.current) return
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new AudioContext()
      const src = ctx.createMediaStreamSource(stream)
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 1024
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
        const boosted = Math.pow(rms * sensRef.current, 0.85)
        const lvl = Math.min(1, boosted)
        setLevel(prev => lvl > prev ? prev * 0.3 + lvl * 0.7 : prev * 0.85 + lvl * 0.15)
        audioRef.current!.raf = requestAnimationFrame(tick)
      }
      audioRef.current = { ctx, analyser, data, raf: requestAnimationFrame(tick), stream }
      setActive(true)
      setDemo(false)
    } catch {
      alert(t('noise.error'))
    }
  }, [t])

  const toggleDemo = useCallback(() => {
    if (active) return
    setDemo(d => !d)
  }, [active])

  // Demo level oscillator
  useEffect(() => {
    if (!demo) return
    const id = setInterval(() => {
      setLevel(l => Math.max(0, Math.min(1, l + (Math.random() - 0.5) * 0.4)))
    }, 200)
    return () => clearInterval(id)
  }, [demo])

  // Spawn bubbles — appear once it gets noticeably loud, more & more as it grows.
  // Each bubble auto-removes itself after its CSS animation finishes.
  useEffect(() => {
    const id = setInterval(() => {
      const THRESHOLD = 0.2
      if (level <= THRESHOLD) return
      const intensity = (level - THRESHOLD) / (1 - THRESHOLD) // 0..1
      const count = Math.max(1, Math.round(intensity * 4) + 1)
      const fresh: Bubble[] = Array.from({ length: count }, () => {
        const dur = 7 + Math.random() * 6 - intensity * 2 // 5–13 s, faster when loud
        return {
          id: ++idRef.current,
          x: Math.random() * 96 + 2,
          size: 18 + Math.random() * 38,
          dur,
          sway: (Math.random() * 60 - 30),
          swayDur: 2.2 + Math.random() * 2.4,
        }
      })
      setBubbles(prev => [...prev, ...fresh].slice(-90))
      // Schedule removal after each animation finishes
      fresh.forEach(b => {
        setTimeout(() => {
          setBubbles(prev => prev.filter(x => x.id !== b.id))
        }, b.dur * 1000 + 200)
      })
    }, 260)
    return () => clearInterval(id)
  }, [level])

  // Tear down on unmount
  useEffect(() => () => stop(), [stop])

  const value: NoiseCtx = {
    active, demo, level, bubbles, sensitivity, wide,
    start, stop, toggleDemo, setSensitivity, setWide,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useNoise() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useNoise must be used inside NoiseProvider')
  return v
}

/* ============================================================
   Reusable visual stage (used both inline and in the overlay).
   The bubbles themselves live in a separate full-screen field
   (see <NoiseBubbleField/>) so they fly across the whole site.
   ============================================================ */
export function NoiseStage({ wide = false, onClose }: { wide?: boolean; onClose?: () => void }) {
  const t = useT()
  const { level } = useNoise()

  const status = level < 0.18 ? { text: t('noise.calm'), cls: '' }
                : level < 0.45 ? { text: t('noise.busy'), cls: 'warn' }
                : { text: t('noise.loud'), cls: 'crit' }

  return (
    <div className={`noise-stage ${wide ? 'wide' : ''}`}>
      <div className="noise-readout">
        {t('noise.label')}: <span className={`level ${status.cls}`}>{status.text}</span> · {Math.round(level * 100)}%
      </div>
      {wide && onClose && (
        <button className="pix-btn ghost sm noise-dock-btn" onClick={onClose} title={t('noise.dock')}>✕</button>
      )}
      {/* Mini level meter inside the stage for visual feedback */}
      <div className="noise-meter">
        <div className="noise-meter-fill" style={{ height: `${Math.round(level * 100)}%` }} />
      </div>
      <div className="noise-floor" />
    </div>
  )
}

/* Global floating overlay — rendered by Layout on every page. */
export function NoiseOverlay() {
  const { wide, setWide, active, demo } = useNoise()
  if (!wide || (!active && !demo)) return null
  return <NoiseStage wide onClose={() => setWide(false)} />
}

/* Full-viewport bubble field — bubbles drift up across the entire site. */
export function NoiseBubbleField() {
  const { bubbles, active, demo } = useNoise()
  if (!active && !demo) return null
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map(b => (
        <div
          key={b.id}
          className="bubble-wrap"
          style={{
            left: `${b.x}%`,
            animationDuration: `${b.dur}s`,
          }}
        >
          <div
            className="bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              // CSS custom props for the sway keyframes
              ['--sway' as string]: `${b.sway}px`,
              animationDuration: `${b.swayDur}s`,
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  )
}










