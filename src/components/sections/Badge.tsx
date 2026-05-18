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
    <div className="flex rounded-lg border border-neutral-light-darkest overflow-hidden bg-neutral-light-lightest shadow-card">
      {items.map((item, i) => (
        <div
          key={i}
          className={[
            'flex-1 flex flex-col items-center justify-center py-4 gap-1',
            i < items.length - 1 ? 'border-r border-neutral-light-darkest' : '',
          ].join(' ')}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-xs text-neutral-dark-light">{item.label}</span>
          <span className="text-sm font-semibold text-neutral-dark-darkest">{item.value}</span>
        </div>
      ))}
    </div>
  )
}
