interface TagProps {
  label: string
  count?: number
  onRemove?: () => void
  className?: string
}

export default function Tag({ label, count, onRemove, className = '' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 h-tag px-3 rounded-md border border-neutral-light-darkest',
        'text-sm text-neutral-dark-darkest bg-neutral-light-lightest shrink-0',
        className,
      ].join(' ')}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className="w-4 h-4 flex items-center justify-center text-xs text-neutral-dark-light">
          {count}
        </span>
      )}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label={`Remove ${label} filter`}
          className="w-4 h-4 flex items-center justify-center text-neutral-dark-light active:text-neutral-dark-darkest"
        >
          ×
        </button>
      )}
    </span>
  )
}
