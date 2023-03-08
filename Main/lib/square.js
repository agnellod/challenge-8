const Shape = require("./shapes")

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor){
    super(shape, shapeColor, text, textColor)
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;