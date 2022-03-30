import { processAdn } from "../libs/processAdn.js";
import { validateAdnResult } from "../libs/validateAdnResult.js";

export async function searchInDiagsInferiorSecondary(
  dnaCodificatedMachine,
  dimention
) {
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  var diagonalesInferioresSecundarias = diagonalesLocales / 4;
  var adnDiagnoalInferiorSecondary = [];
  var poolCaller = [];

  var limit = dimention - 1;
  // var columna = limit - 1;
  var columna = limit;

  //diagonales superiores secundarias
  // searchInDiagsSuperiorSecondary(dnaCodificatedMachine, dimention);
  for (let control = 1; control <= diagonalesInferioresSecundarias; control++) {
    var colum = columna;
    for (let index = control; index <= limit; index++) {
      const element = dnaCodificatedMachine[index][colum];
      adnDiagnoalInferiorSecondary.push(element);
      colum--;
    }
    poolCaller.push(processAdn(adnDiagnoalInferiorSecondary));
    // var result = processAdn(adnDiagnoalInferiorSecondary);
    // if (result) {
    //   validateAdnResult(result);
    //   break;
    // }
    adnDiagnoalInferiorSecondary = [];
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