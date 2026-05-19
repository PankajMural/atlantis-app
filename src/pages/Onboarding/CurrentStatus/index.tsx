import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../../../components/ui/PageTransition'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'
import ProgressDots from '../../../components/ui/ProgressDots'

// ─── SVG arc geometry ───────────────────────────────────────────────────────
// ViewBox: 0 0 300 300   Center: (150,150)   Radius: 110
// SVG angle convention: clockwise from 3 o'clock
//   x = 150 + 110·cos(θ)   y = 150 + 110·sin(θ)
//
// Tier positions (SVG angle → on-screen location):
//   Blue   135° → bottom-left  → (72, 228)
//   Silver 225° → top-left     → (72, 72)
//   Gold   315° → top-right    → (228, 72)
//   Black   45° → bottom-right → (228, 228)
//
// Active arc: 25° clockwise from Blue (SVG 135° → 160°)
//   Start (72,228) End (47,188)  →  M 72 228 A 110 110 0 0 1 47 188
// ────────────────────────────────────────────────────────────────────────────

const TARGET_SPEND = 924

export default function CurrentStatusScreen() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let id: number
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1000, 1)
      const ease = 1 - Math.pow(1 - t, 3)       // easeOutCubic
      setCount(Math.round(TARGET_SPEND * ease))
      if (t < 1) { id = requestAnimationFrame(tick) }
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-lightest">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col">
        {/* Back arrow */}
        <div className="flex items-center px-4 h-12 shrink-0">
          <button
            onClick={() => navigate(-1)}
            className="p-1 text-neutral-dark-darkest"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 pb-4">
          <p className="font-ui text-xs font-semibold tracking-[0.14em] uppercase text-highlight-darkest mb-4">
            Step 03 of 03
          </p>

          <h1 className="font-headline text-3xl text-neutral-dark-darkest leading-tight mb-2">
            Your membership status
          </h1>

          <p className="text-base text-neutral-dark-light mb-2">
            This is the main copy text.
          </p>

          {/* ── Tier wheel ──────────────────────────────────────────────────── */}
          <div className="relative mx-auto" style={{ width: 280, height: 280 }}>
            <svg viewBox="0 0 300 300" className="w-full h-full">

              {/* Track — full circle */}
              <circle
                cx="150" cy="150" r="110"
                stroke="#E5E7EB" strokeWidth="12" fill="none"
              />

              {/* Active arc — 25° clockwise from Blue */}
              <path
                d="M 72 228 A 110 110 0 0 1 47 188"
                stroke="#3370AB"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
              />

              {/* Tier dots */}
              <circle cx="72"  cy="228" r="6" fill="#3370AB" />
              <circle cx="72"  cy="72"  r="6" fill="#8F9098" />
              <circle cx="228" cy="72"  r="6" fill="#B8860B" />
              <circle cx="228" cy="228" r="6" fill="#1a1a1a" />

              {/* Tier labels */}
              <text x="72"  y="249" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" fill="#3370AB" textAnchor="middle">Blue</text>
              <text x="72"  y="57"  fontSize="10" fontFamily="Inter,system-ui,sans-serif" fill="#8F9098" textAnchor="middle">Silver</text>
              <text x="228" y="57"  fontSize="10" fontFamily="Inter,system-ui,sans-serif" fill="#B8860B" textAnchor="middle">Gold</text>
              <text x="228" y="249" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fill="#1a1a1a" textAnchor="middle">Black</text>

            </svg>

            {/* Center content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-headline text-highlight-darkest leading-none" style={{ fontSize: 28 }}>
                Blue
              </span>
              <span className="font-ui uppercase tracking-[0.15em] text-neutral-dark-light mt-1" style={{ fontSize: 11 }}>
                Member
              </span>
              <div className="mt-3 text-center">
                <p className="font-ui text-neutral-dark-light" style={{ fontSize: 11 }}>Total Spent</p>
                <p className="font-ui text-lg font-semibold text-highlight-darkest">
                  AED {count}
                </p>
              </div>
            </div>
          </div>
          {/* ── end tier wheel ─────────────────────────────────────────────── */}

          {/* Spend-to-next */}
          <div className="mt-1 text-center">
            <p className="text-base">
              <span className="font-semibold text-highlight-darkest">AED 8,853</span>
              <span className="text-neutral-dark-light"> to unlock Silver</span>
            </p>
            <button className="mt-1 font-ui text-sm text-highlight-darkest underline underline-offset-2">
              View tier benefits
            </button>
          </div>

          <div className="flex-1" />
        </div>

        {/* Footer */}
        <div className="shrink-0 px-6 pt-4 pb-8 flex flex-col gap-5">
          <ProgressDots total={3} active={2} />
          <Button
            variant="primary"
            size="full"
            className="!h-btn-lg"
            onClick={() => navigate('/')}
          >
            Get Started
          </Button>
        </div>
      </PageTransition>
    </div>
  )
}
