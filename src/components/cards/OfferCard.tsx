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
      className="flex w-content h-offer-card rounded-lg overflow-hidden shadow-card bg-neutral-light-lightest border border-neutral-light-darkest text-left shrink-0"
    >
      <div className="w-24 h-full bg-placeholder shrink-0">
        {offer.imageUrl && (
          <img src={offer.imageUrl} alt={offer.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          {offer.tag && (
            <span className="font-heading text-xs text-highlight-darkest font-semibold uppercase tracking-wide">
              {offer.tag}
            </span>
          )}
          <p className="text-base font-semibold text-neutral-dark-darkest mt-1 leading-tight">{offer.title}</p>
        </div>
        <p className="text-sm text-neutral-dark-light">{offer.subtitle}</p>
      </div>
    </button>
  )
}
