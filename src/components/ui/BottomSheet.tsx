import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import IconButton from './IconButton'

interface BottomSheetProps {
  onClose: () => void
  children: ReactNode
  showClose?: boolean
}

export default function BottomSheet({ onClose, children, showClose = true }: BottomSheetProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        className="relative bg-bg-default rounded-t-lg w-mobile mx-auto flex flex-col max-h-[90svh]"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%', transition: { duration: 0.22, ease: 'easeIn' } }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <div className="flex justify-center pt-3 shrink-0">
          <div className="w-10 h-1 rounded-full bg-neutral-light-darkest" />
        </div>
        {showClose && (
          <div className="absolute top-2 right-4">
            <IconButton onClick={onClose} aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </IconButton>
          </div>
        )}
        {children}
      </motion.div>
    </motion.div>
  )
}
