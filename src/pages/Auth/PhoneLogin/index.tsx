import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import PageHeading from '../../../components/layout/PageHeading'
import Button from '../../../components/ui/Button'
import NumberPad from '../../../components/ui/NumberPad'
import CountryPickerSheet from '../../../components/sections/CountryPickerSheet'
import type { Country } from '../../../types'

const UAE: Country = { name: 'United Arab Emirates', dial: '+971', flag: '🇦🇪', code: 'AE' }

function formatPhone(raw: string): string {
  if (raw.length <= 2) return raw
  if (raw.length <= 5) return `${raw.slice(0, 2)} ${raw.slice(2)}`
  return `${raw.slice(0, 2)} ${raw.slice(2, 5)} ${raw.slice(5, 10)}`
}

export default function PhoneLoginScreen() {
  const navigate = useNavigate()
  const [country, setCountry] = useState<Country>(UAE)
  const [phone, setPhone] = useState('')
  const [pickerOpen, setPickerOpen] = useState(false)

  const handleDigit = (d: string) => setPhone(p => p.length < 10 ? p + d : p)
  const handleDelete = () => setPhone(p => p.slice(0, -1))

  const handleSignIn = () => {
    navigate('/auth/otp?via=phone', {
      state: { identifier: `${country.dial} ${formatPhone(phone)}` },
    })
  }

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />
      <PageHeading title="" />

      <div className="flex-1 flex flex-col px-6 pt-2">
        <h2 className="text-2xl font-semibold text-text-primary mb-1">
          Enter your<br />phone number
        </h2>
        <p className="text-base text-text-secondary mb-8">We'll send you a verification code</p>

        {/* Phone display field */}
        <div className="flex items-center h-12 rounded-md border border-border-default overflow-hidden">
          <button
            onClick={() => setPickerOpen(true)}
            className="flex items-center gap-1.5 px-3 h-full border-r border-border-default shrink-0 active:bg-bg-hover transition-colors"
          >
            <span className="text-xl">{country.flag}</span>
            <span className="text-base text-text-primary">{country.dial}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div className="flex-1 px-4 h-full flex items-center">
            <span className={`text-base tracking-wide ${phone ? 'text-text-primary' : 'text-text-tertiary'}`}>
              {phone ? formatPhone(phone) : '— ——— ————'}
            </span>
          </div>
        </div>

        <div className="flex-1" />

        {phone.length >= 7 && (
          <div className="pb-4">
            <Button variant="primary" size="full" onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        )}
      </div>

      <NumberPad onDigit={handleDigit} onDelete={handleDelete} />

      {pickerOpen && (
        <CountryPickerSheet
          selected={country}
          onSelect={setCountry}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </div>
  )
}
