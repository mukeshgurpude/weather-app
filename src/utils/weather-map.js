function format(weather) {
  return weather
          .split(/\s/)
          .map(w => w[0].toUpperCase() + w.slice(1))
          .join('')
}

export function weatherToImage(weather) {
  return `./images/${format(weather)}.png`
}
