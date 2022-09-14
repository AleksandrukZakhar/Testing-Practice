const encrypt = require("./encrypt");

test("Check 1 letter shift", () => {
  expect(encrypt("lol", 1)).toBe("mpm");
});

test("Check z letter", () => {
  expect(encrypt("z", 1)).toBe("a");
});
