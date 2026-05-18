interface NumberPadProps {
  onDigit: (d: string) => void
  onDelete: () => void
  dark?: boolean
}

const KEYS = ['1','2','3','4','5','6','7','8','9','','0','del']

export default function NumberPad({ onDigit, onDelete, dark }: NumberPadProps) {
  const keyClass = dark
    ? 'text-neutral-light-lightest active:bg-neutral-dark-medium'
    : 'text-text-primary active:bg-bg-hover'

  return (
    <div className="grid grid-cols-3 shrink-0">
      {KEYS.map((key, i) => {
        if (key === '') return <div key={i} />

        if (key === 'del') {
          return (
            <button
              key={i}
              onClick={onDelete}
              className={`h-[72px] flex items-center justify-center transition-colors ${keyClass}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
                <line x1="18" y1="9" x2="12" y2="15" />
                <line x1="12" y1="9" x2="18" y2="15" />
              </svg>
            </button>
          )
        }

        return (
          <button
            key={i}
            onClick={() => onDigit(key)}
            className={`h-[72px] flex items-center justify-center text-2xl font-regular transition-colors ${keyClass}`}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
