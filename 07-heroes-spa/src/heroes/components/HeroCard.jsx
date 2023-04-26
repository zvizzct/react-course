import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero,
  pubisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const charactersByHero = <p className="card-text">{characters}</p>
  const heroImage = `/heroes/${id}.jpg`
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImage} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && charactersByHero}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
