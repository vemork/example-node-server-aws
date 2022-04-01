import searchInDiagsInferiorSecondary from "../Controllers/searchInDiagsInferiorSecondary.js";

describe("searchInDiagsInferiorSecondaryTest", () => {
  const adnMatrixToSearch = [
    [3, 3, 3, 3, 3],
    [3, 2, 3, 3, 3],
    [3, 3, 2, 3, 3],
    [3, 3, 3, 2, 3],
    [3, 3, 3, 2, 3],
  ];
  it("True or False", async () => {
    await searchInDiagsInferiorSecondary(adnMatrixToSearch, 5)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch2 = [
    [1, 3, 3, 1, 1, 2],
    [1, 3, 1, 3, 1, 3],
    [1, 3, 3, 1, 1, 4],
    [4, 4, 3, 3, 4, 3],
    [3, 4, 3, 3, 3, 2],
    [2, 3, 4, 3, 2, 3],
  ];
  it("True or False", async () => {
    await searchInDiagsInferiorSecondary(adnMatrixToSearch2, 6)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch3 = [
    [3, 2, 3, 4],
    [3, 3, 2, 3],
    [4, 3, 2, 2],
    [2, 3, 3, 4],
  ];
  it("True or False", async () => {
    await searchInDiagsInferiorSecondary(adnMatrixToSearch3, 4)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
})