import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../../components/ui/PageTransition'
import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'

// ─── Membership Card ──────────────────────────────────────────────────────────

function MembershipCard() {
  return (
    <div className="mx-4 mb-5">
      <div className="relative rounded-sm overflow-hidden p-5 bg-gradient-to-br from-highlight-darkest to-highlight-light">
        <span
          className="font-headline absolute -right-3 top-1/2 -translate-y-1/2 leading-none select-none pointer-events-none text-white"
          style={{ fontSize: 130, opacity: 0.08 }}
        >
          A
        </span>
        <p className="font-ui text-[11px] tracking-[0.18em] uppercase text-white/70 mb-1">
          Membership
        </p>
        <p className="font-headline text-white leading-none mb-4" style={{ fontSize: 36 }}>
          Blue
        </p>
        <div className="h-1 rounded-full bg-white/30">
          <div className="h-full w-[13%] rounded-full bg-white" />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white text-[13px]">AED 1,146 Spent</span>
          <span className="text-white text-[13px]">Silver ›</span>
        </div>
        <p className="text-white/80 text-sm mt-2 leading-relaxed">
          Spend AED 8,853 before 31 March 2027 to reach Silver
        </p>
        <button className="mt-3 text-white underline underline-offset-2 text-[13px] text-left">
          Manage Membership
        </button>
      </div>
    </div>
  )
}

// ─── Quick Action row ─────────────────────────────────────────────────────────

interface QuickActionRowProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

function QuickActionRow({ icon, title, subtitle }: QuickActionRowProps) {
  return (
    <button className="flex items-center gap-4 w-full bg-neutral-light-lightest border border-neutral-light-darkest rounded-sm p-4 text-left active:bg-neutral-light-light transition-colors">
      <div className="w-10 h-10 rounded-sm bg-highlight-lightest flex items-center justify-center text-highlight-darkest shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-neutral-dark-darkest">{title}</p>
        <p className="text-sm text-neutral-dark-light mt-0.5">{subtitle}</p>
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-dark-lightest shrink-0">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────

interface SectionHeaderProps {
  title: string
  subtitle: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="px-4 mb-3">
      <h2 className="font-headline text-[18px] text-[#1a1a1a] mb-0.5">{title}</h2>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm text-neutral-dark-light">{subtitle}</p>
        <button className="text-sm text-highlight-darkest underline underline-offset-2 shrink-0">
          View all
        </button>
      </div>
    </div>
  )
}

// ─── Carousel card ────────────────────────────────────────────────────────────

interface HScrollCardProps {
  gradientFrom: string
  gradientTo: string
  title: string
  titleSuffix?: React.ReactNode
  lines: string[]
}

function HScrollCard({ gradientFrom, gradientTo, title, titleSuffix, lines }: HScrollCardProps) {
  return (
    <div
      className="shrink-0 overflow-hidden bg-neutral-light-lightest"
      style={{
        minWidth: 'calc(90% - 16px)',
        scrollSnapAlign: 'start',
        borderRadius: 4,
      }}
    >
      <div
        style={{
          aspectRatio: '1 / 1',
          width: '100%',
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div className="p-3">
        <div className="flex items-center gap-1 mb-0.5">
          <p className="text-sm font-semibold text-neutral-dark-darkest leading-tight truncate">{title}</p>
          {titleSuffix}
        </div>
        {lines.map((line, i) => (
          <p key={i} className="text-xs text-neutral-dark-light leading-snug">{line}</p>
        ))}
      </div>
    </div>
  )
}

// ─── Pagination dots ──────────────────────────────────────────────────────────

interface PaginationDotsProps {
  total: number
  active: number
  onDotClick: (i: number) => void
}

function PaginationDots({ total, active, onDotClick }: PaginationDotsProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-3">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onDotClick(i)}
          className="rounded-full"
          animate={{
            width:           i === active ? 20 : 6,
            height:          6,
            backgroundColor: i === active ? '#3370AB' : 'transparent',
            borderColor:     i === active ? '#3370AB' : '#C5C6CC',
          }}
          transition={{ duration: 0.3 }}
          style={{ border: '1.5px solid', flexShrink: 0 }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  )
}

// ─── Carousel wrapper ─────────────────────────────────────────────────────────

interface CarouselProps {
  count: number
  children: React.ReactNode
}

function Carousel({ count, children }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // cardWidth = 90% of container - 16px + gap 16px = 0.9 × W (clean cancellation)
    const cardStep = el.clientWidth * 0.9
    const index = Math.min(Math.round(el.scrollLeft / cardStep), count - 1)
    setActive(index)
  }, [count])

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollRef.current
    if (!el) return
    const cardStep = el.clientWidth * 0.9
    el.scrollTo({ left: i * cardStep, behavior: 'smooth' })
  }, [])

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        style={{
          paddingLeft: 16,
          scrollbarWidth: 'none',
          scrollSnapType: 'x mandatory',
          scrollPaddingLeft: 16,
        }}
      >
        {children}
        {/* Right-side breathing room */}
        <div style={{ minWidth: 16, flexShrink: 0 }} aria-hidden="true" />
      </div>
      <PaginationDots total={count} active={active} onDotClick={scrollToIndex} />
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const QRCodeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <rect x="2" y="2" width="7" height="7" rx="1" />
    <rect x="11" y="2" width="7" height="7" rx="1" />
    <rect x="2" y="11" width="7" height="7" rx="1" />
    <rect x="11" y="13" width="2" height="2" />
    <rect x="15" y="13" width="2" height="2" />
    <rect x="11" y="17" width="2" height="2" />
    <rect x="15" y="17" width="2" height="2" />
    <rect x="13" y="15" width="2" height="2" />
  </svg>
)

const VoucherIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M2 9.5V7a1 1 0 011-1h18a1 1 0 011 1v2.5a2.5 2.5 0 010 5V17a1 1 0 01-1 1H3a1 1 0 01-1-1v-2.5a2.5 2.5 0 010-5z" />
    <line x1="9" y1="6" x2="9" y2="18" strokeDasharray="1.5 2" />
  </svg>
)

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-light">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div className="px-4 pt-5 pb-4">
            <h1 className="font-headline text-2xl text-neutral-dark-darkest leading-tight">
              Welcome back, Emma
            </h1>
            <p className="text-base text-neutral-dark-light mt-1">
              Your Atlantis world, in reach.
            </p>
          </div>

          {/* ── Membership Card ─────────────────────────────────────────────── */}
          <MembershipCard />

          {/* ── Quick Actions ───────────────────────────────────────────────── */}
          <div className="px-4 mb-5">
            <h2 className="font-headline text-[18px] text-[#1a1a1a] mb-3">
              Quick Actions
            </h2>
            <div className="flex flex-col gap-3">
              <QuickActionRow
                icon={QRCodeIcon}
                title="QR Code"
                subtitle="For instant recognition"
              />
              <QuickActionRow
                icon={VoucherIcon}
                title="Vouchers"
                subtitle="4 available"
              />
            </div>
          </div>

          {/* ── Curated For You Banner ───────────────────────────────────────── */}
          <div className="mb-8">
            <h2 className="font-headline text-[18px] text-[#1a1a1a] px-4 mb-3">Curated for you</h2>
            <div className="mx-4">
              <div className="relative overflow-hidden" style={{ height: 180, borderRadius: 4 }}>
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, #0b1e36 0%, #1a3a6b 55%, #2a6ba0 100%)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <p className="font-ui text-[10px] font-semibold tracking-[0.22em] uppercase text-white/80 mb-1">
                    Atlantis Exclusives
                  </p>
                  <h3 className="font-headline text-white leading-tight mb-2" style={{ fontSize: 22 }}>
                    Double spend this weekend
                  </h3>
                  <button className="text-white underline underline-offset-2 text-[13px] text-left">
                    Learn more about double points
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── What's On ───────────────────────────────────────────────────── */}
          <div className="mb-8">
            <SectionHeader
              title="What's on"
              subtitle="Exclusive promotions and seasonal deals."
            />
            <Carousel count={3}>
              <HScrollCard
                gradientFrom="#0d6b6b"
                gradientTo="#1a558a"
                title="Aquaventure Waterpark"
                lines={['20% off for Blue members at Snappers']}
              />
              <HScrollCard
                gradientFrom="#7c4a1a"
                gradientTo="#c47c2a"
                title="Dubai"
                lines={['20% off weekend dining deals']}
              />
              <HScrollCard
                gradientFrom="#3a1a6b"
                gradientTo="#1a3a8a"
                title="The Lost Chambers"
                lines={['Complimentary entry for Silver+']}
              />
            </Carousel>
          </div>

          {/* ── Dine ────────────────────────────────────────────────────────── */}
          <div className="mb-8">
            <SectionHeader
              title="Dine"
              subtitle="The best dining experiences across the resort."
            />
            <Carousel count={3}>
              <HScrollCard
                gradientFrom="#1a1a2e"
                gradientTo="#2d3a6e"
                title="Nobu"
                titleSuffix={<span style={{ color: '#3370AB', fontSize: 12, letterSpacing: 2, marginLeft: 4 }}>***</span>}
                lines={['Atlantis The Palm', 'Japanese • 10am-10pm']}
              />
              <HScrollCard
                gradientFrom="#0d4a4a"
                gradientTo="#1a6b5a"
                title="Ossiano"
                lines={['20% off tasting menus', 'Michelin starred']}
              />
              <HScrollCard
                gradientFrom="#2a1a0d"
                gradientTo="#5a3a1a"
                title="Bread Street Kitchen"
                lines={['All day dining', 'British cuisine']}
              />
            </Carousel>
          </div>

          {/* ── Experiences ─────────────────────────────────────────────────── */}
          <div className="mb-8">
            <SectionHeader
              title="Experiences"
              subtitle="Discover the best experiences across the resort."
            />
            <Carousel count={3}>
              <HScrollCard
                gradientFrom="#1a6ba0"
                gradientTo="#5cb3e8"
                title="Dubai Balloon"
                lines={['20% off for Blue members at Snappers']}
              />
              <HScrollCard
                gradientFrom="#0d4a2a"
                gradientTo="#1a7a4a"
                title="Aquaventure"
                lines={['20% off seasonal passes']}
              />
              <HScrollCard
                gradientFrom="#4a1a0d"
                gradientTo="#8a3a1a"
                title="Private Beach"
                lines={['Exclusive member access']}
              />
            </Carousel>
          </div>

        </div>
      </PageTransition>
      <NavigationBar />
    </div>
  )
}
