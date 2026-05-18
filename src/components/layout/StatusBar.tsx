interface StatusBarProps {
  theme?: 'light' | 'dark'
}

export default function StatusBar({ theme = 'light' }: StatusBarProps) {
  const text = theme === 'dark' ? 'text-neutral-light-lightest' : 'text-text-primary'
  const bg   = theme === 'dark' ? 'bg-transparent' : 'bg-bg-default'

  return (
    <div className={`h-status-bar w-full ${bg} flex items-center justify-between px-4 shrink-0`}>
      <span className={`text-sm font-semibold ${text}`}>9:41</span>
      <div className="flex items-center gap-1">
        <span className={`text-xs ${text}`}>●●●</span>
        <span className={`text-xs ${text}`}>WiFi</span>
        <span className={`text-xs ${text}`}>100%</span>
      </div>
    </div>
  )
}
