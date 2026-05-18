interface TagToggleProps {
  label: string
  selected?: boolean
  onChange?: (selected: boolean) => void
  className?: string
}

export default function TagToggle({ label, selected = false, onChange, className = '' }: TagToggleProps) {
  return (
    <button
      onClick={() => onChange?.(!selected)}
      className={[
        'h-tag-toggle px-3 rounded-md border text-sm transition-colors',
        selected
          ? 'border-neutral-dark-dark bg-neutral-dark-dark text-neutral-light-lightest'
          : 'border-neutral-light-darkest bg-neutral-light-lightest text-neutral-dark-darkest',
        className,
      ].join(' ')}
    >
      {label}
    </button>
  )
}
