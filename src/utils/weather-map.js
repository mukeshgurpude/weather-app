const mapping = {
  Snow: 'sn',
  Sleet: 'sl',
  Hail: 'h',
  Thunderstorm: 't',
  'Heavy Rain': 'hr',
  'Light Rain': 'lr',
  Showers: 's',
  'Heavy Cloud': 'hc',
  'Light Cloud': 'lc',
  Clear: 'c'
}
const base_url = 'https://www.metaweather.com';

export function weatherToImage(weather) {
  // If length of weather is less than 3, it's short only, else mapping[capitalize(weather)]
  const short = weather.length < 3 ? weather : mapping[weather.charAt(0).toUpperCase() + weather.slice(1)]
  return `${base_url}/static/img/weather/${short}.svg`
}
