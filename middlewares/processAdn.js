import * as core from "./index.js";
import { adnDeepCheck } from "./adnDeepCheck.js";
import { callMagneto } from "../libs/callMagneto.js";



export default async function processAdn(adnExits, res, dna){
  try {
    if (!adnExits) {
      const dnaCodificatedMachine = core.dnaCodificate(dna);
      const dimention = dnaCodificatedMachine.length;
      // console.log(
      //   "🚀 ~ file: adnService.js ~ line 28 ~ adnService ~ dimention",
      //   dimention
      // );
      let keepSearching = undefined;
      if (dimention >= 4) {
        keepSearching = await core.searchInRows(dnaCodificatedMachine);
        // console.log(
        //   "🚀 ~ file: adnService.js ~ line 35 ~ adnService ~ keepSearching",
        //   keepSearching
        // );
  
        // TRANSPOSE dnaCodificatedMachine
        const dnaCodificatedMachineTransposed = core.transposeAdnMatrix(
          dnaCodificatedMachine
        );
  
        keepSearching = await core.searchInRows(dnaCodificatedMachineTransposed);
        // console.log(
        //   "🚀 ~ file: adnService.js ~ line 50 ~ adnService ~ keepSearching",
        //   keepSearching
        // );
  
        keepSearching = await adnDeepCheck(dimention, dnaCodificatedMachine);
        // console.log(
        //   "🚀 ~ file: adnService.js ~ line 59 ~ adnService ~ keepSearching",
        //   keepSearching
        // );
  
        // return res.status(403).json("It's another human ...");
      } else {
        return res.status(400).json({
          message:
            "Invalid DNA input, try with a different ADN chain, the minimum dimension is 4",
          eg: {
            dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
          },
        });
      }
      callMagneto(res, keepSearching, dna);
    } else {
     res.status(400).json({ message: "This ADN chain have been analized yet." });
    }
  } catch (error) {
    // console.log("error processAdn 333 :>> ", error);
    // console.log("We got a new Mutant :>> ");
    let keepSearching = false;
    callMagneto(res, keepSearching, dna);
  }
}