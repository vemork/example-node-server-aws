console.time("t1");

import { processAdn } from "./processAdn.js";
import { convertToDecimal } from "./convertToDecimal.js";
import { searchInRows } from "./searchInRows.js";
import { transposeAdnMatrix } from "./transposeAdnMatrix.js";
import { createAdnPrincipalDiag } from "./createAdnPrincipalDiag.js";
import { createAdnSecondaryDiag } from "./createAdnSecundaryDiag.js";
import { validateAdnResult } from "./validateAdnResult.js";
import { searchInDiagsSuperior } from "./searchInDiagsSuperior.js";
import { searchInDiagsInferior } from "./searchInDiagsInferior.js";
import { searchInDiagsSuperiorSecondary } from "./searchInDiagsSuperSecondary.js";
import { searchInDiagsInferiorSecondary } from "./searchInDiagsInferiorSecondary.js";

// var adn = [0, 0, 0, 0];
// A = 1
// C = 2
// G = 3
// T = 4

// var dna = ["ATGCGAAA", "CAGTGCAA", "TTATGTAA", "AGAAGGAA", "CCCCTAAA", "TCACTGAA", "TCACTGAA", "TCACTGAA"];
// var dna = ["ATGCGAA", "CAGTGCA", "TTATGTA", "AGAAGGA", "CCCCTAA", "TCACTGA", "TCACTGA"];
// var dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
var dna = ["ACGATA", "ACAGTA", "CAGTAC", "ACGTAC", "ACGTAC", "ACACGT"];
var dnaCodificatedHuman = [];
var newValueMachine = [];
var dnaCodificatedMachine = [];

var adnResult;

dna.forEach((element) => {
  var chainElements = element.split("");
  dnaCodificatedHuman.push(chainElements);

  chainElements.forEach((element) => {
    var newValue = convertToDecimal(element);
    newValueMachine.push(newValue);
  });

  dnaCodificatedMachine.push(newValueMachine);
  newValueMachine = [];
});

console.log(
  "🚀 ~ file: index.js ~ line 34 ~ dna.forEach ~ dnaCodificatedMachine",
  dnaCodificatedHuman
);

console.log(
  "🚀 ~ file: index.js ~ line 34 ~ dna.forEach ~ dnaCodificatedMachine",
  dnaCodificatedMachine
);

try {
  searchInRows(dnaCodificatedMachine);

//TRANSPOSE dnaCodificatedMachine
var dnaCodificatedMachineTransposed = transposeAdnMatrix(dnaCodificatedMachine);
searchInRows(dnaCodificatedMachineTransposed);

// var adnPrincipalDiag = createAdnPrincipalDiag(dnaCodificatedMachine);
// console.log("adnPrincipalDiag :>> ", adnPrincipalDiag);
// adnResult = processAdn(adnPrincipalDiag);
// validateAdnResult(adnResult);

// var adnSecundaryDiag = createAdnSecondaryDiag(dnaCodificatedMachine);
// console.log("adnSecundaryDiag :>> ", adnSecundaryDiag);
// adnResult = processAdn(adnSecundaryDiag);
// validateAdnResult(adnResult);

var dimention = dnaCodificatedMachine.length;

if (dimention >= 4) {
  console.log("🚀 ~ file: index.js ~ line 63 ~ dimention", dimention);
  if (dimention === 4) {
    //revisar unicamente diagonales
  } else {
    //diagonales superiores
    searchInDiagsSuperior(dnaCodificatedMachine, dimention);

    //diagonales inferiores
    searchInDiagsInferior(dnaCodificatedMachine, dimention);

    //diagonales superiores secundarias
    searchInDiagsSuperiorSecondary(dnaCodificatedMachine, dimention);

    //diagonales inferiores secundarias
    console.log('### :>> ');
    searchInDiagsInferiorSecondary(dnaCodificatedMachine, dimention);
  }
} else {
  console.log("Invalid DNA input :>> ");
}
} catch (error) {
  console.log('error :>> ', error);
}

console.timeEnd("t1");