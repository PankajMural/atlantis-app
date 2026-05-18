import { useNavigate } from 'react-router-dom'
import type { DiningVenue } from '../../types'
import IndividualCard from '../cards/IndividualCard'

interface DiningSectionProps {
  venues: DiningVenue[]
}

export default function DiningSection({ venues }: DiningSectionProps) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-primary">Dining</h3>
        <button
          onClick={() => navigate('/dining')}
          className="text-sm text-atlantis-blue-600"
        >
          See all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
        {venues.map((venue) => (
          <div key={venue.id} className="snap-start">
            <IndividualCard
              experience={{
                id: venue.id,
                title: venue.name,
                subtitle: venue.cuisine,
                description: venue.description,
                imageUrl: venue.imageUrl,
                type: 'dining',
              }}
              onClick={() => navigate(`/dining/${venue.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
