import type { Experience } from '../../types'

interface IndividualCardProps {
  experience: Experience
  onClick?: () => void
}

export default function IndividualCard({ experience, onClick }: IndividualCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-card-portrait shrink-0 rounded-lg overflow-hidden shadow-card bg-neutral-light-lightest text-left flex flex-col"
    >
      <div className="w-full h-64 bg-placeholder shrink-0">
        {experience.imageUrl && (
          <img src={experience.imageUrl} alt={experience.title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-base font-semibold text-neutral-dark-darkest leading-tight">{experience.title}</p>
        <p className="text-sm text-neutral-dark-light">{experience.subtitle}</p>
        <p className="text-sm text-neutral-dark-light mt-1 line-clamp-3">{experience.description}</p>
      </div>
    </button>
  )
}
