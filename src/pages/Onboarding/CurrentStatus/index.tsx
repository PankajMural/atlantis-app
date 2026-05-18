import { useNavigate } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'

export default function CurrentStatusScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />

      {/* Header accent */}
      <div className="h-28 bg-gradient-to-b from-highlight-lightest to-bg-default flex items-end px-6 pb-4 shrink-0">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-highlight-darkest">
          Loyalty Benefits
        </p>
      </div>

      <div className="flex-1 flex flex-col px-6 pb-8">
        <h1 className="text-2xl font-semibold text-text-primary mb-6">Your Current Status</h1>

        {/* Status card */}
        <div className="rounded-lg border border-border-default bg-bg-secondary p-5 mb-5 shadow-card">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-full bg-highlight-darkest flex items-center justify-center shrink-0">
              <span className="text-neutral-light-lightest font-semibold text-lg">G</span>
            </div>
            <div>
              <p className="text-base font-semibold text-text-primary">Gold Member</p>
              <p className="text-sm text-text-secondary">1,250 points</p>
            </div>
          </div>
          <div className="h-2 rounded-full bg-neutral-light-medium overflow-hidden">
            <div className="h-full w-3/5 rounded-full bg-highlight-darkest" />
          </div>
          <p className="text-xs text-text-secondary mt-2">750 points to Platinum</p>
        </div>

        <p className="text-base text-text-secondary leading-relaxed mb-8">
          Welcome to your new Atlantis membership experience. Enjoy exclusive benefits,
          priority access, and personalised rewards tailored to you.
        </p>

        <div className="flex-1" />

        <Button variant="primary" size="full" onClick={() => navigate('/')}>
          Get Started
        </Button>
      </div>
    </div>
  )
}
