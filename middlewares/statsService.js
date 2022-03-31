import Adn from "../models/Adn.js";


export const statsService = async (req, res) => {
  res.set("Cache-Control", "no-store");

  const adnExits = await Adn.findOne();

  if(!adnExits){
    res.status(200).json({
      message: 'No ADN chain processed yet.'
    })
    
    return 
  }

  res.status(200).json({
    count_mutant_dna: adnExits.count_mutant_dna,
    count_human_dna: adnExits.count_human_dna,
    ratio: adnExits.ratio
  })
}