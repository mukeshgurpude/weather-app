import {weatherToImage} from '../utils/weather-map'

it('Returns valid image for weather', () => {
  const url = weatherToImage('Snow')
  fetch(url)
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.type).toMatch(/^image/)
    })
})
it('Returns valid image for lowercase weathers', () => {
  const url = weatherToImage('snow')
  fetch(url)
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.type).toMatch(/^image/)
    })
})
it('Returns valid image for abbreviated weather', () => {
  const url = weatherToImage('s')
  fetch(url)
    .then(res => {
      expect(res.status).toBe(200)
      expect(res.type).toMatch(/^image/)
    })
})
