const { calculateBMI, getBMICategory } = require('../script.js');

// Integration test
describe('BMI Calculator Integration Test', () => {

  test('should calculate and categorise BMI from input values', () => {
    // Simulate input values
    const height = 180;  // in cm
    const weight = 75;   // in kg

    // Call calculateBMI function
    const bmiValue = calculateBMI(height, weight);
    expect(bmiValue).toBe("23.15");

    // Call getBMICategory function
    const bmiCategory = getBMICategory(parseFloat(bmiValue));
    expect(bmiCategory).toBe("Normal weight");
  });

});