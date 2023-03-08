const Shape = require("./shapes")

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor){
    super(shape, shapeColor, text, textColor)
    }
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} x="150" y="100" width="30" height="30" fill="${this.shapeColor}"/>
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;