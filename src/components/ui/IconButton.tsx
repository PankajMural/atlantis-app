import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <button
      className={[
        'w-btn-icon h-btn-icon flex items-center justify-center rounded-md',
        'text-text-primary bg-transparent transition-colors hover:bg-bg-hover',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
