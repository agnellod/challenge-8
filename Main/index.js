const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');
const inquirer = require('inquirer');
const fs = require('fs');

function run() {
  return inquirer
      .prompt([
          {
              type: 'list',
              name: 'shape',
              message: 'Please select a shape:',
              choices: [
                  "Square",
                  "Circle",
                  "Triangle",
              ]

          },
          {
              type: 'input',
              name: 'shapeColor',
              message: 'What color would you like the shape to be?'
          },
          {
              type: 'input',
              name: 'text',
              message: 'What do you want the logo text to be?'
          },
          {
              type: 'input',
              name: 'textColor',
              message: 'What color do you want the text color to be?'
          }
      ])
      .then(({shape, shapeColor, text, textColor}) => {
        let userShape
          switch (shape) {
            case "Circle":
              userShape = new Circle(shape, shapeColor, text, textColor)
              break
            case "Square":
              userShape = new Square(shape, shapeColor, text, textColor)
              break
            case "Triangle":
              userShape = new Triangle(shape, shapeColor, text, textColor)
              


          }
        fs.writeFile('logo.svg', userShape.render(), (err) =>
          err ? console.log(err) : console.log('Successfully created Logo!')
        );
          
      })
      .catch((error) => {
          if (error.isTtyError) {

          } else {
            
          }
      });
}
run();
  