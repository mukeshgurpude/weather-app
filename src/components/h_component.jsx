import styled from 'styled-components'
import Icon from './icon'
import { ButtonWrapper } from './quick-view'

export function WindSpeed({rotation, direction}) {
  return <div className='flex-container' style={{gap: '.5em'}}>
    <ButtonWrapper
      className='flex-container'
      style={{borderRadius: '50%', width: '1.5em', height: '1.5em'}}
      children={
      <Icon
        icon='near_me'
        className='flex-container'
        style={{fontSize: '1em',transform: `rotate(${parseFloat(rotation) + 40}deg)`}}
      />}
    />
    <span>{direction}</span>
  </div>
}

export function HumidityBar({value}) {
  return <Wrapper>
    <span>0</span>
    <span>50</span>
    <span>100</span>
    <span>%</span>
    <Progress><Filled value={value} /></Progress>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  max-width: 20em;
  position: relative;

  & span {
    position: absolute;
    top: -.2em;
    &:nth-child(1) {left: 1em;}
    &:nth-child(2) {left: calc(50% - 1em);}
    &:nth-child(3) {right: 1em;}
    &:nth-child(4) {right: 1em; top: unset; bottom: 0;}
  }
`
const Progress = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  height: 8px;
  border-radius: 8px;
`
const Filled = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: var(--progressbar-background);
  border-radius: 8px;
`
