export function getTemperature(temp_in_c, unit) {
  // If unit is C, return temp as it is, else convert to F
  if (unit === 'C') return temp_in_c;
  return Math.round((temp_in_c * 9) / 5 + 32);
}
