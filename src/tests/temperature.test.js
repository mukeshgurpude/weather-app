import { getTemperature } from "../utils/temperature";

const expected = [
  [0, 32],
  [3, 37],
  [30, 86]
]
it('Should return correct temperature', () => {
  expected.forEach(([temp_in_c, temp_in_f]) => {
    expect(getTemperature(temp_in_c, 'C')).toBe(temp_in_c);
    expect(getTemperature(temp_in_c, 'F')).toBe(temp_in_f);
  })
})
