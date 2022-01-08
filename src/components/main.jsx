import styled from 'styled-components'
import TempButton from './toggle_buttons'

export default function Main() {
  return <Wrapper className='flex-container'>
    <Temperature className='flex-container' >
      <TempButton text='°C' active />
      <TempButton text='°F' />
    </Temperature>
    <Daily />
    <Highlights />
    <Footer />
  </Wrapper>
}

const Wrapper = styled.div`
  flex-flow: column nowrap;
  gap: 1rem;
  justify-content: space-around;
  min-height: 100vh;
  padding: 0 5em;
  &>* {
    width: 100%;
  }
`
const Temperature = styled.div`
  justify-content: flex-end;
  gap: .5em;
`
const Daily = styled.div``
const Highlights = styled.div``
const Footer = styled.footer``
