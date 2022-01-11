import { search_location, get_weather } from "../utils/api";

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
