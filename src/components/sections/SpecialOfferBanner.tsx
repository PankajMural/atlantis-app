interface SpecialOfferBannerProps {
  text: string
}

export default function SpecialOfferBanner({ text }: SpecialOfferBannerProps) {
  return (
    <div className="rounded-md bg-bg-brand-tertiary border border-atlantis-blue-400 px-4 py-2">
      <p className="text-sm text-text-primary">{text}</p>
    </div>
  )
}
