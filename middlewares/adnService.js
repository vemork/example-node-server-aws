import { adnDeepCheck } from "./adnDeepCheck.js";
import * as core from "./index.js";

let keepSearching

function callMagneto(res, keepSearching) {
  if(!keepSearching){
    return res.status(200).json("We get a Mutant! Call Magneto ...");
  }else{
    return res.status(403).json("It's another human ...");
  }
}

export const adnService = async (req, res) => {
  res.set('Cache-Control', 'no-store')
  // const data = req.body;
  // console.log("🚀 ~ file: server.js ~ line 8 ~ app.get ~ data", data);
  // res.status(200).send("from router ...666");

  // var adn = [0, 0, 0, 0];
  // A = 1
  // C = 2
  // G = 3
  // T = 4

  // var dna = ["ATGCGAAA", "CAGTGCAA", "TTATGTAA", "AGAAGGAA", "CCCCTAAA", "TCACTGAA", "TCACTGAA", "TCACTGAA"];
  // var dna = ["ATGCGAA", "CAGTGCA", "TTATGTA", "AGAAGGA", "CCCCTAA", "TCACTGA", "TCACTGA"];
  // var dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  // var dna = ["ACGATA", "ACAGTA", "CAGTAC", "ACGTAC", "ACGTAC", "ACACGT"];
  const { dna } = req.body;

  try {
    const dnaCodificatedMachine = core.dnaCodificate(dna);
    const dimention = dnaCodificatedMachine.length;
    console.log(
      "🚀 ~ file: adnService.js ~ line 28 ~ adnService ~ dimention",
      dimention
    );

    if (dimention >= 4) {
      keepSearching = await core.searchInRows(dnaCodificatedMachine);
      console.log(
        "🚀 ~ file: adnService.js ~ line 35 ~ adnService ~ keepSearching",
        keepSearching
      );


      // TRANSPOSE dnaCodificatedMachine
      const dnaCodificatedMachineTransposed = core.transposeAdnMatrix(
        dnaCodificatedMachine
      );

      keepSearching = await core.searchInRows(dnaCodificatedMachineTransposed);
      console.log(
        "🚀 ~ file: adnService.js ~ line 50 ~ adnService ~ keepSearching",
        keepSearching
      );
      
      keepSearching = await adnDeepCheck(dimention, dnaCodificatedMachine)
      console.log(
        "🚀 ~ file: adnService.js ~ line 59 ~ adnService ~ keepSearching",
        keepSearching
      );


      // return res.status(403).json("It's another human ...");
    } else {
      return res.status(403).json({
        message:
          "Invalid DNA input, try with a different ADN chain, the minimum dimension is 4",
        eg: {
          dna: ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"],
        },
      });
    }
  } catch (error) {
    console.log('error :>> ', error);
    console.log('We got a new Mutant :>> ');
    keepSearching = false
  } finally {
    callMagneto(res, keepSearching)
  }
};
