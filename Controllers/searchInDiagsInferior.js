import processAdn from "../libs/processAdnCounter.js";

export default async function searchInDiagsInferior(dnaCodificatedMachine, dimention) {
  var diagInf = 1;
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  var diagonalesSuperioresPrincipales = diagonalesLocales / 4;
  var limitDiag = dnaCodificatedMachine.length - 1;
  var adnDiagnoalInferior = [];
  var poolCaller = [];

  for (var control = 0; control < diagonalesSuperioresPrincipales; control++) {
    var colum = 0;
    for (var index = diagInf; index <= limitDiag; index++) {
      var element = dnaCodificatedMachine[index][colum];
      adnDiagnoalInferior.push(element);
      colum++;
    }
    poolCaller.push(processAdn(adnDiagnoalInferior));

    adnDiagnoalInferior = [];
    diagInf++;
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
