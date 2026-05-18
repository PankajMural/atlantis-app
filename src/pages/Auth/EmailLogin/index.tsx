import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import PageHeading from '../../../components/layout/PageHeading'
import Button from '../../../components/ui/Button'
import TextField from '../../../components/ui/TextField'
import TryAnotherWaySheet from '../../../components/sections/TryAnotherWaySheet'

const VALID_EMAIL = 'emma.richardson@hotmail.com'

export default function EmailLoginScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const initial = (location.state as { identifier?: string })?.identifier ?? ''

  const [email, setEmail] = useState(initial)
  const [error, setError] = useState('')
  const [trySheetOpen, setTrySheetOpen] = useState(false)

  const handleSignIn = () => {
    if (!email.includes('@')) {
      setError('Incorrect Email, Please try again.')
      return
    }
    if (email.toLowerCase() !== VALID_EMAIL) {
      setError('Incorrect Email, Please try again.')
      return
    }
    navigate('/auth/otp?via=email', { state: { identifier: email } })
  }

  const handleTryAnotherWay = (method: 'email-otp' | 'phone-otp' | 'password') => {
    if (method === 'phone-otp') navigate('/auth/otp?via=phone', { state: { identifier: '+971 55 789 1610' } })
    else if (method === 'password') navigate('/auth/password', { state: { identifier: email } })
  }

  const maskedEmail = email.length > 4
    ? `${email[0]}*****${email.slice(-Math.min(10, email.length - 2))}`
    : 'e*****@email.com'

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />
      <PageHeading title="" />

      <div className="flex-1 flex flex-col px-6 pt-2">
        <h2 className="text-2xl font-semibold text-text-primary mb-1">Enter your email</h2>
        <p className="text-base text-text-secondary mb-8">We'll send you a sign-in code</p>

        <TextField
          type="email"
          placeholder="Your email address"
          value={email}
          error={error}
          onChange={e => { setEmail(e.target.value); setError('') }}
          autoComplete="email"
          autoFocus
        />

        <div className="flex-1" />

        <div className="flex flex-col gap-4 pb-8">
          <Button
            variant="primary"
            size="full"
            onClick={handleSignIn}
            disabled={!email.trim()}
          >
            Sign in
          </Button>
          <button
            onClick={() => setTrySheetOpen(true)}
            className="text-base font-semibold text-atlantis-blue-600 text-center"
          >
            Try another way
          </button>
        </div>
      </div>

      {trySheetOpen && (
        <TryAnotherWaySheet
          context="email"
          maskedEmail={maskedEmail}
          onSelect={handleTryAnotherWay}
          onClose={() => setTrySheetOpen(false)}
        />
      )}
    </div>
  )
}
