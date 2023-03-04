const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  /**
   * packages - what tools do i need for this
   * -install jest and inquirer
   * 
   * Entry way to application index.js
   * Instantiate a new Menu class object here and run the main function
   * 
   * 
   * classes:
   * 1. Menu class -Ask the question for the prompt
   *  1a. we need to have a main method and everything will go in here
   *  
   *  1b. collect user input with inquirer prompts (put this into an object) .then(({text, textColor, shape, shapeColor})
   *    1ba. Text from the logo
   *    1bb. Text color
   *    1bc. shape type
   *    1bd. shape color 
   *  
   * 1c.Which shape did the user select?
   *    1ca. Instantiate a new shape object with the chosen shape (use a switch statment or if )
   *    1cb. using the object, set the color
   *  
   * 
   *  1d. Instantiate a new SVG object with the text AND the shape selected
   *  
   * 
   *  1e. Write to file our final SVG product called 'logo.svg'
   *
   * 
   * 2. Shape (color)
   *      this.color = color
   *  2a. circle (classes, render())
   *  2b. square (classes, render())
   *  2c. triangle (classes, render())
   *
   * 
   * 3. SVG class (text, shape, render())
   * 
   * 
   */