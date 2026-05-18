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
            'flex-1 h-14 flex items-center justify-center text-xl font-semibold rounded-md border transition-colors',
            error
              ? 'border-[1.5px] border-error text-error bg-error-light'
              : value[i]
                ? 'border-[1.5px] border-highlight-darkest text-text-primary bg-bg-default'
                : 'border-border-default text-text-primary bg-bg-default',
          ].join(' ')}
        >
          {value[i] ?? ''}
        </div>
      ))}
    </div>
  )
}
