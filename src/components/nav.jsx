import styled from 'styled-components'
import Icon from './icon'

export default function Sidebar() {
  return <Wrapper>
    <InputWrapper>
      <button>Search for places</button>
      <Icon icon='gps_fixed' />
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
