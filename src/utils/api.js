const BASE_URL = 'https://cors-anywhere.herokuapp.com/metaweather.com'

export async function search_location(query) {
  const search = query.includes(',')?'lattlong':'search'
  return fetch(`${BASE_URL}/api/location/search/?${search}=${query}`)
    .then(res => res.json())
    .then(data => data.map(item => ({woeid: item.woeid, title: item.title})))
}

export async function get_weather(woeid) {

  function map_items(day) {
    return {
      date: new Date(day.applicable_date).toLocaleString('en-US', {weekday: 'short', day: 'numeric', month: 'short'}),
      weather: day.weather_state_name,
      max: Math.round(day.max_temp),
      min: Math.round(day.min_temp)
    }
  }

  return fetch(`${BASE_URL}/api/location/${woeid}/`)
    .then(res => res.json())
    .then(data => {
      const weather = {}
      weather.title = data.title
      weather.week = data.consolidated_weather.slice(1).map(map_items)
      weather.week[0].date = 'Tomorrow'

      const today = data.consolidated_weather[0]
      weather.today = {
        ...today,
        date: new Date(today.applicable_date).toLocaleString('en-US', {weekday: 'short', day: 'numeric', month: 'short'}),
        wind_speed: Math.round(today.wind_speed),
        visibility: Math.round(today.visibility*10)/10,
        air_pressure: Math.round(today.air_pressure)
      }

      return weather
    })
}
