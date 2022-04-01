const adnSecundaryDiag = [];
export default function createAdnSecondaryDiag(dnaCodificatedMachine) {
  let jndex = dnaCodificatedMachine.length - 1;
  for (let index = 0; index < dnaCodificatedMachine.length; index++) {
    const element = dnaCodificatedMachine[index][jndex];
    jndex--;
    adnSecundaryDiag.push(element);
  }
  return adnSecundaryDiag;
}
