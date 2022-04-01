import searchInRows from "../Controllers/searchInRows.js";

describe("searchInRowsTest", () => {
  const adnMatrixToSearch = [
    [1, 1, 1, 1],
    [1, 2, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 2],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearch)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch2 = [
    [1, 2, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 2],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearch2)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch3 = [
    [1, 2, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 2],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearch3)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearch4 = [
    [1, 2, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 2],
    [1, 1, 1, 1],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearch4)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
});

describe("searchInRowsTest2", () => {
  const adnMatrixToSearch = [
    [3, 3, 3, 3, 3, 3],
    [1, 2, 1, 1, 3, 4],
    [1, 1, 2, 1, 4, 3],
    [1, 1, 1, 2, 1, 1],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearch)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearc2 = [
    [1, 2, 1, 1, 3, 4],
    [3, 3, 3, 3, 3, 3],
    [1, 1, 2, 1, 4, 3],
    [1, 1, 1, 2, 1, 1],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearc2)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearc3 = [
    [1, 2, 1, 1, 3, 4],
    [1, 1, 2, 1, 4, 3],
    [3, 3, 3, 3, 3, 3],
    [1, 1, 1, 2, 1, 1],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearc3)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });

  const adnMatrixToSearc4 = [
    [1, 2, 1, 1, 3, 4],
    [1, 1, 2, 1, 4, 3],
    [1, 1, 1, 2, 1, 1],
    [3, 3, 3, 3, 3, 3],
  ];
  it("True or False", async () => {
    await searchInRows(adnMatrixToSearc4)
      .then((data) => {
        expect(data).toBe(true);
      })
      .catch((e) => {
        expect(e).toBe(false);
      });
  });
});