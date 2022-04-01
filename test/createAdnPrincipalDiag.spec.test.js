import createAdnPrincipalDiag from "../libs/createAdnPrincipalDiag.js";

describe("createAdnPrincipalDiagTest1", () => {
  const dnaCodificatedMachine1 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  test("Diagonal of matrix1", () => {
    expect(createAdnPrincipalDiag(dnaCodificatedMachine1)).toStrictEqual([
      1, 1, 1, 1,
    ]);
  });
});

describe("createAdnPrincipalDiagTest2", () => {
  const dnaCodificatedMachine2 = [
    [2, 1, 1, 1],
    [1, 2, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 2],
  ];
  const expected = [2, 2, 2, 2];
  test("matches array elements", () => {
    expect(createAdnPrincipalDiag(dnaCodificatedMachine2)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
