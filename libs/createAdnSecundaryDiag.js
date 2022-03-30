var adnSecundaryDiag = [];
export function createAdnSecondaryDiag(dnaCodificatedMachine) {
  var jndex = dnaCodificatedMachine.length - 1;
  for (let index = 0; index < dnaCodificatedMachine.length; index++) {
    const element = dnaCodificatedMachine[index][jndex];
    jndex--;
    adnSecundaryDiag.push(element);
  }
  return adnSecundaryDiag;
}
