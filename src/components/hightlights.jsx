import styled from 'styled-components'
import Card from './card'
import { WindSpeed } from './h_component'

function HighlightCard({title, metric, Footer}) {
  const match = metric?.match(/[\s\D%]+$/)
  const value = metric?.substr(0, match.index)

  return <CardWrapper className='flex-container'>
    <Title>{title}</Title>
    <Metric>
      { 
      metric && <>
        <span className='primary-color'>{value}</span>
        <span>{match[0]}</span>
      </>
      }
    </Metric>
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
  justify-content: flex-start;
  background-color: var(--sidebar-background);
  flex: 1;
  color: var(--secondary-color);
  padding: 1em .5em;
  gap: .5em;
`
const Container = styled.section`
  flex-flow: column;
  gap: 2em;

  & h3 {
    font-size: 1.5em;
    font-weight: 400;
    color: var(--primary-color);
    margin: 0;
    width: 100%;
  }
`
const Row = styled.div`
  gap: 2em;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
`

const Title = styled.span`
  font-size: 1.2em;
`
const Metric = styled.div`
  font-size: 24px;

  & > span:first-child {
    font-size: 36px;
    font-weight: bold;
  }
`
