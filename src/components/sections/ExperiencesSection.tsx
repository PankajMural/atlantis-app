import { useNavigate } from 'react-router-dom'
import type { Experience } from '../../types'
import IndividualCard from '../cards/IndividualCard'

interface ExperiencesSectionProps {
  experiences: Experience[]
}

export default function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-neutral-dark-darkest">Experiences</h3>
        <button
          onClick={() => navigate('/experiences')}
          className="text-sm font-semibold text-highlight-darkest"
        >
          See all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 snap-x">
        {experiences.map((exp) => (
          <div key={exp.id} className="snap-start">
            <IndividualCard
              experience={exp}
              onClick={() => navigate(`/experiences/${exp.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
