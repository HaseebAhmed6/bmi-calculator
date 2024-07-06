function calculateBMI(height, weight) {
    height = height / 100; // Convert height from cm to meters
    return weight / (height * height);
  }
  
  module.exports = calculateBMI;