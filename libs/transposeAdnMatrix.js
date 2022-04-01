var dnaCodificatedMachineTransposed = [];
var newValueMachineTransposed = [];

export default function transposeAdnMatrix(dnaCodificatedMachine) {
  for (let index = 0; index < dnaCodificatedMachine.length; index++) {
    for (let jndex = 0; jndex < dnaCodificatedMachine.length; jndex++) {
      const element = dnaCodificatedMachine[jndex][index];
      newValueMachineTransposed.push(element);
    }
    dnaCodificatedMachineTransposed.push(newValueMachineTransposed);
    newValueMachineTransposed = [];
  }

  return dnaCodificatedMachineTransposed;
}