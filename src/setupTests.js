// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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

global.fetch = ((url) => {
  if (url.includes('search')) {
    return Promise.resolve({
      json: () => Promise.resolve([{"title":"Pune","location_type":"City","woeid":2295412,"latt_long":"18.53611,73.85218"}])
    })
  }
  return Promise.resolve({
    json: () => Promise.resolve(weather_response)
  })
})
