import Adn from "../models/Adn.js";
import { processAdn } from "./processAdn.js";

export const adnService = async (req, res) => {
  res.set("Cache-Control", "no-store");
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
  // console.log("🚀 ~ file: adnService.js ~ line 21 ~ adnService ~ dna", dna)

  try {
    const AdnMethods = Adn.schema.methods;
    const adnReference = AdnMethods.hashAdnChain(dna);
    const adnExits = await Adn.findOne({ "genoma.id": adnReference });
    // console.log("🚀 ~ file: adnService.js ~ line 27 ~ adnService ~ adnExits", adnExits)
    
    processAdn(adnExits, res, dna);
  } catch (error) {
    // console.log("error adnService :>> ", error);
    // console.log("We got a new Mutant :>> ");
    // keepSearching = false;
  }
};
