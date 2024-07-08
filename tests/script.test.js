const { calculateBMI, getBMICategory } = require('../script.js');

describe('BMI Calculator', () => {
    test('calculates BMI correctly for valid inputs', () => {
        expect(calculateBMI(180, 75)).toBeCloseTo(23.15, 2);
    });
    test('throws an error if height or weight is missing ', () => {
        expect(() => calculateBMI(null, 75)).toThrow('Please enter values for height and weight.');
        expect(() => calculateBMI(180, null)).toThrow('Please enter values for height and weight.');
    });
    
    test('throws an error if height or weight is set to 0 ', () => {
        expect(() => calculateBMI(0, 75)).toThrow('Please enter values for height and weight.');
        expect(() => calculateBMI(180, 0)).toThrow('Please enter values for height and weight.');
    });
});


test('categorises BMI correctly', () => {
  expect(getBMICategory(18)).toBe('Underweight');
  expect(getBMICategory(21)).toBe('Normal weight');
  expect(getBMICategory(28)).toBe('Overweight');
  expect(getBMICategory(33)).toBe('Obesity');
});