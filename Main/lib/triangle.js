const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(shape, shapeColor, text, textColor){
    super(shape, shapeColor, text, textColor)
}
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">  
        '<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="160" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}
 module.exports = Triangle;