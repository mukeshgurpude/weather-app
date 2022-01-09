import styled from 'styled-components'
import Card from './card'
import TempButton from './toggle_buttons'
import Highlights from './hightlights'
import { weatherToImage } from '../utils/weather-map'

const weathers = [
  {
    date: 'Tomorrow',
    weather: 'sleet',
    max: '16°C',
    min: '11°C',
  }, {
    date: 'Sun, 7 Jun',
    weather: 'sleet',
    max: '16°C',
    min: '11°C',
  }, {
    date: 'Mon, 8 Jun',
    weather: 'thunderstorm',
    max: '16°C',
    min: '11°C',
  }, {
    date: 'Tue, 9 Jun',
    weather: 'Light Cloud',
    max: '16°C',
    min: '11°C',
  }, {
    date: 'Wed, 10 Jun',
    weather: 'Heavy Rain',
    max: '16°C',
    min: '11°C',
  }
]

export function DailyCard({date, weather, max, min}) {
  return <Card
    header={<h3>{date}</h3>}
    content={<Image src={weatherToImage(weather)} alt={weather} />}
    footer={<MaxMin className='flex-container'>
      <span>{max}</span>
      <span className='secondary-color'>{min}</span>
    </MaxMin>}
  />
}

export default function Main() {
  return <Wrapper className='flex-container'>
    <Temperature className='flex-container' >
      <TempButton text='°C' active />
      <TempButton text='°F' />
    </Temperature>
    <Daily className='flex-container'>
      {
        weathers.map(({date, weather, max, min}) => (
          <DailyCard key={date} date={date} weather={weather} max={max} min={min} />
        ))
      }
    </Daily>
    <Highlights />
    <Footer />
  </Wrapper>
}

const Wrapper = styled.div`
  flex-flow: column nowrap;
  gap: 1rem;
  justify-content: space-around;
  height: 100%;
  padding: 0 5em;
  &>* {
    width: 100%;
  }
`
const Temperature = styled.div`
  justify-content: flex-end;
  gap: .5em;
`
const Daily = styled.div`
  gap: .5rem;
  justify-content: space-between;
  & h3 {
    margin: 0;
    margin-bottom: .5em;
    font-weight: normal;
  }
  & p {
    margin: 8px;
  }
`
const Footer = styled.footer``
const MaxMin = styled.p`
  width: 100%;
  justify-content: space-between;
`
const Image = styled.img`width: 3em;`
