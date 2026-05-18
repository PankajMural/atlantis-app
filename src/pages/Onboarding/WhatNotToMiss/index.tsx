import { useNavigate } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'

const FEATURES = [
  {
    icon: '🏆',
    title: 'Enhanced Membership',
    subtitle: 'Refined tiers and clearer rewards',
  },
  {
    icon: '📈',
    title: 'Real Time Insights',
    subtitle: 'Track spend and progress instantly',
  },
  {
    icon: '🪪',
    title: 'Seamless Recognition',
    subtitle: 'Digital access with instant identification',
  },
  {
    icon: '⭐',
    title: 'Exclusive Experiences',
    subtitle: 'Priority access to special events and moments',
  },
]

export default function WhatNotToMissScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />

      <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-3">
            New App Features
          </p>
          <h1 className="text-2xl font-semibold text-text-primary leading-snug mb-2">
            What not to miss
          </h1>
          <p className="text-base text-text-secondary leading-normal">
            Everything you need for a seamless Atlantis experience
          </p>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-highlight-lightest flex items-center justify-center shrink-0 text-xl">
                {f.icon}
              </div>
              <div>
                <p className="text-base font-semibold text-text-primary">{f.title}</p>
                <p className="text-sm text-text-secondary mt-0.5">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8">
          <Button variant="primary" size="full" onClick={() => navigate('/onboarding/status')}>
            Next
          </Button>
          <button
            onClick={() => navigate(-1)}
            className="text-base font-semibold text-atlantis-blue-600 text-center"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
