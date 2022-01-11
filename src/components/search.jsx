import { useState } from 'react'
import styled from 'styled-components'
import Icon from './icon'
import Location from './location'
import { search_location } from '../utils/api'

export default function Search({closeSearch, setWoeid}) {
  const [loc, setLoc] = useState('')
  const [suggestions, setSuggestions] = useState([])

  function get_location() {
    search_location(loc)
      .then(setSuggestions)
  }

  return <>
    <Buttons className='flex-container'>
      <InputWrapper className='flex-container' style={{gap: '.5em'}}>
        <Icon icon='search'/>
        <input
          type='text'
          value={loc} 
          onChange={e => setLoc(e.target.value)}
          placeholder='search location'/>
      </InputWrapper>
      <SearchButton onClick={get_location} children='Search'/>
    </Buttons>
    <Output className='flex-container'>
      {
        suggestions.map(suggestion => <Location
          key={suggestion.woeid}
          text={suggestion.title}
          select={() => {
            setWoeid(suggestion.woeid)
            setLoc('')
            closeSearch()
          }}
        />)
      }
    </Output>
  </>
}

const Buttons = styled.div`
  gap: .5em;
  align-items: stretch;
`
const InputWrapper = styled.label`
  --border: var(--secondary-color);
  padding: .5em;
  border: 1px solid var(--border);
  & input {
    width: 100%;
    border: none;
    background-color: transparent;
    outline: none;
  }
  &:focus-within {
    --border: var(--primary-color);
  }
`
const SearchButton = styled.button`
  color: var(--button-text-color);
  background-color: var(--search-button-background);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--button-active-color);
  }
`
const Output = styled.div`
  flex-flow: column nowrap;
  gap: .5em;
  padding: .5em;
  width: 100%;
`
