import dnaCodificate from "../libs/dnaCodificate.js";

describe("change a dna chain", () => {
  test("replace letters by nums", () => {
    const dna = ["ACGT", "ACGT", "ACGT", "ACGT"];
    const dnaExpected = [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]]
    expect(dnaCodificate(dna)).toStrictEqual(dnaExpected);
  });
});

describe("change a dna chain", () => {
  test("replace letters by nums", () => {
    const dna = ["ACGTAC", "ACGTAC", "ACGTAC", "ACGTAC"];
    const dnaExpected = [[1,2,3,4,1,2], [1,2,3,4,1,2], [1,2,3,4,1,2], [1,2,3,4,1,2]]
    expect(dnaCodificate(dna)).toStrictEqual(dnaExpected);
  });
});