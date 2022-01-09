import styled from 'styled-components'
import Card from './card'
import { WindSpeed } from './h_component'

function HighlightCard({title, metric, Footer}) {
  const match = metric?.match(/[\s\D%]+$/)
  const value = metric?.substr(0, match.index)

  return <CardWrapper className='flex-container'>
    <h4>{title}</h4>
    <h5>
      { 
      metric && <>
        <span className='primary-color'>{value}</span>
        <span>{match[0]}</span>
      </>
      }
    </h5>
    {Footer}
  </CardWrapper>
}

export default function Highlights() {
  return <Container className='flex-container'>
    <h3>Today's Highlights</h3>
    <Row className='flex-container'>
      <HighlightCard title='Wind status' metric='7mph' Footer={<WindSpeed rotation={150} direction='WSW'/>} />
      <HighlightCard title='Humidity' metric='84%' />
    </Row>
    <Row className='flex-container'>
      <HighlightCard title='Visibility' metric='6,4 miles' />
      <HighlightCard title='Air Pressure' metric='998 mb' />
    </Row>
  </Container>
}

const CardWrapper = styled.article`
  flex-flow: column nowrap;
  background-color: var(--sidebar-background);
  flex: 1;
  color: var(--secondary-color);
  padding: 1em .5em;
`
const Container = styled.section`
  flex-flow: column;
  gap: 2em;
`
const Row = styled.div`
  gap: 2em;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
`
