import transposeAdnMatrix from "../libs/transposeAdnMatrix.js";

describe("convert matrix", () => {
  const dna = [
    [1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2],
    [1, 2, 3, 4, 1, 2],
  ];
  const dnaExpected = [
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2],
  ];
  test("change row for colums", () => {
    expect(transposeAdnMatrix(dna)).toStrictEqual(dnaExpected);
  });
});

describe("convert matrix", () => {
  const dna = [
    [1, 2, 2, 1],
    [3, 4, 4, 3],
    [2, 1, 1, 2],
    [4, 3, 3, 4],
  ];
  const dnaExpected = [
    [1, 3, 2, 4],
    [2, 4, 1, 3],
    [2, 4, 1, 3],
    [1, 3, 2, 4],
  ];
  test("change row for colums", () => {
    expect(transposeAdnMatrix(dna)).toEqual(
      expect.arrayContaining(dnaExpected)
    );
  });
});
