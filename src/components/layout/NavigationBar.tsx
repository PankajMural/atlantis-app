import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home',       path: '/',       icon: '⌂' },
  { label: 'Dining',     path: '/dining', icon: '🍽' },
  { label: 'Offers',     path: '/offers', icon: '🏷' },
  { label: 'Profile',   path: '/profile', icon: '👤' },
]

export default function NavigationBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="h-nav-bar w-full bg-bg-default border-t border-border-default flex items-center shrink-0">
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={[
              'flex-1 flex flex-col items-center justify-center gap-1 h-full text-xs transition-colors',
              active ? 'text-atlantis-blue-600' : 'text-text-tertiary',
            ].join(' ')}
          >
            <span className="text-lg leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
