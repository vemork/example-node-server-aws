import searchInDiagsSuperiorSecondary from "../Controllers/searchInDiagsSuperSecondary.js";

describe("searchInDiagsSuperiorTest", () => {
  const adnMatrixToSearch = [
    [1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1],
  ];
  it("True or False", async () => {
    await searchInDiagsSuperiorSecondary(adnMatrixToSearch, 5)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch2 = [
    [4, 1, 3, 4, 4, 2],
    [4, 1, 4, 1, 4, 3],
    [4, 3, 1, 4, 4, 4],
    [4, 4, 1, 1, 4, 1],
    [1, 4, 3, 1, 3, 2],
    [2, 1, 4, 3, 2, 1],
  ];
  it("True or False", async () => {
    await searchInDiagsSuperiorSecondary(adnMatrixToSearch2, 6)
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
    await searchInDiagsSuperiorSecondary(adnMatrixToSearch3, 4)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
})