import type { People } from '../types'

export const splitBill = (
  numberOfPeoples: number,
  billAmount: number,
  peoples: People[]
): People[] => {
  if (peoples.length) {
    return peoples
  }

  const result: People[] = []

  const percentagePerPeople = 100 / numberOfPeoples

  let rest = 0

  for (let i = 1; i <= numberOfPeoples; i++) {
    const amountToPay = billAmount * (percentagePerPeople / 100)

    rest += amountToPay % 1
    result.push({
      position: i,
      billPercentage: percentagePerPeople,
      amountToPay: Math.trunc(billAmount * (percentagePerPeople / 100)),
    })
  }

  result.forEach((x, idx) => {
    if (idx !== numberOfPeoples - 1) {
      return
    }
    x.amountToPay += rest
  })

  return result
}
