var adnPrincipalDiag = [];
export function createAdnPrincipalDiag(dnaCodificatedMachine) {
  for (let index = 0; index < dnaCodificatedMachine.length; index++) {
    const element = dnaCodificatedMachine[index][index];
    adnPrincipalDiag.push(element);
  }
  return adnPrincipalDiag;
}
