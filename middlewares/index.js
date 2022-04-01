console.time("t1");

//Logic
import processAdnCounter from "../libs/processAdnCounter.js";
import convertToDecimal from "../libs/convertToDecimal.js";
import searchInRows from "../Controllers/searchInRows.js";
import searchInDiagsSuperior from "../Controllers/searchInDiagsSuperior.js";
import searchInDiagsInferior from "../Controllers/searchInDiagsInferior.js";
import searchInDiagsSuperiorSecondary from "../Controllers/searchInDiagsSuperSecondary.js";
import searchInDiagsInferiorSecondary from "../Controllers/searchInDiagsInferiorSecondary.js";

//Libs
import transposeAdnMatrix from "../libs/transposeAdnMatrix.js";
import createAdnPrincipalDiag from "../libs/createAdnPrincipalDiag.js";
import createAdnSecondaryDiag from "../libs/createAdnSecundaryDiag.js";
import dnaCodificate from "../libs/dnaCodificate.js";

export {
  processAdnCounter,
  convertToDecimal,
  searchInRows,
  transposeAdnMatrix,
  createAdnPrincipalDiag,
  createAdnSecondaryDiag,
  searchInDiagsSuperior,
  searchInDiagsInferior,
  searchInDiagsSuperiorSecondary,
  searchInDiagsInferiorSecondary,
  dnaCodificate,
};

console.timeEnd("t1");
