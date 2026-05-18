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
          ? 'border-brand-dark bg-brand-dark text-text-on-brand'
          : 'border-border-default bg-bg-default text-text-primary',
        className,
      ].join(' ')}
    >
      {label}
    </button>
  )
}
