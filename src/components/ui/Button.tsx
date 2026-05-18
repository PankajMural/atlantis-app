import type { ButtonHTMLAttributes } from 'react'
import type { ButtonVariant, ButtonSize } from '../../types'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  'primary':    'bg-atlantis-blue-600 text-text-on-brand disabled:opacity-40 disabled:cursor-not-allowed',
  'secondary':  'bg-transparent text-atlantis-blue-600 border-[1.5px] border-atlantis-blue-600 disabled:opacity-40 disabled:cursor-not-allowed',
  'brand-dark': 'bg-brand-dark text-text-on-brand',
  'tertiary':   'bg-transparent text-atlantis-blue-600',
}

const sizeClasses: Record<ButtonSize, string> = {
  'default': 'h-btn px-4',
  'full':    'h-btn w-full px-4',
}

export default function Button({
  variant = 'primary',
  size = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-sm text-base font-semibold transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
