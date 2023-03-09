const Triangle  = require("./triangle");

describe("Triangle", () => {
  test("should render svg for a red triangle element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="160" font-size="50" text-anchor="middle" fill="blue">asd</text></svg>`
    const triangle = new Triangle("triangle", "red", "asd", "blue");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
describe("Triangle", () => {
  test("should render svg for a blue triangle element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="50" text-anchor="middle" fill="red">asd</text></svg>`
    const triangle = new Triangle("triangle", "blue", "asd", "red");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});