import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #161624;
  padding: 10px 30px 60px 30px;
  min-height: 100vh;
`
export const CountriesH1 = styled.h1`
  font-family: 'Bree Serif';
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
`

export const CountriesUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  width: 1280px;
  height: 300px;
  color: #ffffff;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
`

export const CountriesDisplayUl = styled.ul`
  display: flex;
  width: 980px;
  color: #ffffff;
  padding: 0;
  margin: 0;
`
