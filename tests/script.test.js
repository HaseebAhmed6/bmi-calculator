const { calculateBMI, getBMICategory } = require('../script.js');

describe('calculateBMI function', () => {
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

    test('throws an error if height or weight is negative', () => {
        expect(() => calculateBMI(-180, 75)).toThrow('Height and weight must be greater than 0.');
        expect(() => calculateBMI(180, -75)).toThrow('Height and weight must be greater than 0.');
    });
});

describe('getBMICategory function', () => {
    test('returns "Underweight" for BMI < 18.5', () => {
        expect(getBMICategory(18)).toBe('Underweight');
    });

    test('returns "Normal weight" for BMI between 18.5 and 24.9', () => {
        expect(getBMICategory(21)).toBe('Normal weight');
    });

    test('returns "Overweight" for BMI between 25 and 29.9', () => {
        expect(getBMICategory(28)).toBe('Overweight');
    });

    test('returns "Obesity" for BMI >= 30', () => {
        expect(getBMICategory(33)).toBe('Obesity');
    });
});