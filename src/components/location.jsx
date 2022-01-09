import styled from 'styled-components'
import Icon from './icon'

export default function Location({text, select}) {
  return <Wrapper className='flex-container' onClick={() => select(text)}>
    <span>{text}</span>
    <Icon icon='chevron_right'/>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: .5em;
  padding: .5em;
  justify-content: space-evenly;
  width: 100%;
`
