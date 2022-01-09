import Icon from './icon'
import { ButtonWrapper } from './nav'

export function WindSpeed({rotation, direction}) {
  return <div className='flex-container' style={{gap: '.5em'}}>
    <ButtonWrapper
      className='flex-container'
      style={{borderRadius: '50%', width: '1.5em', height: '1.5em'}}
      children={
      <Icon
        icon='near_me'
        className='flex-container'
        style={{fontSize: '1em',transform: `rotate(${rotation + 34}deg)`}}
      />}
    />
    <span>{direction}</span>
  </div>
}
