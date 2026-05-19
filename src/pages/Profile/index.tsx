import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/ui/PageTransition'
import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'
import type { ReactNode } from 'react'

// ─── Compact membership card ──────────────────────────────────────────────────

function CompactMembershipCard() {
  return (
    <div className="mx-4 mb-6">
      <div className="relative rounded-xl overflow-hidden px-5 py-4 bg-gradient-to-br from-highlight-darkest to-highlight-light">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-ui text-[11px] tracking-[0.18em] uppercase text-white/70 mb-0.5">
              Membership
            </p>
            <p className="font-headline text-white leading-none" style={{ fontSize: 28 }}>
              Blue
            </p>
          </div>
          <div className="text-right">
            <p className="font-ui text-[11px] text-white/70 mb-0.5">Total Spent</p>
            <p className="text-white font-semibold text-base">AED 1,146</p>
          </div>
        </div>
        <div className="h-1 rounded-full bg-white/30">
          <div className="h-full w-[13%] rounded-full bg-white" />
        </div>
        <p className="text-white/70 text-xs mt-1.5">
          AED 8,853 more to reach Silver
        </p>
      </div>
    </div>
  )
}

// ─── Menu components ──────────────────────────────────────────────────────────

interface MenuItemProps {
  label: string
  badge?: number
  destructive?: boolean
  showChevron?: boolean
  onClick?: () => void
  isLast?: boolean
}

function MenuItem({ label, badge, destructive, showChevron = true, onClick, isLast }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={[
        'flex items-center w-full h-12 px-4 bg-neutral-light-lightest text-left transition-colors active:bg-neutral-light-light',
        !isLast && 'border-b border-neutral-light-medium',
      ].filter(Boolean).join(' ')}
    >
      <span className={`flex-1 text-base ${destructive ? 'text-support-error-medium font-semibold' : 'text-neutral-dark-darkest'}`}>
        {label}
      </span>
      {badge !== undefined && (
        <span className="mr-3 min-w-[22px] h-[22px] px-1.5 rounded-full bg-highlight-darkest text-white text-xs font-semibold flex items-center justify-center">
          {badge}
        </span>
      )}
      {showChevron && !destructive && (
        <svg
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="text-neutral-dark-lightest"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  )
}

interface MenuSectionProps {
  label?: string
  children: ReactNode
}

function MenuSection({ label, children }: MenuSectionProps) {
  return (
    <div className="mb-6">
      {label && (
        <p className="px-4 pb-2 text-[12px] font-semibold tracking-[0.14em] uppercase text-neutral-dark-lightest">
          {label}
        </p>
      )}
      <div className="mx-4 rounded-xl overflow-hidden border border-neutral-light-medium">
        {children}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-light">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto pb-6">

          {/* ── Profile header ─────────────────────────────────────────────── */}
          <div className="flex flex-col items-center pt-8 pb-6 px-4">
            <div className="w-16 h-16 rounded-full bg-highlight-darkest flex items-center justify-center mb-3">
              <span className="font-headline text-white text-2xl leading-none">E</span>
            </div>
            <h1 className="font-headline text-xl text-neutral-dark-darkest leading-tight">
              Emma Richardson
            </h1>
            <p className="text-[13px] font-semibold text-highlight-darkest mt-0.5">
              Blue Member
            </p>
            <p className="text-[12px] text-neutral-dark-lightest mt-0.5">
              Member since 2023
            </p>
          </div>

          {/* ── Compact membership card ─────────────────────────────────────── */}
          <CompactMembershipCard />

          {/* ── Account section ─────────────────────────────────────────────── */}
          <MenuSection label="Account">
            <MenuItem label="Personal Details" />
            <MenuItem label="Payment Methods" />
            <MenuItem label="Preferences" isLast />
          </MenuSection>

          {/* ── Rewards section ─────────────────────────────────────────────── */}
          <MenuSection label="Rewards">
            <MenuItem label="My Vouchers" badge={4} />
            <MenuItem label="Transaction History" />
            <MenuItem label="Tier Benefits" isLast />
          </MenuSection>

          {/* ── Support section ─────────────────────────────────────────────── */}
          <MenuSection label="Support">
            <MenuItem label="Help & FAQ" />
            <MenuItem label="Contact Us" />
            <MenuItem label="Privacy Policy" isLast />
          </MenuSection>

          {/* ── Sign out ────────────────────────────────────────────────────── */}
          <MenuSection>
            <MenuItem
              label="Sign Out"
              destructive
              showChevron={false}
              isLast
              onClick={() => navigate('/splash')}
            />
          </MenuSection>

        </div>
      </PageTransition>
      <NavigationBar />
    </div>
  )
}
