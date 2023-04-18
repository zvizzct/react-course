import { heroes } from '../data/heroes'

export const getHeroByName = (name = '') => {
  name = name.trim().split(' ').join('').toLocaleLowerCase()
  if (name === '') return []

  return heroes.filter((hero) =>
    hero.superhero.trim().split(' ').join('').toLocaleLowerCase().includes(name)
  )
}
