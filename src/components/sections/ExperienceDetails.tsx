import type { ExperienceDetail } from '../../types'

interface ExperienceDetailsProps {
  details: ExperienceDetail[]
}

export default function ExperienceDetails({ details }: ExperienceDetailsProps) {
  return (
    <div className="rounded-md border border-border-default overflow-hidden bg-bg-default">
      {details.map((detail, i) => (
        <div
          key={i}
          className={[
            'flex items-center justify-between px-4 py-3',
            i < details.length - 1 ? 'border-b border-border-default' : '',
          ].join(' ')}
        >
          <span className="text-sm text-text-secondary">{detail.label}</span>
          <span className="text-sm font-semibold text-text-primary">{detail.value}</span>
        </div>
      ))}
    </div>
  )
}
