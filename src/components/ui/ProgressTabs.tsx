interface ProgressTabsProps {
  total: number
  active: number
  dark?: boolean
}

export default function ProgressTabs({ total, active, dark }: ProgressTabsProps) {
  return (
    <div className="flex gap-1 px-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={[
            'flex-1 h-1 rounded-full transition-all duration-300',
            dark
              ? i === active ? 'bg-neutral-light-lightest' : 'bg-neutral-light-lightest/30'
              : i === active ? 'bg-highlight-darkest' : 'bg-neutral-light-darkest',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
