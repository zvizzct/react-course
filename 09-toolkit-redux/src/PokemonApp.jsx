import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'
export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemons)
  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  )
}
