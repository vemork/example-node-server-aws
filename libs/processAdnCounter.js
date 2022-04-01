export default function processAdnCounter(obj) {
  let adn = [0, 0, 0, 0];

  for (let i = 0; i < obj.length - 1; i++) {
    // console.log("i=", i);
    // console.log(obj[i] === obj[i++]);
    // console.log('obj[i] :>> ', obj[i]|);
    let nextt = i + 1;
    // console.log('obj[i++] :>> ', obj[nex]);
    if (obj[i] === obj[nextt]) {
      switch (obj[i]) {
        case 1:
          adn[0] += 1;
          //   cA++;
          break;
        case 2:
          adn[1] += 1;
          //   cC++;
          break;
        case 3:
          adn[2] += 1;
          //   cG++;
          break;
        case 4:
          adn[3] += 1;
          //   cT++;
          break;

        default:
          // console.log("invalid input", obj[i]);
          break;
      }
    } else {
      if(adn.includes(3)){
        break;
      }
      adn = [0, 0, 0, 0];
    }
  }
  // console.log("adn :>> ", adn);
  for (let index = 0; index < adn.length; index++) {
    const element = adn[index];
    if (element >= 3) {
      return Promise.reject(false);
    }
  }

  return Promise.resolve(true);
}
