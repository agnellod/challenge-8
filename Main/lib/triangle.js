const Shape = require("./shapes");

class Triangle extends Shape {
    constructor(shape, shapeColor, text, textColor){
    super(shape, shapeColor, text, textColor)
    }
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"/>
        
    <${this.shape} points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" fill="${this.shapeColor}" />
    
    <text x="10" y="10" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
    }
}
 module.exports = Triangle;