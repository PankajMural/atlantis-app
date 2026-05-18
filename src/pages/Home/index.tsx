import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'
import WelcomeUser from '../../components/sections/WelcomeUser'
import QuickActions from '../../components/sections/QuickActions'
import OffersCard from '../../components/sections/OffersCard'
import DiningSection from '../../components/sections/DiningSection'
import ExperiencesSection from '../../components/sections/ExperiencesSection'
import type { User, Offer, DiningVenue, Experience } from '../../types'

const MOCK_USER: User = {
  id: '1',
  name: 'Alex Johnson',
  firstName: 'Alex',
  isGuest: false,
}

const MOCK_OFFERS: Offer[] = [
  { id: '1', title: '20% off Nobu', subtitle: 'Valid until 31 May 2026', tag: 'Dining', venueId: '1' },
  { id: '2', title: 'Free breakfast', subtitle: 'Included with your stay', tag: 'Hotel', venueId: '2' },
  { id: '3', title: 'Spa package deal', subtitle: 'Save AED 200 on treatments', tag: 'Wellness', venueId: '3' },
]

const MOCK_VENUES: DiningVenue[] = [
  { id: '1', name: 'Ossiano', cuisine: 'European', location: 'Atlantis The Palm', description: 'Dine in an ethereal underwater world surrounded by the Ambassador Lagoon.' },
  { id: '2', name: 'Nobu', cuisine: 'Japanese', location: 'Atlantis The Palm', description: 'World-renowned Japanese cuisine with a signature Nobu twist.' },
]

const MOCK_EXPERIENCES: Experience[] = [
  { id: '1', title: 'Aquaventure Waterpark', subtitle: 'Full day access', description: "The Middle East's most iconic waterpark with over 105 rides and attractions.", type: 'experience' },
  { id: '2', title: 'The Lost Chambers Aquarium', subtitle: 'Self-guided tour', description: 'Explore 65,000 marine animals across 20 mysterious chambers.', type: 'experience' },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-lightest">
      <StatusBar />
      <div className="flex-1 overflow-y-auto">
        <WelcomeUser user={MOCK_USER} />
        <div className="px-4 mt-2">
          <QuickActions />
        </div>
        <div className="px-4 mt-6 flex flex-col gap-6 pb-6">
          <OffersCard offers={MOCK_OFFERS} />
          <DiningSection venues={MOCK_VENUES} />
          <ExperiencesSection experiences={MOCK_EXPERIENCES} />
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}
