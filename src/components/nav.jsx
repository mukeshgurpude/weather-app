import styled from 'styled-components'
import Icon from './icon'

export default function Sidebar() {
  return <Wrapper>
    <InputWrapper>
      <ButtonWrapper children={<button style={{
        background: 'transparent',
        border: 'none'
      }}>Search for places</button>} />
      <ButtonWrapper style={{borderRadius: '50%'}} children={<Icon icon='gps_fixed'/>} />
    </InputWrapper>
  </Wrapper>
}

const Wrapper = styled.div`
  background-color: var(--sidebar-background);
  height: 100%;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em
`
const ButtonWrapper = styled.div`
  background-color: var(--button-background);
  color: var(--button-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2em;
`
