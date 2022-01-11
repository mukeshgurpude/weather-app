import styled from "styled-components"

export default function TempButton({text, active, ...props}) {
  return <Button active={!!active} {...props}>{text}</Button>
}

const Button = styled.button`
  background-color: var(--button-background);
  color: var(--button-text-color);
  width: max-content;
  padding: .5em;
  border-radius: 50%;
  border: none;
  font-weight: bold;
  ${({active}) => active
    && 
    `color: var(--button-active-color);
    background-color: var(--button-active-background);
    cursor: not-allowed;`
  }
`
