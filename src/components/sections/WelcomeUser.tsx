import type { User } from '../../types'

interface WelcomeUserProps {
  user: User
  subtitle?: string
}

export default function WelcomeUser({ user, subtitle }: WelcomeUserProps) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div>
        <p className="text-sm text-text-secondary">{subtitle ?? 'Welcome back'}</p>
        <h2 className="text-xl font-semibold text-text-primary tracking-tight">{user.firstName}</h2>
      </div>
      <div className="w-10 h-10 rounded-full bg-bg-neutral-tertiary flex items-center justify-center text-text-secondary font-semibold">
        {user.firstName.charAt(0)}
      </div>
    </div>
  )
}
