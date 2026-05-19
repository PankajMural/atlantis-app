import { motion } from 'framer-motion'

interface ProgressDotsProps {
  total: number
  active: number
  dark?: boolean
}

export default function ProgressDots({ total, active, dark }: ProgressDotsProps) {
  return (
    <div className="flex gap-1.5 justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-2 rounded-full"
          animate={{
            width: i === active ? 16 : 8,
            backgroundColor: i === active
              ? (dark ? '#FFFFFF' : '#3370AB')
              : (dark ? 'rgba(255,255,255,0.4)' : '#C5C6CC'),
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  )
}
