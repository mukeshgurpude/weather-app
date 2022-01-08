import styled from 'styled-components'
import Icon from './icon'

export default function Sidebar() {
  return <Wrapper className='secondary-color'>
    <InputWrapper>
      <ButtonWrapper children={<button style={{
        background: 'transparent',
        border: 'none'
      }}>Search for places</button>} />
      <ButtonWrapper style={{borderRadius: '50%'}} children={<Icon icon='gps_fixed'/>} />
    </InputWrapper>
    <Banner
      className='flex-container'
      children={<Image src='./images/Shower.png' alt=''/>} 
    />
    <h1 style={{fontSize: '48px'}}>
      <Text className='primary-color' children='15'/>
      <Text style={{fontSize: '36px'}} children='°c'/>
    </h1>
    <h2><Text children='Shower' /></h2>
    <About>
      <div className='flex-container' style={{
        justifyContent: 'space-between',
        gap: '.5em'
      }}>
        <span>Today</span>
        <span style={{fontWeight: 'bold'}}>·</span>
        <span>Fri, 5 Jun</span>
      </div>
      <div className='flex-container'>
        <Icon icon='location_on' />
        <span>Helsinki</span>
      </div>
    </About>
  </Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--sidebar-background);
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  gap: .8em;
  align-items: center;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  width: 100%;
`
const ButtonWrapper = styled.div`
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
