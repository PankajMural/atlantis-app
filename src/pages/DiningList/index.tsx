import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import StatusBar from '../../components/layout/StatusBar'
import NavigationBar from '../../components/layout/NavigationBar'
import PageHeading from '../../components/layout/PageHeading'
import OfferCard from '../../components/cards/OfferCard'
import Tag from '../../components/ui/Tag'
import Button from '../../components/ui/Button'
import FiltersDrawer from '../Filters'
import type { Offer, FilterState } from '../../types'

const MOCK_OFFERS: Offer[] = [
  { id: '1', title: 'Ossiano', subtitle: 'European • Dinner • Atlantis The Palm', tag: 'Michelin', venueId: '1' },
  { id: '2', title: 'Nobu', subtitle: 'Japanese • Lunch & Dinner • Atlantis The Palm', tag: 'Signature', venueId: '2' },
  { id: '3', title: 'Saffron', subtitle: 'Indian • Breakfast & Dinner • Atlantis The Palm', venueId: '3' },
  { id: '4', title: 'Bread Street Kitchen', subtitle: 'British • All day • Atlantis The Palm', venueId: '4' },
]

const EMPTY_FILTERS: FilterState = { location: [], timeOfDay: [], experience: [], cuisine: [] }

export default function DiningList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filtersOpen = searchParams.get('filters') === 'open'
  const [activeFilters, setActiveFilters] = useState<FilterState>(EMPTY_FILTERS)

  const appliedTags = useMemo(() => {
    return [
      ...activeFilters.location,
      ...activeFilters.timeOfDay,
      ...activeFilters.experience,
      ...activeFilters.cuisine,
    ]
  }, [activeFilters])

  const removeTag = (tag: string) => {
    setActiveFilters((prev) => ({
      location:   prev.location.filter((t) => t !== tag),
      timeOfDay:  prev.timeOfDay.filter((t) => t !== tag),
      experience: prev.experience.filter((t) => t !== tag),
      cuisine:    prev.cuisine.filter((t) => t !== tag),
    }))
  }

  const openFilters = () => setSearchParams({ filters: 'open' })
  const closeFilters = () => setSearchParams({})

  return (
    <div className="flex flex-col min-h-svh bg-bg-default">
      <StatusBar />
      <PageHeading title="Dining" />

      <div className="flex-1 overflow-y-auto">
        {/* Filter bar */}
        <div className="px-4 pt-4">
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
            <Button
              variant="secondary"
              size="default"
              className="shrink-0 text-sm h-tag px-3"
              onClick={openFilters}
            >
              ⚙ Filters {appliedTags.length > 0 && `(${appliedTags.length})`}
            </Button>
            {appliedTags.map((tag) => (
              <Tag key={tag} label={tag} onRemove={() => removeTag(tag)} />
            ))}
          </div>
        </div>

        {/* Offer list */}
        <div className="px-4 flex flex-col gap-2 pb-6">
          {MOCK_OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      <NavigationBar />

      {/* Filter drawer overlay */}
      {filtersOpen && (
        <FiltersDrawer
          filters={activeFilters}
          onChange={setActiveFilters}
          onClose={closeFilters}
        />
      )}
    </div>
  )
}
