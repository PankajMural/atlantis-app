import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'
import ProgressTabs from '../../../components/ui/ProgressTabs'

const ALL_FEATURES = [
  {
    icon: '✦',
    title: 'Smarter tiers',
    subtitle: 'Clearer benefits at every level',
  },
  {
    icon: '📊',
    title: 'Live Spend Tracking',
    subtitle: 'Track your progress in real time',
  },
]

export default function NewExperienceScreen() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  const handleNext = () => {
    if (step < 2) {
      setStep(s => s + 1)
    } else {
      navigate('/onboarding/features')
    }
  }

  const visibleFeatures = step === 0 ? ALL_FEATURES.slice(0, 1) : ALL_FEATURES

  return (
    <div className="relative flex flex-col min-h-svh bg-neutral-dark-darkest overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark-dark via-neutral-dark-darkest to-neutral-dark-darkest" />

      <div className="relative flex flex-col min-h-svh">
        <StatusBar theme="dark" />

        <div className="pt-3 pb-2 shrink-0">
          <ProgressTabs total={3} active={step > 2 ? 2 : step} dark />
        </div>

        {/* Hero placeholder */}
        <div className="mx-6 mt-4 h-44 rounded-lg bg-neutral-dark-medium/30 border border-neutral-dark-medium/20 flex items-center justify-center shrink-0">
          <div className="text-center">
            <span className="text-4xl">🌊</span>
            <p className="text-xs text-neutral-dark-lightest mt-2 tracking-[0.2em] uppercase">Atlantis</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col px-6 pt-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-dark-lightest mb-3">
            Welcome to Atlantis
          </p>
          <h1 className="font-heading text-2xl text-neutral-light-lightest leading-snug mb-2">
            New enhanced experience
          </h1>
          <p className="text-base text-neutral-dark-lightest leading-normal mb-8">
            We've upgraded your membership experience with new tiers, better rewards, and easier tracking.
          </p>

          <div className="flex flex-col gap-5">
            {visibleFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-highlight-darkest/20 border border-highlight-darkest/30 flex items-center justify-center shrink-0">
                  <span className="text-neutral-light-lightest">{f.icon}</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-neutral-light-lightest">{f.title}</p>
                  <p className="text-sm text-neutral-dark-lightest mt-0.5">{f.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1" />

          <div className="flex flex-col items-center gap-4 pb-10">
            <Button variant="primary" size="full" onClick={handleNext}>
              Next
            </Button>
            <button
              onClick={() => navigate('/onboarding/features')}
              className="text-base text-neutral-dark-lightest"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
