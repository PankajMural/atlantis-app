import BottomSheet from '../ui/BottomSheet'
import type { ExperienceType } from '../../types'

interface SelectExperienceSheetProps {
  onSelect: (type: ExperienceType) => void
  onClose: () => void
}

const OPTIONS = [
  {
    type: 'resident' as ExperienceType,
    icon: '🏠',
    title: 'I am a UAE resident',
    subtitle: 'Resident offers, dining and local experiences.',
  },
  {
    type: 'tourist' as ExperienceType,
    icon: '✈️',
    title: 'I am a Tourist/Visitor',
    subtitle: 'Plan your stay and discover Atlantis experiences.',
  },
]

export default function SelectExperienceSheet({ onSelect, onClose }: SelectExperienceSheetProps) {
  return (
    <BottomSheet onClose={onClose}>
      <div className="px-6 pt-5 pb-10">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Select your experience</h2>
        <div className="flex flex-col gap-3">
          {OPTIONS.map((opt) => (
            <button
              key={opt.type}
              onClick={() => onSelect(opt.type)}
              className="flex items-center gap-4 w-full p-4 rounded-lg border border-border-default bg-bg-default active:bg-bg-hover transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-md bg-highlight-lightest flex items-center justify-center text-xl shrink-0">
                {opt.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-text-primary">{opt.title}</p>
                <p className="text-sm text-text-secondary mt-0.5 leading-normal">{opt.subtitle}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary shrink-0">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  )
}
