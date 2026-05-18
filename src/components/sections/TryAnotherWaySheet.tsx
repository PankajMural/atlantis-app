import BottomSheet from '../ui/BottomSheet'

type TryContext = 'phone' | 'email' | 'password'
type TryMethod = 'email-otp' | 'phone-otp' | 'password'

interface Option {
  label: string
  sub: string
  method: TryMethod
  icon: 'email' | 'phone' | 'lock'
}

interface TryAnotherWaySheetProps {
  context: TryContext
  maskedEmail?: string
  maskedPhone?: string
  onSelect: (method: TryMethod) => void
  onClose: () => void
}

function getOptions(ctx: TryContext, email: string, phone: string): Option[] {
  if (ctx === 'phone') return [
    { label: 'Receive a code on your email address', sub: email, method: 'email-otp', icon: 'email' },
    { label: 'Enter your password', sub: '', method: 'password', icon: 'lock' },
  ]
  if (ctx === 'email') return [
    { label: 'Receive a code via WhatsApp on', sub: phone, method: 'phone-otp', icon: 'phone' },
    { label: 'Enter your password', sub: '', method: 'password', icon: 'lock' },
  ]
  return [
    { label: 'Receive a code via Email', sub: email, method: 'email-otp', icon: 'email' },
    { label: 'Receive a code via WhatsApp', sub: phone, method: 'phone-otp', icon: 'phone' },
  ]
}

function OptionIcon({ icon }: { icon: Option['icon'] }) {
  if (icon === 'email') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3370AB" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  )
  if (icon === 'phone') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3370AB" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  )
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3370AB" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

export default function TryAnotherWaySheet({
  context,
  maskedEmail = 'e*************n@outlook.com',
  maskedPhone = '+97 *** *** 567',
  onSelect,
  onClose,
}: TryAnotherWaySheetProps) {
  const options = getOptions(context, maskedEmail, maskedPhone)

  return (
    <BottomSheet onClose={onClose}>
      <div className="px-6 pt-5 pb-10">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Try another way</h2>
        <p className="text-sm text-text-secondary mb-6">Choose how you'd like to verify your identity.</p>
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <button
              key={opt.method}
              onClick={() => { onSelect(opt.method); onClose() }}
              className="flex items-start gap-4 w-full p-4 rounded-lg border border-border-default active:bg-bg-hover transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-md bg-highlight-lightest flex items-center justify-center shrink-0">
                <OptionIcon icon={opt.icon} />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-text-primary">{opt.label}</p>
                {opt.sub && <p className="text-sm text-text-secondary mt-0.5">{opt.sub}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  )
}
