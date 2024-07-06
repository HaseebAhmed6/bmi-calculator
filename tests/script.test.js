const calculateBMI = require('../script.js');

test('calculates BMI correctly', () => {
  expect(calculateBMI(180, 75)).toBeCloseTo(23.15, 2);
});