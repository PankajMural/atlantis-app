interface BadgeItem {
  icon: string
  label: string
  value: string
}

interface BadgeProps {
  items: BadgeItem[]
}

export default function Badge({ items }: BadgeProps) {
  return (
    <div className="flex rounded-md border border-border-default overflow-hidden bg-bg-default shadow-card">
      {items.map((item, i) => (
        <div
          key={i}
          className={[
            'flex-1 flex flex-col items-center justify-center py-4 gap-1',
            i < items.length - 1 ? 'border-r border-border-default' : '',
          ].join(' ')}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs text-text-secondary">{item.label}</span>
          <span className="text-sm font-semibold text-text-primary">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
