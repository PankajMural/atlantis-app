import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatusBar from '../../components/layout/StatusBar'
import Button from '../../components/ui/Button'
import ProgressTabs from '../../components/ui/ProgressTabs'
import SelectExperienceSheet from '../../components/sections/SelectExperienceSheet'
import type { ExperienceType } from '../../types'

export default function SplashScreen() {
  const navigate = useNavigate()
  const [sheetOpen, setSheetOpen] = useState(false)

  const handleSelect = (_type: ExperienceType) => {
    setSheetOpen(false)
    navigate('/welcome')
  }

  return (
    <div className="relative flex flex-col min-h-svh bg-neutral-dark-darkest overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-dark-dark/70 via-neutral-dark-darkest/40 to-neutral-dark-darkest" />
      </div>

      <div className="relative flex flex-col min-h-svh">
        <StatusBar theme="dark" />

        <div className="pt-3 pb-4 shrink-0">
          <ProgressTabs total={4} active={0} dark />
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-6">
          {/* Logo mark */}
          <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-10">
            <span className="font-heading text-neutral-light-lightest text-2xl tracking-widest">A</span>
          </div>

          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-dark-lightest mb-4">
            Welcome to Atlantis
          </p>
          <h1 className="font-heading text-3xl text-neutral-light-lightest text-center leading-snug">
            Where Adventures flow, Memories unfold
          </h1>
        </div>

        {/* CTA */}
        <div className="px-6 pb-10 shrink-0">
          <Button variant="primary" size="full" onClick={() => setSheetOpen(true)}>
            Get started
          </Button>
        </div>
      </div>

      {sheetOpen && (
        <SelectExperienceSheet
          onSelect={handleSelect}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </div>
  )
}
