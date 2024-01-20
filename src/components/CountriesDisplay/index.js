import {CountriesListDiv} from './styledComponents'

const CountriesDisplay = props => {
  const {countryList} = props
  console.log(countryList)
  return (
    <>
      <CountriesListDiv>Country Visited</CountriesListDiv>
      <p>{countryList.name}</p>
    </>
  )
}

export default CountriesDisplay
