const inquirer = require('inquirer');


class Shape {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'List',
                    name: 'shape',
                    message: 'Please select a shape:',
                    choices: [
                        "Square",
                        "Circle",
                        "Triangle"
                    ]

                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like the shape to be?'
                }
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
    }
    // render(){
    //     return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

    //     <circle cx="150" cy="100" r="80" fill="green"/>

    //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    //   </svg>`
    // }
}
module.exports = Shape;