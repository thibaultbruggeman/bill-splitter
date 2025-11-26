import {  expect, test } from "vitest";
import { BillSplitter } from "../bill-splitter";

test("Init Bill Splitter for two peoples and 100 bill amount", () => {
    const billSplitter = new BillSplitter(2, 100)

    expect(billSplitter.peoples.length).toBe(2)
    expect(billSplitter.billAmount).toBe(100)
})

test("Init Bill Splitter for two peoples and each people pay 50% of the bill", () => {
    const billSplitter = new BillSplitter(2, 100)

    billSplitter.peoples.forEach(x => {
        expect(x.billPercentage).toBe(50)
    })
    expect(billSplitter.peoples.length).toBe(2)
    expect(billSplitter.billAmount).toBe(100)
})