import { useState } from 'react'
import BottomSheet from '../ui/BottomSheet'
import type { Country } from '../../types'

const COUNTRIES: Country[] = [
  { name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪', code: 'AE' },
  { name: 'Saudi Arabia',         dial: '+966', flag: '🇸🇦', code: 'SA' },
  { name: 'United Kingdom',       dial: '+44',  flag: '🇬🇧', code: 'GB' },
  { name: 'United States',        dial: '+1',   flag: '🇺🇸', code: 'US' },
  { name: 'India',                dial: '+91',  flag: '🇮🇳', code: 'IN' },
  { name: 'France',               dial: '+33',  flag: '🇫🇷', code: 'FR' },
  { name: 'Germany',              dial: '+49',  flag: '🇩🇪', code: 'DE' },
  { name: 'Australia',            dial: '+61',  flag: '🇦🇺', code: 'AU' },
  { name: 'Canada',               dial: '+1',   flag: '🇨🇦', code: 'CA' },
  { name: 'Pakistan',             dial: '+92',  flag: '🇵🇰', code: 'PK' },
  { name: 'Egypt',                dial: '+20',  flag: '🇪🇬', code: 'EG' },
  { name: 'Jordan',               dial: '+962', flag: '🇯🇴', code: 'JO' },
  { name: 'China',                dial: '+86',  flag: '🇨🇳', code: 'CN' },
  { name: 'Japan',                dial: '+81',  flag: '🇯🇵', code: 'JP' },
  { name: 'Russia',               dial: '+7',   flag: '🇷🇺', code: 'RU' },
]

interface CountryPickerSheetProps {
  selected: Country
  onSelect: (country: Country) => void
  onClose: () => void
}

export default function CountryPickerSheet({ selected, onSelect, onClose }: CountryPickerSheetProps) {
  const [search, setSearch] = useState('')

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search)
  )

  return (
    <BottomSheet onClose={onClose}>
      <div className="flex flex-col" style={{ maxHeight: '80svh' }}>
        <div className="px-6 pt-4 pb-3 shrink-0">
          <h2 className="text-xl font-semibold text-text-primary mb-3">Select country</h2>
          <div className="flex items-center h-12 px-4 rounded-md border border-border-default focus-within:border-[1.5px] focus-within:border-highlight-darkest gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 outline-none bg-transparent text-base text-text-primary placeholder:text-text-tertiary"
              autoFocus
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8">
          {filtered.map(c => (
            <button
              key={c.code}
              onClick={() => { onSelect(c); onClose() }}
              className="flex items-center gap-3 w-full py-4 border-b border-border-default last:border-0 text-left active:bg-bg-hover"
            >
              <span className="text-2xl">{c.flag}</span>
              <span className="flex-1 text-base text-text-primary">{c.name}</span>
              <span className="text-base text-text-secondary">{c.dial}</span>
              {c.code === selected.code && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-highlight-darkest shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  )
}
