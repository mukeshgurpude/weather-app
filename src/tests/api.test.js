import { search_location, get_weather } from "../utils/api";

const weather_response = {
  title: 'Pune, India',
  consolidated_weather: [
    {
      applicable_date: '2020-06-06',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      min_temp: 14.7,
      max_temp: 21.1,
      the_temp: 19.1
    },
    {
      applicable_date: '2020-06-07',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      min_temp: 14.7,
      max_temp: 21.1,
      the_temp: 19.1
    },
    {
      applicable_date: '2020-06-08',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      min_temp: 14.7,
      max_temp: 21.1,
      the_temp: 19.1
    },
    {
      applicable_date: '2020-06-09',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      min_temp: 14.7,
      max_temp: 21.1,
      the_temp: 19.1
    },
    {
      applicable_date: '2020-06-10',
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      min_temp: 14.7,
      max_temp: 21.1
    }
  ]
}

fetch = ((url) => {
  if (url.includes('search')) {
    return Promise.resolve({
      json: () => Promise.resolve([{"title":"Pune","location_type":"City","woeid":2295412,"latt_long":"18.53611,73.85218"}])
    })
  }
  return Promise.resolve({
    json: () => Promise.resolve(weather_response)
  })
})

it('Searching a location', () => {
  return search_location('Pune')
    .then(data => {
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].woeid).toBeDefined()
      expect(data[0].title).toBeDefined()
    })
})

it('Search with coordinates', () => {
  return search_location('18.6787247,73.8860444')
  .then(data => {
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].woeid).toBeDefined()
    expect(data[0].title).toBeDefined()
  })
})

it('Get weather for a location', () => {
  return get_weather(2487956)
    .then(data => {
      expect(data.title).toBeDefined()
      expect(data.week.length).toBeGreaterThan(0)
      expect(data.week[0].date).toBeDefined()
      expect(data.week[0].weather).toBeDefined()
      expect(data.week[0].max).toBeDefined()
      expect(data.week[0].min).toBeDefined()
      expect(data.today.date).toBeDefined()
      expect(data.today.wind_speed).toBeDefined()
      expect(data.today.visibility).toBeDefined()
      expect(data.today.air_pressure).toBeDefined()
    })
})
