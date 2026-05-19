import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/ui/PageTransition'
import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'
import PageHeading from '../../components/layout/PageHeading'
import Button from '../../components/ui/Button'

const SuitcaseIcon = (
  <svg
    width="80" height="80" viewBox="0 0 80 80"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Body */}
    <rect x="12" y="28" width="56" height="40" rx="6" />
    {/* Handle */}
    <path d="M28 28V20a4 4 0 014-4h16a4 4 0 014 4v8" />
    {/* Center divider */}
    <line x1="40" y1="28" x2="40" y2="68" />
    {/* Latches */}
    <rect x="34" y="44" width="12" height="8" rx="2" />
    {/* Wheels */}
    <circle cx="22" cy="70" r="3" />
    <circle cx="58" cy="70" r="3" />
  </svg>
)

export default function MyStayPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-light">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col overflow-hidden">
        <PageHeading title="My Stay" showBack={false} />

        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16 text-center">
          <div className="text-neutral-light-darkest mb-6">
            {SuitcaseIcon}
          </div>
          <h2 className="font-headline text-[22px] text-neutral-dark-darkest leading-tight mb-2">
            No active bookings
          </h2>
          <p className="text-base text-neutral-dark-light leading-relaxed mb-8">
            When you book a stay, it will appear here
          </p>
          <Button variant="primary" size="full" onClick={() => navigate('/book')}>
            Book Now
          </Button>
        </div>
      </PageTransition>
      <NavigationBar />
    </div>
  )
}
