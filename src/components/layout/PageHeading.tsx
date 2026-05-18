import { useNavigate } from 'react-router-dom'
import IconButton from '../ui/IconButton'

interface PageHeadingProps {
  title: string
  showBack?: boolean
  onBack?: () => void
}

export default function PageHeading({ title, showBack = true, onBack }: PageHeadingProps) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) onBack()
    else navigate(-1)
  }

  return (
    <div className="h-page-heading w-full bg-bg-default flex items-center px-4 gap-2 shrink-0">
      {showBack && (
        <IconButton onClick={handleBack} aria-label="Go back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </IconButton>
      )}
      <h1 className="text-xl font-semibold text-text-primary tracking-tight flex-1">
        {title}
      </h1>
    </div>
  )
}
