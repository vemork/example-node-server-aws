import Adn from "../models/Adn.js";

export async function callMagneto(res, keepSearching, dna) {
  // console.log("🚀 ~ file: callMagneto.js ~ line 4 ~ callMagneto ~ keepSearching", keepSearching)
  const AdnMethods = Adn.schema.methods;
  const adnReference = AdnMethods.hashAdnChain(dna);
  let genomaDb = await Adn.findOne();
  
  if(!genomaDb){
    genomaDb = new Adn(
      {
        genoma: [],
        count_mutant_dna: 0,
        count_human_dna: 0,
        ratio: 0
      }
    )
  }
  
  const newGenoma = genomaDb.genoma;

  newGenoma.push({
    id: adnReference,
    adn: dna,
  });

  if (!keepSearching) {
    genomaDb.count_mutant_dna += 1;
    if (genomaDb.count_mutant_dna > 0 && genomaDb.count_human_dna > 0) {
      let ratioResult = genomaDb.count_mutant_dna / genomaDb.count_human_dna 
      genomaDb.ratio = ratioResult
    }
    await genomaDb.save()
    return res.status(200).json({message: "We get a Mutant! Call Magneto ..."});
  } else {
    genomaDb.count_human_dna += 1;
    let ratioResult = genomaDb.count_mutant_dna / genomaDb.count_human_dna 
    genomaDb.ratio = ratioResult
    await genomaDb.save()
    return res.status(403).json({message:"It's another human ..."});
  }
}