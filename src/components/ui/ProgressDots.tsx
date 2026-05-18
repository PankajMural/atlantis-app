interface ProgressDotsProps {
  total: number
  active: number
  dark?: boolean
}

export default function ProgressDots({ total, active, dark }: ProgressDotsProps) {
  return (
    <div className="flex gap-1.5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={[
            'rounded-full transition-all duration-300',
            i === active
              ? dark
                ? 'bg-neutral-light-lightest w-4 h-2'
                : 'bg-highlight-darkest w-4 h-2'
              : dark
                ? 'bg-neutral-light-lightest/40 w-2 h-2'
                : 'bg-neutral-light-darkest w-2 h-2',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
