import processAdnCounter from "../libs/processAdnCounter.js";

export default async function searchInRows(dnaCodificatedMatrix) {
  // console.log(
  //   "🚀 ~ file: searchInRows.js ~ line 4 ~ searchInRows ~ dnaCodificatedMatrix",
  //   dnaCodificatedMatrix
  // );
  var poolCaller = [];
  for (let index = 0; index < dnaCodificatedMatrix.length; index++) {
    //   console.log("🚀 ~ file: index.js ~ line 61 ~ index", index);
    const adnChain = dnaCodificatedMatrix[index];
    // var adnResult = processAdn(adnChain);
    poolCaller.push(processAdnCounter(adnChain));
    // if (adnResult) {
    //   console.log("MUTANT :>> ");
    //   break;
    // }
  }

  let response;
  // console.log("poolCaller :>> ", poolCaller);
  await Promise.all(poolCaller)
    .then((data) => {
      response = Promise.resolve(true);
    })
    .catch(function (e) {
      // console.error(e);
      // console.log("Mutante :>> "); // "Call Magneto!"
      response = Promise.reject(false);
    });

  return response;
}
