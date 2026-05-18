import type { ExperienceDetail } from '../../types'

interface ExperienceDetailsProps {
  details: ExperienceDetail[]
}

export default function ExperienceDetails({ details }: ExperienceDetailsProps) {
  return (
    <div className="rounded-lg border border-neutral-light-darkest overflow-hidden bg-neutral-light-lightest">
      {details.map((detail, i) => (
        <div
          key={i}
          className={[
            'flex items-center justify-between px-4 py-3',
            i < details.length - 1 ? 'border-b border-neutral-light-darkest' : '',
          ].join(' ')}
        >
          <span className="text-sm text-neutral-dark-light">{detail.label}</span>
          <span className="text-sm font-semibold text-neutral-dark-darkest">{detail.value}</span>
        </div>
      ))}
    </div>
  )
}
