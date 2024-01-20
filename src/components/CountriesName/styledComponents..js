import styled from 'styled-components'

export const CountriesList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  border-bottom: 1px solid #cbd5e1;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px 10px 30px;
`
export const VisitButton = styled.button`
  color: ${props => (props.isActive ? '#cbd5e1' : '#ffffff')};
  background-color: ${props => (props.isActive ? '#161624' : '#3b82f6')};
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
