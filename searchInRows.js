import {processAdn} from "./processAdn.js";

export async function searchInRows(dnaCodificatedMatrix) {
  var poolCaller = []
  for (let index = 0; index < dnaCodificatedMatrix.length; index++) {
    //   console.log("🚀 ~ file: index.js ~ line 61 ~ index", index);
    const adnChain = dnaCodificatedMatrix[index];
    // var adnResult = processAdn(adnChain);
    poolCaller.push(processAdn(adnChain))
    // if (adnResult) {
    //   console.log("MUTANT :>> ");
    //   break;
    // }
  }
  var response = await Promise.all(poolCaller).catch(function(e) {
    console.error(e);
    console.log('Mutante :>> '); // "oh, no!"
  });
  // console.log("🚀 ~ file: searchInRows.js ~ line 17 ~ searchInRows ~ response", response)
  return null
}