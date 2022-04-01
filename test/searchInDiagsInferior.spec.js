import searchInDiagsInferior from "../Controllers/searchInDiagsInferior.js";

describe("searchInDiagsInferiorTest", () => {
  const adnMatrixToSearch = [
    [2, 2, 2, 2, 2],
    [3, 2, 3, 2, 2],
    [2, 4, 2, 4, 2],
    [2, 2, 3, 2, 2],
    [2, 1, 2, 1, 2],
  ];
  it("True or False", async () => {
    await searchInDiagsInferior(adnMatrixToSearch)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch2 = [
    [2, 2, 1, 3, 2],
    [2, 2, 2, 2, 2],
    [2, 1, 2, 2, 3],
    [3, 2, 2, 2, 2],
    [2, 2, 1, 2, 1],
  ];
  it("True or False", async () => {
    await searchInDiagsInferior(adnMatrixToSearch2)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch3 = [
    [2, 2, 1, 3, 2, 2],
    [2, 2, 2, 2, 2, 3],
    [2, 1, 2, 2, 3, 1],
    [3, 2, 2, 2, 2, 2],
    [2, 2, 1, 2, 1, 3],
  ];
  it("True or False", async () => {
    await searchInDiagsInferior(adnMatrixToSearch3)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
});