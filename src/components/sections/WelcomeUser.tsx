import type { User } from '../../types'

interface WelcomeUserProps {
  user: User
  subtitle?: string
}

export default function WelcomeUser({ user, subtitle }: WelcomeUserProps) {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div>
        <p className="text-sm text-neutral-dark-light">{subtitle ?? 'Welcome back'}</p>
        <h2 className="text-2xl font-heading text-neutral-dark-darkest tracking-tight">{user.firstName}</h2>
      </div>
      <div className="w-10 h-10 rounded-full bg-highlight-lightest flex items-center justify-center text-highlight-darkest font-semibold text-base">
        {user.firstName.charAt(0)}
      </div>
    </div>
  )
}
