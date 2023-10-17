import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'
import { setPokemons } from './store/slices/pokemon/pokemonSlice'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons)
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  console.log(pokemons)
  return (
    <>
      <h1>Pokem</h1>
      <hr />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {pokemons.map((pok) => {
            return <li key={pok.url}>{pok.name}</li>
          })}
        </ul>
      )}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  )
}
