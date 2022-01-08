import styled from "styled-components"

export default function Card({header, content, footer}) {
  return <Wrapper className='flex-container' role='region'>
    {header}
    {content}
    {footer}
  </Wrapper>
}

const Wrapper = styled.article`
  flex-flow: column nowrap;
`
