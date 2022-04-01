import processAdnCounter from "../libs/processAdnCounter.js";

export default async function searchInDiagsSuperior(dnaCodificatedMachine, dimention) {
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  // console.log(
  //   "🚀 ~ file: searchInDiagsSuperior.js ~ line 15 ~ searchInDiagsSuperior ~ diagonalesLocales",
  //   diagonalesLocales
  // );
  var diagonalesSuperioresPrincipales = diagonalesLocales / 4;
  var limitDiag = dnaCodificatedMachine.length - 1;
  // console.log(
  //   "🚀 ~ file: searchInDiagsSuperior.js ~ line 18 ~ searchInDiagsSuperior ~ limitDiag",
  //   limitDiag
  // );
  var adnDiagnoalSuperior = [];
  var poolCaller = [];

  for (var control = 1; control <= diagonalesSuperioresPrincipales; control++) {
    var colum = control;
    for (var index = 0; index < limitDiag; index++) {
      var element = dnaCodificatedMachine[index][colum];
      adnDiagnoalSuperior.push(element);
      colum++;
    }
    // console.log(
    //   "🚀 ~ file: searchInDiagsSuperior.js ~ line  ~ searchInDiagsSuperior ~ adnDiagnoalSuperior",
    //   adnDiagnoalSuperior
    // );
    poolCaller.push(processAdnCounter(adnDiagnoalSuperior));

    adnDiagnoalSuperior = [];
    limitDiag--;
  }

  let response;
  // console.log('poolCaller :>> ', poolCaller);
   response = await Promise.all(poolCaller)
    .then(() => {
      // console.log('Human :>> ');
      return Promise.resolve(true);
    })
    .catch(function (e) {
      // console.error(e);
      // console.log("Mutant :>> "); // "Call Magneto!"
      return Promise.reject(false);
    });

  // console.log("🚀 ~ file: searchInRows.js ~ line 17 ~ searchInRows ~ response", response)
  return response;
}
