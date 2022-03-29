export function processAdn(obj) {
  var adn = [0, 0, 0, 0];
  for (var i = 0; i < obj.length - 1; i++) {
    // console.log("i=", i);
    // console.log(obj[i] === obj[i++]);
    // console.log('obj[i] :>> ', obj[i]|);
    var nextt = i + 1;
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
          console.log("invalid input", obj[i]);
          break;
      }
    } else {
      adn = [0, 0, 0, 0];
    }
  }
  for (let index = 0; index < adn.length; index++) {
    const element = adn[index];
    if (element >= 3) {
      return Promise.reject(true);
    }
  }

  return Promise.resolve(false);
}
