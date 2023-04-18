// components/SearchPage.js
import { HeroCard } from '../components/HeroCard'
import { useSearch } from '../hooks/useSearch'

export const SearchPage = () => {
  const { q, searchText, onInputChange, onSearchSubmit, newHero } = useSearch()

  return (
    <>
      <h1>search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button type="submit" className="btn m-1 btn-outline-primary" >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {!q && <div className="alert alert-info animate__animated animate__fadeIn">Search a hero</div>}
          {q && newHero.length === 0 && <div className="alert alert-danger animate__animated animate__fadeIn">There is no a hero with <b>{q}</b></div>}
          {q && newHero.length > 0 && newHero.map(hero => <HeroCard key={hero.id} {...hero} />)}
        </div>
      </div>
    </>
  )
}
