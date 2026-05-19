import { useNavigate } from 'react-router-dom'
import PageTransition from '../../components/ui/PageTransition'
import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'
import PageHeading from '../../components/layout/PageHeading'
import Button from '../../components/ui/Button'

// ─── Booking category card ────────────────────────────────────────────────────

interface BookingCardProps {
  emoji: string
  title: string
  subtitle: string
  onClick?: () => void
}

function BookingCard({ emoji, title, subtitle, onClick }: BookingCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 w-full bg-neutral-light-lightest rounded-xl p-4 text-left active:bg-neutral-light-light transition-colors"
    >
      <span className="text-2xl leading-none shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold text-neutral-dark-darkest">{title}</p>
        <p className="text-sm text-neutral-dark-light mt-0.5">{subtitle}</p>
      </div>
      <svg
        width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="text-neutral-dark-lightest shrink-0"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  )
}

// ─── Featured offer banner ────────────────────────────────────────────────────

function FeaturedOfferBanner() {
  return (
    <div className="bg-neutral-light-lightest rounded-xl p-5">
      <p className="text-sm font-semibold text-highlight-darkest mb-1">Special Offer</p>
      <h3 className="font-headline text-xl text-neutral-dark-darkest leading-tight mb-1">
        Book 3 nights, get 20% off
      </h3>
      <p className="text-sm text-neutral-dark-light mb-4">
        Valid until 31 March 2027
      </p>
      <Button variant="primary" size="full">
        Book Now
      </Button>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const BOOKING_CATEGORIES = [
  { emoji: '🏨', title: 'Hotel & Villas',            subtitle: 'Browse available rooms and suites' },
  { emoji: '🍽️', title: 'Dining Reservations',       subtitle: 'Reserve a table at our restaurants' },
  { emoji: '🌊', title: 'Experiences & Activities',  subtitle: 'Book water park, spa and more' },
  { emoji: '🎉', title: 'Private Events',             subtitle: 'Celebrate special occasions' },
]

export default function BookPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-light">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col overflow-hidden">
        <PageHeading title="Book" showBack={false} />

        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pt-2 pb-8 flex flex-col gap-8">

            {/* Subtitle */}
            <p className="text-base text-neutral-dark-light -mt-2">
              Plan your next Atlantis experience
            </p>

            {/* Booking categories */}
            <div className="flex flex-col gap-3">
              {BOOKING_CATEGORIES.map((cat) => (
                <BookingCard
                  key={cat.title}
                  emoji={cat.emoji}
                  title={cat.title}
                  subtitle={cat.subtitle}
                  onClick={() => navigate('/dining')}
                />
              ))}
            </div>

            {/* Featured offer */}
            <FeaturedOfferBanner />

          </div>
        </div>
      </PageTransition>
      <NavigationBar />
    </div>
  )
}
