import { useState } from 'react'
import styled from 'styled-components'
import QuickView from './quick-view'
import Search from './search'

export default function Sidebar({setWoeid, weather}) {

  const [isSearchOpen, setSearch] = useState(false)

  return <Wrapper className='secondary-color' search={isSearchOpen} >
    {
      isSearchOpen
      ?
      <Search
        closeSearch={() => setSearch(false)}
        setWoeid={setWoeid}
      />
      :
      <QuickView
        openSearch={() => setSearch(true)}
        weather = {weather}
        setWoeid={setWoeid}
      />
    }
  </Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--sidebar-background);
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  gap: .8em;
  align-items: center;

  ${({search}) => search
    && 
  `justify-content: flex-start; padding: 1em;`
  }
  @media (max-width: 600px) {
    min-height: 100vh;
  }
`
