import { useNavigate } from 'react-router-dom'

const ACTIONS = [
  { label: 'Dining',      path: '/dining',      icon: '🍽' },
  { label: 'Experiences', path: '/experiences', icon: '✨' },
  { label: 'Offers',      path: '/offers',      icon: '🏷' },
  { label: 'My Profile',  path: '/profile',     icon: '👤' },
]

export default function QuickActions() {
  const navigate = useNavigate()

  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-dark-darkest mb-3">Quick actions</h3>
      <div className="grid grid-cols-4 gap-2">
        {ACTIONS.map((action) => (
          <button
            key={action.path}
            onClick={() => navigate(action.path)}
            className="flex flex-col items-center gap-2 py-3 px-1 rounded-md bg-neutral-light-light border border-neutral-light-darkest text-center active:bg-neutral-light-medium transition-colors"
          >
            <span className="text-2xl leading-none">{action.icon}</span>
            <span className="text-sm text-neutral-dark-darkest leading-tight">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
