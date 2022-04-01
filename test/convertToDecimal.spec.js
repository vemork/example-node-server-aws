import convertToDecimal from "../libs/convertToDecimal.js";

describe("convertToDecimalTest", () => {
  test("replace A to 1", () => {
    expect(convertToDecimal("A")).toBe(1);
  });
});
describe("convertToDecimalTest", () => {
  test("replace C to 2", () => {
    expect(convertToDecimal("C")).toBe(2);
  });
});
describe("convertToDecimalTest", () => {
  test("replace G to 3", () => {
    expect(convertToDecimal("G")).toBe(3);
  });
});
describe("convertToDecimalTest", () => {
  test("replace T to 4", () => {
    expect(convertToDecimal("T")).toBe(4);
  });
});
describe("convertToDecimalTest", () => {
  test("replace other letter to -1", () => {
    expect(convertToDecimal("F")).toBe(-1);
  });
});
