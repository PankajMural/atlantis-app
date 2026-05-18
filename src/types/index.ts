export interface User {
  id: string
  name: string
  firstName: string
  isGuest: boolean
}

export interface Offer {
  id: string
  title: string
  subtitle: string
  tag?: string
  imageUrl?: string
  venueId?: string
}

export interface MichelinStar {
  count: 1 | 2 | 3
}

export interface DiningVenue {
  id: string
  name: string
  cuisine: string
  location: string
  description: string
  imageUrl?: string
  michelinStars?: MichelinStar
  timeOfDay?: string[]
  specialOffer?: string
}

export interface ExperienceDetail {
  label: string
  value: string
}

export interface Experience {
  id: string
  title: string
  subtitle: string
  description: string
  imageUrl?: string
  type: 'dining' | 'experience'
}

export interface FilterState {
  location: string[]
  timeOfDay: string[]
  experience: string[]
  cuisine: string[]
}

export interface Country {
  name: string
  dial: string
  flag: string
  code: string
}

export type ButtonVariant = 'primary' | 'secondary' | 'brand-dark' | 'tertiary'
export type ButtonSize = 'default' | 'full'
export type AuthMethod = 'phone' | 'email' | 'password'
export type OTPChannel = 'phone' | 'email'
export type ExperienceType = 'resident' | 'tourist'
