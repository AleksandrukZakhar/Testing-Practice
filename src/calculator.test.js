const calculator = require("./calculator");
const add = calculator.add;
const subtract = calculator.subtract;
const divide = calculator.divide;
const multiply = calculator.multiply;

test("Check addition", () => {
  expect(add(9, 8)).toBe(17);
});

test("Check substract", () => {
  expect(subtract(15, 7)).toBe(8);
});

test("Check divide", () => {
  expect(divide(60, 6)).toBe(10);
});

test("Check multiply", () => {
  expect(multiply(6, 8)).toBe(48);
});
