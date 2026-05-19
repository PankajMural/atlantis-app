import { useNavigate } from 'react-router-dom'
import PageTransition from '../../../components/ui/PageTransition'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'
import ProgressDots from '../../../components/ui/ProgressDots'

export default function NewExperienceScreen() {
  const navigate = useNavigate()

  return (
    <div className="relative flex flex-col min-h-svh bg-neutral-light-lightest">
      {/* StatusBar — absolutely positioned over the hero gradient, never animates */}
      <div className="absolute top-0 left-0 w-full z-10">
        <StatusBar theme="dark" />
      </div>

      {/* Animated page content */}
      <PageTransition className="flex-1 flex flex-col">
        {/* Hero — replace inner div with <img> once src/assets/images/underwater.jpg is added */}
        <div className="relative w-full shrink-0" style={{ height: '55svh' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2540] via-[#1a558a] to-[#B4DBFF]" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
          <p className="font-ui text-xs font-semibold tracking-[0.14em] uppercase text-highlight-darkest mb-4">
            Step 01 of 03
          </p>

          <h1 className="font-headline text-3xl text-neutral-dark-darkest leading-tight mb-3">
            Welcome to the new{' '}
            <span className="text-highlight-darkest">Atlantis</span>
          </h1>

          <p className="text-base text-neutral-dark-light leading-relaxed">
            We've upgraded your membership experience with new tiers, better rewards, and easier tracking.
          </p>

          <div className="flex-1" />

          <div className="flex flex-col gap-5">
            <ProgressDots total={3} active={0} />
            <Button
              variant="primary"
              size="full"
              className="!h-btn-lg"
              onClick={() => navigate('/onboarding/step-2')}
            >
              Next
            </Button>
          </div>
        </div>
      </PageTransition>
    </div>
  )
}
