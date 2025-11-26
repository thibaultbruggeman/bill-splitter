const numberOfPeople = 2
const billAmount = 123

const percentagePerPeople = 100 / numberOfPeople

for (let i = 1; i <= numberOfPeople; i++) {
  let amountPerPeople = billAmount * (percentagePerPeople / 100)

  console.log(i, amountPerPeople)
}

export class BillSplitter {
  peoples: People[] = []
  billAmount = 0

  constructor(numberOfPeople: number, billAmount: number) {
    this.billAmount = billAmount

    for (let i = 1; i <= numberOfPeople; i++) {
      this.peoples.push(new People(100 / numberOfPeople))
    }
  }
}

export class People {
  billPercentage

  constructor(billPercentage: number) {
    if (!billPercentage) {
      throw new Error()
    }
    this.billPercentage = billPercentage
  }
}

const bs = new BillSplitter(numberOfPeople, billAmount)
