const {Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
    const circle = new Circle("circle", "red", "test", );
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});