import { useNavigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 12L12 3L21 12V20C21 20.5523 20.5523 21 20 21H15V16H9V21H4C3.44772 21 3 20.5523 3 20V12Z"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      fill={active ? 'currentColor' : 'none'}
      fillOpacity={active ? 0.15 : 0}
    />
  </svg>
)

const BookIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="17" rx="2"
      stroke="currentColor" strokeWidth="1.8"
      fill={active ? 'currentColor' : 'none'}
      fillOpacity={active ? 0.12 : 0}
    />
    <path d="M16 2V6M8 2V6M3 9H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const MyStayIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 21V8L12 3L21 8V21"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      fill={active ? 'currentColor' : 'none'}
      fillOpacity={active ? 0.12 : 0}
    />
    <rect x="9" y="13" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 13V10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ProfileIcon = ({ active }: { active: boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="8" r="4"
      stroke="currentColor" strokeWidth="1.8"
      fill={active ? 'currentColor' : 'none'}
      fillOpacity={active ? 0.15 : 0}
    />
    <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

interface NavItem {
  label: string
  path: string
  Icon: (props: { active: boolean }) => ReactNode
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',    path: '/',        Icon: HomeIcon },
  { label: 'Book',    path: '/book',    Icon: BookIcon },
  { label: 'My Stay', path: '/my-stay', Icon: MyStayIcon },
  { label: 'Profile', path: '/profile', Icon: ProfileIcon },
]

export default function NavigationBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="h-nav-bar w-full bg-neutral-light-lightest border-t border-neutral-light-darkest flex items-center shrink-0">
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={[
              'flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors',
              active ? 'text-highlight-darkest' : 'text-neutral-dark-lightest',
            ].join(' ')}
          >
            <item.Icon active={active} />
            <span className="text-[11px] leading-none">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
