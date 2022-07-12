export function getDollars(cents) {
  // return `$${Math.floor(cents / 100)}.${cents % 100}`
  return cents / 100
}

export function getCents(dollars) {
  return Math.round(dollars * 100)
}