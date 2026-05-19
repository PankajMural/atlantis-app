import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '../../../components/ui/PageTransition'
import StatusBar from '../../../components/layout/StatusBar'
import PageHeading from '../../../components/layout/PageHeading'
import Button from '../../../components/ui/Button'
import TextField from '../../../components/ui/TextField'
import TryAnotherWaySheet from '../../../components/sections/TryAnotherWaySheet'

const CORRECT_PASSWORD = 'Emmarichardson123'

export default function PasswordLoginScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const identifier = (location.state as { identifier?: string })?.identifier
    ?? 'emma.richardson@hotmail.com'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [trySheetOpen, setTrySheetOpen] = useState(false)

  const handleSignIn = () => {
    if (password !== CORRECT_PASSWORD) {
      setError('Incorrect Password, Please try again.')
      return
    }
    navigate('/onboarding/step-1')
  }

  const handleTryAnotherWay = (method: 'email-otp' | 'phone-otp' | 'password') => {
    if (method === 'email-otp') navigate('/auth/otp?via=email', { state: { identifier } })
    else if (method === 'phone-otp') navigate('/auth/otp?via=phone', { state: { identifier } })
  }

  const maskedEmail = identifier.includes('@')
    ? `${identifier[0]}*****${identifier.slice(-Math.min(10, identifier.length - 2))}`
    : 'e*****@email.com'

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col">
        <PageHeading title="" />

        <div className="flex-1 flex flex-col px-6 pt-2">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">
            Login with your password
          </h2>

          <div className="flex flex-col gap-4">
            <TextField
              label="Email or Mobile Number"
              value={identifier}
              readOnly
              onChange={() => {}}
            />
            <TextField
              label="Password"
              placeholder="Enter your password"
              type="password"
              showPasswordToggle
              value={password}
              error={error}
              onChange={e => { setPassword(e.target.value); setError('') }}
              autoFocus
            />
          </div>

          <div className="flex-1" />

          <div className="flex flex-col gap-4 pb-8">
            <Button
              variant="primary"
              size="full"
              onClick={handleSignIn}
              disabled={!password}
            >
              Sign In
            </Button>
            <button
              onClick={() => setTrySheetOpen(true)}
              className="text-base font-semibold text-atlantis-blue-600 text-center"
            >
              Try another way
            </button>
          </div>
        </div>
      </PageTransition>

      <AnimatePresence>
        {trySheetOpen && (
          <TryAnotherWaySheet
            context="password"
            maskedEmail={maskedEmail}
            maskedPhone="+97 *** *** 567"
            onSelect={handleTryAnotherWay}
            onClose={() => setTrySheetOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
