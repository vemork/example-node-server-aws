import createAdnSecondaryDiag from "../libs/createAdnSecundaryDiag.js"

describe("createAdnSecondaryDiag1", () => {
  const dnaCodificatedMachine1 = [[3,3,3,3], [3,3,3,3], [3,3,3,3], [3,3,3,3]]
  test("Diagonal of matrix1", () => {
    expect(createAdnSecondaryDiag(dnaCodificatedMachine1)).toStrictEqual([3,3,3,3]);
  });
});

describe("createAdnSecondaryDiag2", () => {
  const dnaCodificatedMachine2 = [[1,1,1,4], [1,1,4,1], [1,4,1,1], [4,1,1,1]]
  const expected = [4,4,4,4];
  test('matches array elements', () => {
    expect(createAdnSecondaryDiag(dnaCodificatedMachine2)).toEqual(expect.arrayContaining(expected));
  });
});