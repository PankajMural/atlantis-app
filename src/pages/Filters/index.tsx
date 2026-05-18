import { useState } from 'react'
import IconButton from '../../components/ui/IconButton'
import TagToggle from '../../components/ui/TagToggle'
import CheckboxField from '../../components/ui/CheckboxField'
import Button from '../../components/ui/Button'
import type { FilterState } from '../../types'

const LOCATIONS   = ['The Palm', 'Dubai Marina']
const TIME_OF_DAY = ['Breakfast', 'Brunch', 'Lunch', 'Afternoon tea', 'Dinner', 'Late night', 'All day', 'Happy hour']
const EXPERIENCES = ['Fine dining', 'Casual', 'Family', 'Romantic', 'Business', 'Al fresco', 'Private dining', 'Buffet', 'Tasting menu', 'Live entertainment']
const CUISINES    = ['European', 'Japanese', 'Indian', 'British', 'Italian', 'Chinese', 'Arabic', 'American', 'Mediterranean', 'Thai', 'French', 'Spanish', 'Peruvian', 'Korean', 'Lebanese', 'Turkish']

interface FiltersDrawerProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
  onClose: () => void
}

export default function FiltersDrawer({ filters, onChange, onClose }: FiltersDrawerProps) {
  const [local, setLocal] = useState<FilterState>({ ...filters })

  const toggle = (key: keyof FilterState, value: string) => {
    setLocal((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }))
  }

  const totalApplied =
    local.location.length + local.timeOfDay.length + local.experience.length + local.cuisine.length

  const apply = () => { onChange(local); onClose() }

  const clear = () => {
    const empty: FilterState = { location: [], timeOfDay: [], experience: [], cuisine: [] }
    setLocal(empty)
    onChange(empty)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-neutral-light-lightest rounded-t-lg max-h-[90svh] flex flex-col w-mobile mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-light-darkest shrink-0">
          <div>
            <h2 className="text-xl font-semibold text-neutral-dark-darkest">Filters</h2>
            {totalApplied > 0 && (
              <p className="text-sm text-neutral-dark-light mt-0.5">
                {totalApplied} filter{totalApplied > 1 ? 's' : ''} applied
              </p>
            )}
          </div>
          <IconButton onClick={onClose} aria-label="Close filters">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </IconButton>
        </div>

        {/* Scrollable filter content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
          <FilterSection title="Location">
            <div className="flex gap-2 flex-wrap">
              {LOCATIONS.map((loc) => (
                <TagToggle
                  key={loc}
                  label={loc}
                  selected={local.location.includes(loc)}
                  onChange={() => toggle('location', loc)}
                />
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Time of day">
            <div className="flex flex-col">
              {TIME_OF_DAY.map((t) => (
                <div key={t} className="mb-[38px] last:mb-0">
                  <CheckboxField
                    label={t}
                    checked={local.timeOfDay.includes(t)}
                    onChange={() => toggle('timeOfDay', t)}
                  />
                </div>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Experience">
            <div className="flex flex-col">
              {EXPERIENCES.map((e) => (
                <div key={e} className="mb-[38px] last:mb-0">
                  <CheckboxField
                    label={e}
                    checked={local.experience.includes(e)}
                    onChange={() => toggle('experience', e)}
                  />
                </div>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Cuisine">
            <div className="flex flex-col">
              {CUISINES.map((c) => (
                <div key={c} className="mb-[38px] last:mb-0">
                  <CheckboxField
                    label={c}
                    checked={local.cuisine.includes(c)}
                    onChange={() => toggle('cuisine', c)}
                  />
                </div>
              ))}
            </div>
          </FilterSection>
        </div>

        {/* Footer buttons */}
        <div className="px-6 py-4 border-t border-neutral-light-darkest flex flex-col gap-3 shrink-0">
          <Button variant="primary" size="full" onClick={apply}>
            Apply filters
          </Button>
          <Button variant="secondary" size="full" onClick={clear}>
            Clear all
          </Button>
        </div>
      </div>
    </div>
  )
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-neutral-dark-darkest">{title}</h3>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-dark-light">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {children}
    </div>
  )
}
