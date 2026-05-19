import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../../../components/ui/PageTransition'
import StatusBar from '../../../components/layout/StatusBar'
import Button from '../../../components/ui/Button'
import ProgressDots from '../../../components/ui/ProgressDots'

const FEATURES = [
  {
    title: 'Enhanced Membership',
    subtitle: 'Refined tiers and clearer rewards',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="1" />
        <rect x="11" y="2" width="7" height="7" rx="1" />
        <rect x="2" y="11" width="7" height="7" rx="1" />
        <rect x="11" y="11" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Insights',
    subtitle: 'Track spend and progress instantly',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 5v5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Seamless Recognition',
    subtitle: 'Digital access with instant identification',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="1" />
        <rect x="11" y="2" width="7" height="7" rx="1" />
        <rect x="2" y="11" width="7" height="7" rx="1" />
        <rect x="11" y="13" width="2" height="2" />
        <rect x="15" y="13" width="2" height="2" />
        <rect x="11" y="17" width="2" height="2" />
        <rect x="15" y="17" width="2" height="2" />
        <rect x="13" y="15" width="2" height="2" />
      </svg>
    ),
  },
  {
    title: 'Exclusive Experiences',
    subtitle: 'Priority access to special events',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 2l2.1 4.9 5.3.5-3.9 3.6 1.2 5.3L10 13.6l-4.7 2.7 1.2-5.3L2.6 7.4l5.3-.5L10 2z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function WhatNotToMissScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col min-h-svh bg-neutral-light-lightest">
      <StatusBar />
      <PageTransition className="flex-1 flex flex-col">
        {/* Back arrow */}
        <div className="flex items-center px-4 h-12 shrink-0">
          <button onClick={() => navigate(-1)} className="p-1 text-neutral-dark-darkest" aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 flex flex-col px-6 pb-4 overflow-y-auto">
          <p className="font-ui text-xs font-semibold tracking-[0.14em] uppercase text-highlight-darkest mb-4">
            Step 02 of 03
          </p>

          <h1 className="font-headline text-3xl text-neutral-dark-darkest leading-tight mb-2">
            What's new this season
          </h1>

          <p className="text-base text-neutral-dark-light mb-6">
            Don't miss out on the latest updates
          </p>

          {/* Staggered feature cards */}
          <motion.div
            className="flex flex-col gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={cardVariants}
                className="flex items-center gap-4 border border-neutral-light-darkest rounded-lg p-4"
              >
                <div className="w-11 h-11 rounded-md bg-neutral-light-medium flex items-center justify-center text-neutral-dark-medium shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="text-base font-semibold text-neutral-dark-darkest">{f.title}</p>
                  <p className="text-sm text-neutral-dark-light mt-0.5">{f.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex-1" />
        </div>

        {/* Footer */}
        <div className="shrink-0 px-6 pt-4 pb-8 flex flex-col gap-5">
          <ProgressDots total={3} active={1} />
          <Button
            variant="primary"
            size="full"
            className="!h-btn-lg"
            onClick={() => navigate('/onboarding/step-3')}
          >
            Next
          </Button>
        </div>
      </PageTransition>
    </div>
  )
}
