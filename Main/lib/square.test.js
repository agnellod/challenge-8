const Square  = require("./square");

describe("Square", () => {
  test("should render svg for a red square element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="150" fill="red"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">asd</text></svg>`
    const square = new Square("square", "red", "asd", "blue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
describe("Square", () => {
  test("should render svg for a blue square element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="150" fill="blue"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="red">asd</text></svg>`
    const square = new Square("square", "blue", "asd", "red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});