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

## Design

Figma was used to create designs ranging from the initial wireframe design to highly detailed mock-up designs. The designs include the input fields, buttons and a result section to display the outputs.

### Wireframe Design

![Wireframe design](./images/design/wireframe.png)

### Detailed Mockup Designs

Design 1

![Mockup design 1](./images/design/mockup_design1.png)

Design 2

![Mockup design 2](./images/design/mockup_design2.png)

Design 3

![Mockup design 2](./images/design/mockup_design3.png)

Design 3 was chosen as the final design due to its clean and minimalistic layout with the container containing all the components. The white container enhances visual clarity due to the contrasting background which ensures the functional components of the app stand out. In addition, the contrasting colours can also be seen for the reset and calculate buttons, where they enhance visual clarity and make the navigation process very simple for the user overall.

## Project Management

GitHub projects was used to manage the project overall by implementing agile methodology. In particular, scrum methodology was implemented to structure the project using sprints. Overall, the project was split into two sprints, where the first sprint focused on designing and creating basic HTML and CSS, and the second sprint focused on functionality using JavaScript, testing and documentation for the calculator. Below is a screenshot of our GitHub project board around the timeline of when sprint 1 was near its ending, and sprint 2 was about to start.

![Github Projects](./images/project_management/github_projects.png)

In order to track the progress of tickets, the GitHub projects board was customised to host sections ranging from backlog, to-do and in progress to review/testing and done. This ensured I could clearly visualise the progress of the overall development in the form of tickets relative to different stages and also other tickets on the board. In addition, the tickets were also tagged with labels for further clarity around the purpose of a ticket as well as linked PRs (pull requests) to illustrate explicit connection to the code being developed. Each ticket also had a branch associated with it to separate the overall development into smaller interconnected chunks. Furthermore, a strict format and structure was followed to create stories for the development of this BMI calculator which can be seen below.

![Story structure](./images/project_management/story_structure.png)

Following a strict structure for each story ensures every story is similar in format and hence leading to overall consistency in tracking and management of the project. The format contained three sections:

### Background

The background section is used to provide overall context behind the need of the ticket. This may include explaining the current situation and why this task as part of this ticket is necessary, e.g. explaining a bug in the system.

### User Story

A use story aims to break down the task into a simple description by looking at it from the perspective of a specific stakeholder. This helps in aligning the overall focus for the task with a certain stakeholder and how it delivers value to the overall objective of the project.

### Acceptance criteria

The acceptance criteria aims to define clear conditions which must be met for the ticket to be considered done. This section helps avoid overall misunderstanding in the scope of the ticket and ensures everyone is clearly aligned on the expected outcome of the ticket.

