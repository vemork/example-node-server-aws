export function convertToDecimal(key) {
  switch (key) {
    case "A":
      return 1;
      break;
    case "C":
      return 2;
      break;
    case "G":
      return 3;
      break;
    case "T":
      return 4;
      break;

    default:
      return -1;
      break;
  }
}
