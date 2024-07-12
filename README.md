# BMI Calculator

![Final design](./images/design/resulting_design.png)

You can view the deployed application [**here**](https://haseebahmed6.github.io/bmi-calculator/)

You can view the repository [**here**](https://github.com/HaseebAhmed6/bmi-calculator/tree/main)

## Project Overview

At my workplace, there is a huge focus on employee well-being, and as part of these efforts, we are creating a simple BMI (body mass index) calculator web app. This BMI-calculator web app will be part of our broader employee wellness program and will play a key part in our employees being able to monitor their health related to their weight. The wider goal of this web app is to promote a healthy lifestyle which includes the likes of dieting and exercise, leading to overall improved employee health and well-being.

A BMI (Body Mass Index) calculator is used to determine BMI of individuals, which is a numerical value calculated from their height and weight. The BMI can then be used to categorise individuals into different weight categories, such as underweight, normal weight, overweight, and obesity.

## Features

- **BMI Calculation**: Calculates the BMI value using the weight and height inputs.
- **BMI Categorisation**: Categorises into underweight, normal weight, overweight, and obesity based on the BMI value.
- **Reset Functionality**: Allows users to reset the input fields and results.

## User Documentation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- A modern web browser (e.g., Chrome, Firefox, Edge)

### Installation

1. Ensure node is installed:

   ```sh
   node -v
   ```

   if not already installed, click [here](https://nodejs.org/en/download/package-manager) to install Node

2. Ensure npm is installed:

   ```sh
   npm -v
   ```

3. Clone the repository:

   ```sh
   git clone https://github.com/HaseebAhmed6/bmi-calculator.git
   ```

4. Navigate to the project directory:

   ```sh
   cd bmi-calculator
   ```

5. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

To use the BMI Calculator:

### Accessing the Deployed Application

- Visit the deployed application [**here**](https://haseebahmed6.github.io/bmi-calculator/).

### Running Locally

- Open the `index.html` file in your preferred web browser.

### Using the Application

1. Enter your height in cm and weight in kg.
2. Use the **Calculate** button to get your BMI value and category.
3. Use the **Reset** button to clear the input fields and results.

### Running tests

```sh
npm test
```

## Requirement Analysis

### Functional Requirements

- **User input**
  - Weight (kg)
  - Height (cm)
- **Calculate button**
- **BMI calculation**
  - Calculate BMI using the formula:
    $$ \text{BMI} = \frac{\text{weight (kg)}}{\left(\frac{\text{height (cm)}}{100}\right)^2} $$
  - Display BMI value
- **BMI category**
  - Calculate the BMI category based on the value:
    - **Underweight:** BMI less than 18.5
    - **Normal weight:** BMI 18.5–24.9
    - **Overweight:** BMI 25–29.9
    - **Obese:** BMI 30 or greater
  - Display BMI category
- **Error handling**
  - Provide error messages for invalid input (e.g., negative values).
- **Reset button**
  - Allow the user to reset input fields and results

### Non-Functional Requirements

- **Performance**
  - Fast load time
  - Quick calculations
- **Usability**
  - Intuitive and user-friendly
  - Clear labels and instructions
- **Compatibility**
  - Support for major web browsers
- **Maintainability**
  - Clean and well-documented codebase
    cl - Use of version control for tracking changes
- **Security**
  - As soon as data is processed, it needs to be cleaned.

