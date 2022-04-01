import { convertToDecimal } from "../middlewares/index.js";

export default function dnaCodificate(dna) {
  let dnaCodificatedHuman = [];
  let newValueMachine = [];
  let dnaCodificatedMachine = [];

  // let adnResult;

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
    "🚀 ~ file: dnaCodificate.js ~ line 5 ~ dnaCodificate ~ dnaCodificatedHuman",
    dnaCodificatedHuman
  );
  console.log(
    "🚀 ~ file: dnaCodificate.js ~ line 21 ~ dna.forEach ~ dnaCodificatedMachine",
    dnaCodificatedMachine
  );

  return dnaCodificatedMachine;
}
