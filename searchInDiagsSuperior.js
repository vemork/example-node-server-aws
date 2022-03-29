import { processAdn } from "./processAdn.js";
import { validateAdnResult } from "./validateAdnResult.js";


export async function searchInDiagsSuperior(dnaCodificatedMachine, dimention) {
  var diagonalesGlobales = 4;
  var diagonalesLocales = diagonalesGlobales + (dimention - 5) * 4;
  var diagonalesSuperioresPrincipales = diagonalesLocales / 4;
  var limitDiag = dnaCodificatedMachine.length - 1;
  var adnDiagnoalSuperior = [];
  var poolCaller = []

  for (var control = 1; control <= diagonalesSuperioresPrincipales; control++) {
    var colum = control;
    for (var index = 0; index < limitDiag; index++) {
      var element = dnaCodificatedMachine[index][colum];
      adnDiagnoalSuperior.push(element);
      colum++;
    }
    poolCaller.push(processAdn(adnDiagnoalSuperior))
    // var result = processAdn(adnDiagnoalSuperior);
    // if (result) {
    //   validateAdnResult(result);
    //   break;
    // }
    adnDiagnoalSuperior = [];
    limitDiag--;
  }

  var response = await Promise.all(poolCaller).catch(function(e) {
    console.error(e);
    console.log('Mutante :>> '); // "oh, no!"
  });
}
