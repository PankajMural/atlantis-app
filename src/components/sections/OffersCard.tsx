import { useNavigate } from 'react-router-dom'
import type { Offer } from '../../types'
import OfferCard from '../cards/OfferCard'

interface OffersCardProps {
  offers: Offer[]
}

export default function OffersCard({ offers }: OffersCardProps) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-primary">Offers</h3>
        <button
          onClick={() => navigate('/offers')}
          className="text-sm text-atlantis-blue-600"
        >
          See all
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  )
}
