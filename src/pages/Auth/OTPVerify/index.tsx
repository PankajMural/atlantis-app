import { useState } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import PageHeading from '../../../components/layout/PageHeading'
import Button from '../../../components/ui/Button'
import OTPInput from '../../../components/ui/OTPInput'
import NumberPad from '../../../components/ui/NumberPad'
import TryAnotherWaySheet from '../../../components/sections/TryAnotherWaySheet'

const CORRECT_OTP = '123456'

export default function OTPVerifyScreen() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const via = (searchParams.get('via') ?? 'phone') as 'phone' | 'email'
  const identifier = (location.state as { identifier?: string })?.identifier
    ?? (via === 'phone' ? '+971 58 234 7891' : 'emma.richardson@hotmail.com')

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [trySheetOpen, setTrySheetOpen] = useState(false)

  const handleDigit = (d: string) => {
    if (otp.length < 6) {
      setOtp(p => p + d)
      setError('')
    }
  }

  const handleDelete = () => {
    setOtp(p => p.slice(0, -1))
    setError('')
  }

  const handleContinue = () => {
    if (otp !== CORRECT_OTP) {
      setError('Incorrect Code. Please try again.')
      setOtp('')
      return
    }
    navigate('/onboarding/new')
  }

  const handleTryAnotherWay = (method: 'email-otp' | 'phone-otp' | 'password') => {
    if (method === 'password') navigate('/auth/password', { state: { identifier } })
    else if (method === 'email-otp') navigate('/auth/otp?via=email', { state: { identifier } })
    else navigate('/auth/otp?via=phone', { state: { identifier } })
  }

  const subtitle = via === 'phone'
    ? `We have now sent a code via WhatsApp to ${identifier}`
    : `We have now sent a code via email to ${identifier}`

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />
      <PageHeading title="" />

      <div className="flex-1 flex flex-col px-6 pt-2">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Let's confirm it's you
        </h2>
        <p className="text-base text-text-secondary mb-8 leading-normal">{subtitle}</p>

        <OTPInput value={otp} error={!!error} />

        {error && (
          <p className="text-sm text-error mt-3">{error}</p>
        )}

        <button className="mt-5 text-sm text-atlantis-blue-600 text-left">
          Didn't get it? Resend a new code
        </button>

        <div className="flex-1" />

        <div className="flex flex-col gap-4 pb-4">
          <Button
            variant="primary"
            size="full"
            onClick={handleContinue}
            disabled={otp.length < 6}
          >
            Continue
          </Button>
          <button
            onClick={() => setTrySheetOpen(true)}
            className="text-base font-semibold text-atlantis-blue-600 text-center"
          >
            Try another way
          </button>
        </div>
      </div>

      <NumberPad onDigit={handleDigit} onDelete={handleDelete} />

      {trySheetOpen && (
        <TryAnotherWaySheet
          context={via}
          onSelect={handleTryAnotherWay}
          onClose={() => setTrySheetOpen(false)}
        />
      )}
    </div>
  )
}
