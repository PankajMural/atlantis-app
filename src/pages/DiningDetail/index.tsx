import { useParams } from 'react-router-dom'
import PageTransition from '../../components/ui/PageTransition'
import StatusBar from '../../components/layout/StatusBar'
import PageHeading from '../../components/layout/PageHeading'
import NavWithButton from '../../components/layout/NavWithButton'
import Badge from '../../components/sections/Badge'
import ExperienceDetails from '../../components/sections/ExperienceDetails'
import ExperienceCards from '../../components/sections/ExperienceCards'
import SignInBanner from '../../components/sections/SignInBanner'
import SpecialOfferBanner from '../../components/sections/SpecialOfferBanner'
import type { DiningVenue, Experience, ExperienceDetail } from '../../types'

const IS_LOGGED_IN = true

const MOCK_VENUES: Record<string, DiningVenue> = {
  '1': {
    id: '1',
    name: 'Ossiano',
    cuisine: 'European',
    location: 'Atlantis The Palm',
    description: 'Dine in an ethereal underwater world surrounded by the Ambassador Lagoon.',
    michelinStars: { count: 3 },
    timeOfDay: ['Dinner'],
    specialOffer: 'Special offer — free dessert with dinner this Saturday',
  },
  '2': {
    id: '2',
    name: 'Nobu',
    cuisine: 'Japanese',
    location: 'Atlantis The Palm',
    description: 'World-renowned Japanese cuisine by chef Nobu Matsuhisa.',
    timeOfDay: ['Lunch', 'Dinner'],
  },
}

const MOCK_EXPERIENCES: Experience[] = [
  { id: 'e1', title: 'Signature Tasting Menu', subtitle: '7 courses', description: "An immersive journey through Ossiano's finest seasonal ingredients.", type: 'dining' },
  { id: 'e2', title: 'Private Dining', subtitle: 'For 2–10 guests', description: 'Exclusive table submerged beneath the Ambassador Lagoon.', type: 'dining' },
]

const BADGE_ITEMS = [
  { icon: '🕐', label: 'Hours', value: '6pm – 11pm' },
  { icon: '📍', label: 'Location', value: 'Level B' },
  { icon: '💳', label: 'Dress code', value: 'Smart casual' },
]

const DETAILS: ExperienceDetail[] = [
  { label: 'Cuisine', value: 'European' },
  { label: 'Price range', value: 'AED 500 – 1200' },
  { label: 'Booking', value: 'Required' },
  { label: 'Phone', value: '+971 4 426 2626' },
]

export default function DiningDetail() {
  const { id } = useParams<{ id: string }>()
  const venue = MOCK_VENUES[id ?? '1'] ?? MOCK_VENUES['1']

  return (
    <div className="relative flex flex-col min-h-svh bg-neutral-light-lightest">
      {/* StatusBar — absolutely over hero, never animates */}
      <div className="absolute top-0 left-0 w-full z-10">
        <StatusBar />
      </div>

      <PageTransition className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="relative">
            {/* Hero image */}
            <div className="w-full h-64 bg-placeholder" />
            <div className="absolute top-status-bar left-0 w-full">
              <PageHeading title="" />
            </div>
          </div>

          <div className="px-4 pt-4 flex flex-col gap-4 pb-4">

            {/* Venue header */}
            <div>
              <p className="text-sm text-neutral-dark-light font-heading tracking-wide">{venue.cuisine}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-semibold text-neutral-dark-darkest">{venue.name}</span>
                {venue.michelinStars && (
                  <span className="text-sm">{'⭐'.repeat(venue.michelinStars.count)}</span>
                )}
              </div>
              <p className="text-base text-neutral-dark-light mt-1">{venue.location}</p>
            </div>

            {venue.specialOffer && <SpecialOfferBanner text={venue.specialOffer} />}

            <p className="text-base text-neutral-dark-darkest leading-relaxed">{venue.description}</p>

            {IS_LOGGED_IN ? (
              <Badge items={BADGE_ITEMS} />
            ) : (
              <SignInBanner
                heading="Sign in to unlock exclusive benefits"
                body="Members enjoy priority bookings, special rates, and personalised offers."
              />
            )}

            <ExperienceDetails details={DETAILS} />

            <ExperienceCards
              title={venue.name}
              subtitle="Curated dining moments and signature events."
              experiences={MOCK_EXPERIENCES}
            />
          </div>
        </div>
      </PageTransition>

      <NavWithButton
        primaryLabel="Reserve a table"
        onPrimary={() => alert('Booking flow')}
        secondaryLabel="Add to wishlist"
        onSecondary={() => alert('Added')}
      />
    </div>
  )
}
