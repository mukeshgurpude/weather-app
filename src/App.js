import React from 'react';
import styled from 'styled-components'

import Sidebar from './components/nav'
import Main from './components/main';

function App() {
  return <>
    <SidebarWrapper role='navigation' children={<Sidebar/>}/>
    <MainWrapper role='main' children={<Main/>}/>
  </>
}

const SidebarWrapper = styled.header`
  flex: 1;
`
const MainWrapper = styled.main`
  flex: 1;
  padding: 1em 0;
  max-width: 100%;
  @media(min-width: 600px) {
    flex: 3;
    min-height: 100vh;
  }
`

export default App;
