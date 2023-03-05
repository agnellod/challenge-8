const Shape = require("./shapes")

class Circle extends Shape {
    constructor(shape, shapeColor, text, textColor);
    super(shape, shapeColor, text, textColor)

    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"/>

 <${this.shape} cx="25" cy="75" r="20" fill="${this.shapeColor}"/>

 <text x="10" y="10" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`
    }
}




module.exports = Circle;