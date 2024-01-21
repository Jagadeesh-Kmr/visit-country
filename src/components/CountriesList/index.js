import './index.css'

const CountriesList = props => {
  const {details, addVisitedCountry} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'Visit'

  const buttonText = isVisited ? 'visited-button' : 'visit-button'

  console.log(isVisited)

  const addCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <>
      <li className="country-list-item">
        <p className="country-name">{name}</p>
        {isVisited === true ? (
          <p className="para">{countryText}</p>
        ) : (
          <button className={buttonText} type="button" onClick={addCountry}>
            {countryText}
          </button>
        )}
      </li>
    </>
  )
}

export default CountriesList
