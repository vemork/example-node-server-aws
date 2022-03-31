import * as core from "./index.js";

let keepSearching;

export async function adnDeepCheck(dimention, dnaCodificatedMachine) {
  // try {
  if (dimention === 4) {
    let adnPrincipalDiag = core.createAdnPrincipalDiag(dnaCodificatedMachine);

    keepSearching = await core.processAdn(adnPrincipalDiag);
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 11 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );

    let adnSecundaryDiag = core.createAdnSecondaryDiag(dnaCodificatedMachine);
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 16 ~ adnDeepCheck ~ adnSecundaryDiag",
    //   adnSecundaryDiag
    // );

    keepSearching = await core.processAdn(adnSecundaryDiag);
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 18 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );
  } else {
    //only diags
    let adnPrincipalDiag = core.createAdnPrincipalDiag(dnaCodificatedMachine);
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 30 ~ adnDeepCheck ~ adnPrincipalDiag",
    //   adnPrincipalDiag
    // );

    keepSearching = await core.processAdn(adnPrincipalDiag);
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 36 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );

    let adnSecundaryDiag = core.createAdnSecondaryDiag(dnaCodificatedMachine);

    keepSearching = await core.processAdn(adnSecundaryDiag);

    //superior diags

    keepSearching = await core.searchInDiagsSuperior(
      dnaCodificatedMachine,
      dimention
    );

    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 33 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );

    //inferior diags
    keepSearching = await core.searchInDiagsInferior(
      dnaCodificatedMachine,
      dimention
    );
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 46 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );

    //diagonales superiores secundarias
    keepSearching = await core.searchInDiagsSuperiorSecondary(
      dnaCodificatedMachine,
      dimention
    );
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 56 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );

    //diagonales inferiores secundarias
    keepSearching = await core.searchInDiagsInferiorSecondary(
      dnaCodificatedMachine,
      dimention
    );
    // console.log(
    //   "🚀 ~ file: adnDeepCheck.js ~ line 66 ~ adnDeepCheck ~ keepSearching",
    //   keepSearching
    // );
  }

  return Promise.resolve(keepSearching);
}
