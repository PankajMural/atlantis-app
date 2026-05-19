// Figma node 272:9856 — Code input
// Box: 48×48px | Gap: 8px | Font: Averta PE Regular 14px centered | #1F2024
// Default border: 1px #C5C6CC | Active: 1.5px #3370AB | Error: 1.5px #FF616D
// Border radius: 0 (square corners per Figma)

interface OTPInputProps {
  value: string
  length?: number
  error?: boolean
}

export default function OTPInput({ value, length = 6, error }: OTPInputProps) {
  return (
    <div className="flex gap-2 justify-between">
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className={[
            'flex-1 h-12 flex items-center justify-center text-sm border transition-colors bg-neutral-light-lightest text-neutral-dark-darkest',
            error
              ? 'border-[1.5px] border-support-error-medium text-support-error-medium bg-support-error-light'
              : value[i]
                ? 'border-[1.5px] border-highlight-darkest'
                : 'border-neutral-light-darkest',
          ].join(' ')}
        >
          {value[i] ?? ''}
        </div>
      ))}
    </div>
  )
}
