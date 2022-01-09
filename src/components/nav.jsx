import { useState } from 'react'
import styled from 'styled-components'
import QuickView from './quick-view'
import Search from './search'

export default function Sidebar() {

  const [isSearchOpen, setSearch] = useState(false)
  const [location, setLocation] = useState('Helsinki')

  return <Wrapper className='secondary-color'>
    {
      isSearchOpen
      ?
      <Search
        closeSearch={() => setSearch(false)}
        location={location}
        setLocation={setLocation}
      />
      :
      <QuickView
        openSearch={() => setSearch(true)}
        location={location}
        setLocation={setLocation}
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
`
