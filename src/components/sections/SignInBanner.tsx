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
    <div className="rounded-md border border-border-default bg-bg-secondary p-4 flex flex-col gap-4">
      <div>
        <p className="text-base font-semibold text-text-primary">{heading}</p>
        <p className="text-sm text-text-secondary mt-1">{body}</p>
      </div>
      <Button variant="primary" size="full" onClick={onSignIn}>
        {ctaLabel}
      </Button>
    </div>
  )
}
