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
    <div className="px-4">
      <h3 className="text-lg font-semibold text-text-primary mb-3">Quick actions</h3>
      <div className="grid grid-cols-4 gap-2">
        {ACTIONS.map((action) => (
          <button
            key={action.path}
            onClick={() => navigate(action.path)}
            className="flex flex-col items-center gap-2 p-3 rounded-md bg-bg-secondary border border-border-default text-center"
          >
            <span className="text-2xl leading-none">{action.icon}</span>
            <span className="text-xs text-text-primary">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
