interface SpecialOfferBannerProps {
  text: string
}

export default function SpecialOfferBanner({ text }: SpecialOfferBannerProps) {
  return (
    <div className="rounded-lg bg-highlight-lightest border border-highlight-darkest px-4 py-3 flex items-start gap-2">
      <span className="text-highlight-darkest text-base mt-0.5">✦</span>
      <p className="text-sm text-neutral-dark-darkest leading-normal">{text}</p>
    </div>
  )
}
