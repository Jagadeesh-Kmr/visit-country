import {useState} from 'react'

import {CountriesList, VisitButton} from './styledComponents.'

const CountriesName = props => {
  const [isActiveId, setIsActiveId] = useState(false)
  const {countriesName, onGetId} = props
  const {name, id} = countriesName

  const onClickBtn = () => {
    setIsActiveId(prevState => !prevState)
    onGetId(id)
  }

  const BtnName = isActiveId ? 'Visited' : 'Visit'

  return (
    <>
      <CountriesList>
        {name}
        <VisitButton type="button" onClick={onClickBtn} isActive={isActiveId}>
          {BtnName}
        </VisitButton>
      </CountriesList>
    </>
  )
}

export default CountriesName

/*
 <div>
        <CountriesH1>Visited Countries</CountriesH1>
      </div>

*/
