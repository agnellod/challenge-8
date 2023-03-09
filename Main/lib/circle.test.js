const Circle  = require("./circle");

describe("Circle", () => {
  test("should render svg for a red circle element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">asd</text></svg>`
    const circle = new Circle("circle", "red", "asd", "blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
describe("Circle", () => {
  test("should render svg for a red circle element", () => {
    const expectedSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="red">asd</text></svg>`
    const circle = new Circle("circle", "blue", "asd", "red");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});