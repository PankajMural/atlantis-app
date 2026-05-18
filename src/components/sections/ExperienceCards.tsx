import type { Experience } from '../../types'
import IndividualCard from '../cards/IndividualCard'

interface ExperienceCardsProps {
  title: string
  subtitle?: string
  experiences: Experience[]
  onCardClick?: (experience: Experience) => void
}

export default function ExperienceCards({ title, subtitle, experiences, onCardClick }: ExperienceCardsProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      {subtitle && <p className="text-sm text-text-secondary mt-1 mb-4">{subtitle}</p>}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
        {experiences.map((exp) => (
          <div key={exp.id} className="snap-start">
            <IndividualCard experience={exp} onClick={() => onCardClick?.(exp)} />
          </div>
        ))}
      </div>
    </div>
  )
}
