import Button from '../ui/Button'

interface SignInBannerProps {
  heading: string
  body: string
  ctaLabel?: string
  onSignIn?: () => void
}

export default function SignInBanner({
  heading,
  body,
  ctaLabel = 'Sign in',
  onSignIn,
}: SignInBannerProps) {
  return (
    <div className="rounded-lg border border-neutral-light-darkest bg-neutral-light-light p-4 flex flex-col gap-4">
      <div>
        <p className="text-base font-semibold text-neutral-dark-darkest">{heading}</p>
        <p className="text-sm text-neutral-dark-light mt-1">{body}</p>
      </div>
      <Button variant="primary" size="full" onClick={onSignIn}>
        {ctaLabel}
      </Button>
    </div>
  )
}
