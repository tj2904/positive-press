// takes a parameter for the number of decimal places, defaults to 0 if not provided
export function percentage(decimal: string, decimalPlaces: number = 0) {
  return `${(parseFloat(decimal) * 100).toFixed(decimalPlaces)}%`
}
