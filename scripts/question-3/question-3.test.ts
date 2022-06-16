// Answers Q3

//  the discount percentage from a normal price of 15% = 85
 

import { getDiscountPercentage } from "./question-3.js";

test('the discount percentage from a normal price', () =>{

  expect(getDiscountPercentage(100, 15)).toBe(85);
})

// and a discounted price of 80% = 20
test('the discounted price', () =>{

  expect(getDiscountPercentage(100, 80)).toBe(20);
})

// Converts a value to 2 decimal spaces

import { formatDecimalSpaces } from "./question-3.js";

test('Amount converted', () =>{
  expect(formatDecimalSpaces(20.4566)).toBe(20.46);
})

// Converts a value to or from Krone

import { convertKrone } from "./question-3.js";

test('Converts a value to or from Krone', () =>{
  expect(convertKrone(50)).toBe(509 || 4.91);
})

// Calculates the tax for an amount given

import { calculateTax } from "./question-3.js";

test('Amount with tax applied', ()=>{
  expect(calculateTax(100)).toBe(125);
})