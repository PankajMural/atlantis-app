import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  children: ReactNode
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={[
        'w-btn-icon h-btn-icon flex items-center justify-center rounded-sm',
        'text-neutral-dark-darkest bg-transparent transition-colors active:bg-neutral-light-light',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </motion.button>
  )
}
