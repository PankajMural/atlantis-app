import { useNavigate } from 'react-router-dom'
import IconButton from '../ui/IconButton'
import Button from '../ui/Button'

interface NavWithButtonProps {
  primaryLabel: string
  onPrimary: () => void
  secondaryLabel?: string
  onSecondary?: () => void
  showBack?: boolean
}

export default function NavWithButton({
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
  showBack = true,
}: NavWithButtonProps) {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-bg-default border-t border-border-default px-4 py-3 shrink-0">
      {showBack && (
        <div className="mb-3">
          <IconButton onClick={() => navigate(-1)} aria-label="Go back">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </IconButton>
        </div>
      )}
      <div className={secondaryLabel ? 'flex gap-2' : ''}>
        {secondaryLabel && (
          <Button variant="secondary" size="default" className="flex-1" onClick={onSecondary}>
            {secondaryLabel}
          </Button>
        )}
        <Button
          variant="primary"
          size={secondaryLabel ? 'default' : 'full'}
          className={secondaryLabel ? 'flex-1' : ''}
          onClick={onPrimary}
        >
          {primaryLabel}
        </Button>
      </div>
    </div>
  )
}
