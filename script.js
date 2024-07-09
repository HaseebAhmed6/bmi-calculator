// Function to calculate BMI and validate inputs
function calculateBMI(height, weight) {
  if (!height || !weight) {
      throw new Error('Please enter values for height and weight.');
  }
  else if (height <= 0 || weight <= 0) {
      throw new Error('Height and weight must be greater than 0.');
  }
  else {
      height = height / 100; // Convert height from cm to meters
      return (weight / (height * height)).toFixed(2); // Calculate and return BMI value rounded to 2 decimal places
  }
}

// Function to determine BMI category based on BMI value
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
  
// Add event listeners for buttons if running in a browser environment
if (typeof document !== 'undefined') {
  document.getElementById('calculate-btn').addEventListener('click', () => {
    try {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        const bmiValue = calculateBMI(height, weight);  // Calculate BMI
        document.getElementById('bmi-value').innerText = bmiValue;

        const bmiCategory = getBMICategory(parseFloat(bmiValue)); // Get BMI category
        document.getElementById('bmi-category').innerText = bmiCategory;
    } catch (error) {
        document.getElementById('bmi-value').innerText = '';
        document.getElementById('bmi-category').innerText = '';
        alert(error.message); // Show error message
    }
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('bmi-form').reset(); // Reset form fields
    document.getElementById('bmi-value').innerText = ''; // Reset the bmi value by setting it to nothing
    document.getElementById('bmi-category').innerText = ''; // Reset the category by setting it to nothing
  });
}
  
// Export functions for testing
module.exports = {
    calculateBMI,
    getBMICategory
  };


