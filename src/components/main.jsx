import { useState } from 'react'
import styled from 'styled-components'
import Card from './card'
import TempButton from './toggle_buttons'
import Highlights from './hightlights'
import { weatherToImage } from '../utils/weather-map'
import { getTemperature } from '../utils/temperature'

export function DailyCard({date, weather, max, min, unit}) {
  return <Card
    header={<h3>{date}</h3>}
    content={<Image title={weather} src={weatherToImage(weather)} alt={weather} />}
    footer={<MaxMin className='flex-container'>
      <span>{getTemperature(max, unit)}°{unit}</span>
      <span className='secondary-color'>{getTemperature(min, unit)}°{unit}</span>
    </MaxMin>}
  />
}

export default function Main({weather}) {
  const [unit, setUnit] = useState('C')

  return <Wrapper className='flex-container'>
    <Temperature className='flex-container' >
      <TempButton text='°C' active={unit === 'C'} onClick={() => setUnit('C')} />
      <TempButton text='°F' active={unit === 'F'} onClick={() => setUnit('F')} />
    </Temperature>
    <Daily className='flex-container'>
      {
        weather.week.map(({date, weather, max, min}) => (
          <DailyCard key={date} date={date} weather={weather} max={max} min={min} unit={unit} />
        ))
      }
    </Daily>
    <Highlights data={weather.today} />
    <Footer>created by <a href='https://github.com/mukeshgurpude'>@mukeshgurpude</a> - devChallenges.io</Footer>
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
  flex-flow: wrap;
  & h3 {
    margin: 0;
    margin-bottom: .5em;
    font-weight: normal;
  }
  & p {
    margin: 8px;
  }
`
const Footer = styled.footer`
  text-align: center;
  color: var(--secondary-color);
  & a {
    color: var(--primary-color);
  }
`
const MaxMin = styled.p`
  width: 100%;
  justify-content: space-between;
`
const Image = styled.img`width: 3em;`
