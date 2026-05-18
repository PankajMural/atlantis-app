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
        'inline-flex items-center gap-2 h-tag px-2 rounded-md border border-border-default',
        'text-sm text-text-primary bg-bg-default shrink-0',
        className,
      ].join(' ')}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className="w-4 h-4 flex items-center justify-center text-xs text-text-secondary">
          {count}
        </span>
      )}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label={`Remove ${label} filter`}
          className="w-4 h-4 flex items-center justify-center text-text-secondary hover:text-text-primary"
        >
          ×
        </button>
      )}
    </span>
  )
}
