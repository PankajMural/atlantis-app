import { useState } from 'react'
import type { InputHTMLAttributes } from 'react'

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string
  error?: string
  showPasswordToggle?: boolean
}

export default function TextField({ label, error, showPasswordToggle, type, ...props }: TextFieldProps) {
  const [showPw, setShowPw] = useState(false)
  const resolvedType = showPasswordToggle ? (showPw ? 'text' : 'password') : type

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-text-primary">{label}</label>
      )}
      <div className={[
        'flex items-center h-12 px-4 rounded-md border bg-bg-default transition-colors',
        error
          ? 'border-[1.5px] border-error'
          : 'border-border-default focus-within:border-[1.5px] focus-within:border-highlight-darkest',
      ].join(' ')}>
        <input
          type={resolvedType}
          className="flex-1 outline-none bg-transparent text-base text-text-primary placeholder:text-text-tertiary"
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPw(p => !p)}
            className="ml-2 text-text-secondary shrink-0"
            tabIndex={-1}
          >
            {showPw ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-error mt-0.5">{error}</p>}
    </div>
  )
}
