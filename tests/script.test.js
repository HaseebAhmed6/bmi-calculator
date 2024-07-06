const { calculateBMI, getBMICategory } = require('../script.js');

test('calculates BMI correctly', () => {
  expect(calculateBMI(180, 75)).toBeCloseTo(23.15, 2);
});

test('categorises BMI correctly', () => {
  expect(getBMICategory(18)).toBe('Underweight');
  expect(getBMICategory(21)).toBe('Normal weight');
  expect(getBMICategory(28)).toBe('Overweight');
  expect(getBMICategory(33)).toBe('Obesity');
});