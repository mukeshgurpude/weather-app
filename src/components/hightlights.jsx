import styled from 'styled-components'
import { WindSpeed, HumidityBar } from './h_component'

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

export default function Highlights({data}) {
  return <Container className='flex-container'>
    <h3>Today's Highlights</h3>
    <Row className='flex-container'>
      <HighlightCard title='Wind status' metric={`${data.wind_speed}mph`} Footer={<WindSpeed rotation={data.wind_direction} direction={data.wind_direction_compass}/>} />
      <HighlightCard title='Humidity' metric={`${data.humidity}%`} Footer={<HumidityBar value={data.humidity} />} />
    </Row>
    <Row className='flex-container'>
      <HighlightCard title='Visibility' metric={`${data.visibility} miles`} />
      <HighlightCard title='Air Pressure' metric={`${data.air_pressure} mb`} />
    </Row>
  </Container>
}

const CardWrapper = styled.article`
  flex-flow: column nowrap;
  justify-content: space-evenly;
  background-color: var(--sidebar-background);
  flex: 1;
  color: var(--secondary-color);
  padding: 1em .5em;
  gap: .5em;
`
const Container = styled.section`
  flex-flow: column;
  gap: 2em;

  &>div.flex-container {
    flex-flow: wrap;
  }

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
