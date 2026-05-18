import { useNavigate } from 'react-router-dom'
import type { Offer } from '../../types'

interface OfferCardProps {
  offer: Offer
}

export default function OfferCard({ offer }: OfferCardProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => offer.venueId && navigate(`/dining/${offer.venueId}`)}
      className="flex w-content h-offer-card rounded-md overflow-hidden shadow-card bg-bg-default border border-border-default text-left shrink-0"
    >
      <div className="w-24 h-full bg-placeholder shrink-0">
        {offer.imageUrl && (
          <img src={offer.imageUrl} alt={offer.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          {offer.tag && (
            <span className="text-xs text-atlantis-blue-600 font-semibold uppercase tracking-wide">
              {offer.tag}
            </span>
          )}
          <p className="text-base font-semibold text-text-primary mt-1 leading-tight">{offer.title}</p>
        </div>
        <p className="text-sm text-text-secondary">{offer.subtitle}</p>
      </div>
    </button>
  )
}
