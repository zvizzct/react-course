import React from 'react'
import { heroes } from '../data/heroes'
import { HeroCard } from '../components/HeroCard'

export const AllHeroPage = () => {
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((heroe) => {
        return <HeroCard key={heroe.id} {...heroe} />
      })}
    </div>
  )
}
