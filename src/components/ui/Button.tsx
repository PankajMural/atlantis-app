import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ButtonVariant, ButtonSize } from '../../types'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

// Figma node 248:4131 — Button (all variants)
// Font: Averta PE Regular 400 12px | Gap: 8px | Padding: 16px H / 12px V
// Primary/Secondary: radius 0px | Tertiary: radius 8px
const variantClasses: Record<ButtonVariant, string> = {
  'primary':    'bg-highlight-darkest text-white rounded-none disabled:opacity-40 disabled:cursor-not-allowed',
  'secondary':  'bg-transparent text-highlight-darkest border-[1.5px] border-highlight-darkest rounded-none disabled:opacity-40 disabled:cursor-not-allowed',
  'brand-dark': 'bg-neutral-dark-darkest text-white rounded-none',
  'tertiary':   'bg-transparent text-highlight-darkest rounded-[8px]',
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
    <motion.button
      whileTap={props.disabled ? undefined : { scale: 0.97 }}
      className={[
        'inline-flex items-center justify-center gap-2 text-sm font-normal transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </motion.button>
  )
}
