export default function Icon({icon, className, style}) {
  return <span
    className={'material-icons' + (className?` ${className}`:'')}
    style={style}
    >
    {icon}
  </span>
}
