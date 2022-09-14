const capitalize = require("./capitalize");

test("Check capitalization", () => {
  expect(capitalize("lol")).toBe("LOL");
});
