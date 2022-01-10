import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import Sidebar from './components/nav'
import Main from './components/main';
import { get_weather } from './utils/api';

function App() {
  const [woeid, setWoeid] = useState('')
  const [weather, setWeather] = useState({
    title: 'Helinski',
    week: [
      {
        date: 'Tomorrow',
        weather: 'sleet',
        max: '16',
        min: '11',
      }, {
        date: 'Sun, 7 Jun',
        weather: 'sleet',
        max: '16',
        min: '11',
      }, {
        date: 'Mon, 8 Jun',
        weather: 'thunderstorm',
        max: '16',
        min: '11',
      }, {
        date: 'Tue, 9 Jun',
        weather: 'Light Cloud',
        max: '16',
        min: '11',
      }, {
        date: 'Wed, 10 Jun',
        weather: 'Heavy Rain',
        max: '16',
        min: '11',
      }
    ],
    today: {
      the_temp: '15',
      date: (new Date()).toLocaleString('en-US', {weekday: 'short', day: 'numeric', month: 'short'}),
      weather_state_name: 'Shower',
      weather_state_abbr: 's',
      wind_speed: '5',
      wind_direction_compass: 'WSW',
      wind_direction: '277',
      humidity: '83',
      visibility: '6.4',
      air_pressure: '998',
    }
  })

  useEffect(() => {
    if(!woeid) return
    get_weather(woeid)
      .then(data => setWeather(data))
  }, [woeid])

  return <>
    <SidebarWrapper role='navigation' children={<Sidebar woeid={woeid} setWoeid={setWoeid} weather={weather}/>}/>
    <MainWrapper role='main' children={<Main weather={weather}/>}/>
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
