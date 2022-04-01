import processAdnCounter from "../libs/processAdnCounter.js";

describe("processAdnCounterTest", () => {
  const adnToCount = [1, 1, 1, 1];
  it("True or False", async() => {
    await processAdnCounter(adnToCount).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount2 = [2, 1, 1, 1];
  it("True or False", async() => {
    await processAdnCounter(adnToCount2).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount3 = [3, 3, 4, 4];
  it("True or False", async() => {
    await processAdnCounter(adnToCount3).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount4 = [3, 4, 4, 4, 4];
  it("True or False", async() => {
    await processAdnCounter(adnToCount4).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount5 = [3, 3, 3, 3, 4];
  it("True or False", async() => {
    await processAdnCounter(adnToCount5).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount6 = [2, 3, 3, 3, 3, 1];
  it("True or False", async() => {
    await processAdnCounter(adnToCount6).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });

  const adnToCount7 = [2, 2, 3, 3, 3, 3];
  it("True or False", async() => {
    await processAdnCounter(adnToCount7).then((data)=>{
      expect(data).toBe(true);
    }).catch((e)=>{
      expect(e).toBe(false);
    })
  });
});
