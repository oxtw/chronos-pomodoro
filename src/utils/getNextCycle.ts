export function getNextCycle(currentCycle: number) {

  //Se currentCycle for 0 ou 8, retorna 1, senão retorna currentCycle + 1
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}