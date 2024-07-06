function calculateBMI(height, weight) {
    height = height / 100; // Convert height from cm to meters
    return weight / (height * height);
  }
  
  function getBMICategory(bmiValue) {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return 'Overweight';
    } else if (bmiValue >= 30) {
      return 'Obesity';
    }
  }
  
  module.exports = {
    calculateBMI,
    getBMICategory
};