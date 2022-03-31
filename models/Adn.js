import mongoose from "mongoose";

import md5 from "md5";

const adnSchema = new mongoose.Schema({
  genoma: {
    type: Array,
  },
  count_mutant_dna: {
    type: Number,
  },
  count_human_dna: {
    type: Number,
  },
  ratio: {
    type: Number,
  },
}, { collection: 'adns' });

adnSchema.methods.hashAdnChain = function (adnChain) {
  const md5AdnChain = md5(JSON.stringify(adnChain));
  
  return md5AdnChain
};

// export function popo (adnChain) {
//   const md5AdnChain = md5(adnChain);
  
//   return md5AdnChain
// };

const baseAdnModel = mongoose.model("Adn", adnSchema);
export default baseAdnModel