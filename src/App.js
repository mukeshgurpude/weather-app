import React from 'react';
import styled from 'styled-components'

import Sidebar from './components/nav'

function App() {
  return <>
    <SidebarWrapper role='navigation' children={<Sidebar/>}/>
    <MainWrapper role='main'/>
  </>
}

const SidebarWrapper = styled.header`
  flex: 1;
`
const MainWrapper = styled.main`
  flex: 1;
  @media(min-width: 600px) {
    flex: 3;
    height: 100vh;
  }
`

export default App;
