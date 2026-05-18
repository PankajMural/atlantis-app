import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'
import TextField from '../../../components/ui/TextField'

const isPhone = (val: string) => /^[+\d\s()-]+$/.test(val.trim()) && val.replace(/\D/g, '').length >= 5

export default function WelcomeScreen() {
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')

  const handleSignIn = () => {
    if (!identifier.trim()) return
    if (isPhone(identifier)) {
      navigate('/auth/phone', { state: { identifier } })
    } else {
      navigate('/auth/email', { state: { identifier } })
    }
  }

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />

      <div className="flex-1 flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
        {/* Brand header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 rounded-full bg-highlight-lightest flex items-center justify-center mb-5">
            <span className="font-heading text-highlight-darkest text-2xl">A</span>
          </div>
          <h1 className="text-2xl font-semibold text-text-primary leading-tight mb-2">
            Welcome to Atlantis
          </h1>
          <p className="text-base text-text-secondary leading-normal">
            Your gateway to exclusive rewards and experiences
          </p>
        </div>

        {/* Identifier input */}
        <TextField
          placeholder="Enter your email or mobile number"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          inputMode={isPhone(identifier) ? 'tel' : 'email'}
          autoComplete="off"
          autoFocus
        />

        <div className="mt-4 flex flex-col gap-3">
          <Button
            variant="primary"
            size="full"
            onClick={handleSignIn}
            disabled={!identifier.trim()}
          >
            Sign in
          </Button>

          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-border-default" />
            <span className="text-sm text-text-secondary">or</span>
            <div className="flex-1 h-px bg-border-default" />
          </div>

          <Button variant="secondary" size="full" onClick={() => navigate('/')}>
            Create account
          </Button>
        </div>

        <div className="flex flex-col items-center gap-5 mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-base font-semibold text-atlantis-blue-600"
          >
            Sign In with booking number
          </button>
          <button
            onClick={() => navigate('/')}
            className="text-base text-text-secondary underline underline-offset-2"
          >
            Continue as a guest
          </button>
        </div>
      </div>
    </div>
  )
}
