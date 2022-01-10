import styled from 'styled-components'
import { weatherToImage } from '../utils/weather-map'
import Icon from './icon'

export default function QuickView({openSearch, weather}) {
  return <>
    <InputWrapper>
      <ButtonWrapper onClick={openSearch} children={<button style={{
        background: 'transparent',
        border: 'none',
        height: '100%',
        width: '100%',
        cursor: 'pointer'
      }}>Search for places</button>} />
      <ButtonWrapper style={{borderRadius: '50%'}} children={<Icon icon='gps_fixed'/>} />
    </InputWrapper>
    <Banner
      className='flex-container'
      children={<Image src={weatherToImage(weather.today.weather_state_name)} alt=''/>}
    />
    <h1 style={{fontSize: '48px'}}>
      <Text className='primary-color' children='15'/>
    <Text style={{fontSize: '36px'}} children='°c'/>
    </h1>
    <h2><Text children={weather.today.weather_state_name} /></h2>
    <About>
      <div className='flex-container' style={{
        justifyContent: 'space-between',
        gap: '.5em'
      }}>
        <span>Today</span>
        <span style={{fontWeight: 'bold'}}>·</span>
        <span>{weather.today.date}</span>
      </div>
      <div className='flex-container'>
        <Icon icon='location_on' />
        <span>{weather.title}</span>
      </div>
    </About>
  </>
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  width: 100%;
`
export const ButtonWrapper = styled.div`
  background-color: var(--button-background);
  color: var(--button-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2em;
  cursor: pointer;
`
const Banner = styled.div`
  background: var(--sidebar-background);
  background-image: url(./images/Cloud-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;

  width: 100%;
`
const Image = styled.img`
  max-width: 100%;
  transform: scale(.6);
`
const Text = styled.span``
const About = styled.div`
  display: flex;
  flex-flow: column;
  gap: .2em;
`
