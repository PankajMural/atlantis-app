import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <button
      className={[
        'w-btn-icon h-btn-icon flex items-center justify-center rounded-sm',
        'text-neutral-dark-darkest bg-transparent transition-colors active:bg-neutral-light-light',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
