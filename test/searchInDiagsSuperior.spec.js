import searchInDiagsSuperior from "../Controllers/searchInDiagsSuperior.js";

describe("searchInDiagsSuperiorTest", () => {
  const adnMatrixToSearch = [
    [1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1],
  ];
  it("True or False", async () => {
    await searchInDiagsSuperior(adnMatrixToSearch)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch2 = [
    [1, 2, 3, 4, 1],
    [1, 2, 1, 2, 1],
    [1, 3, 2, 1, 4],
    [4, 1, 2, 2, 1],
    [2, 1, 3, 2, 3],
  ];
  it("True or False", async () => {
    await searchInDiagsSuperior(adnMatrixToSearch2)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch3 = [
    [1, 2, 3, 4, 1, 2],
    [1, 2, 1, 2, 1, 4],
    [1, 3, 2, 1, 4, 3],
    [4, 1, 2, 2, 1, 2],
    [2, 1, 3, 2, 3, 4],
  ];
  it("True or False", async () => {
    await searchInDiagsSuperior(adnMatrixToSearch3)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
});