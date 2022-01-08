export default function Icon({icon, className}) {
  return <span
    className={'material-icons' + (className?` ${className}`:'')}>
    {icon}
  </span>
}
