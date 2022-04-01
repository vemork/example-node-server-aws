import processAdnCounter from "../libs/processAdnCounter.js";

export default async function searchInDiagsSuperiorSecondary(
  dnaCodificatedMachine,
  dimention
) {
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  var diagonalesSuperioresSecundarias = diagonalesLocales / 4;
  var adnDiagnoalSuperiorSecondary = [];
  var poolCaller = [];

  var limit = dimention - 1;
  var columna = limit - 1;
  var colum = columna;

  for (var control = 1; control <= diagonalesSuperioresSecundarias; control++) {
    for (let index = 0; index < limit; index++) {
      const element = dnaCodificatedMachine[index][colum];
      adnDiagnoalSuperiorSecondary.push(element);
      colum--;
    }
    poolCaller.push(processAdnCounter(adnDiagnoalSuperiorSecondary));
    // var result = processAdn(adnDiagnoalSuperiorSecondary);

    adnDiagnoalSuperiorSecondary = [];
    limit--;
    colum = columna - 1;
  }

  let response;

  await Promise.all(poolCaller)
    .then(() => {
      response = Promise.resolve(true);
    })
    .catch(function (e) {
      // console.error(e);
      // console.log("Mutante :>> "); // "Call Magneto!"
      response = Promise.reject(false);
    });

  // console.log("🚀 ~ file: searchInRows.js ~ line 17 ~ searchInRows ~ response", response)
  return response;
}
