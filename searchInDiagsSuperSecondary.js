import { processAdn } from "./processAdn.js";
import { validateAdnResult } from "./validateAdnResult.js";

export async function searchInDiagsSuperiorSecondary(
  dnaCodificatedMachine,
  dimention
) {
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  var diagonalesSuperioresSecundarias = diagonalesLocales / 4;
  var adnDiagnoalSuperiorSecondary = [];
  var poolCaller = []

  var limit = dimention - 1;
  var columna = limit - 1;
  var colum = columna;

  for (var control = 1; control <= diagonalesSuperioresSecundarias; control++) {
    for (let index = 0; index < limit; index++) {
      const element = dnaCodificatedMachine[index][colum];
      adnDiagnoalSuperiorSecondary.push(element);
      colum--;
    }
    poolCaller.push(processAdn(adnDiagnoalSuperiorSecondary))
    // var result = processAdn(adnDiagnoalSuperiorSecondary);
    // if (result) {
    //   validateAdnResult(result);
    //   break;
    // }
    adnDiagnoalSuperiorSecondary = [];
    limit--;
    colum = columna - 1;
  }

  var response = await Promise.all(poolCaller).catch(function(e) {
    console.error(e);
    console.log('Mutante :>> '); // "oh, no!"
  });
}
