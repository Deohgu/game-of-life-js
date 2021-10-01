import whichDirection from "./whichDirection";

//  [key: number] -> TypeScript Index Signatures

export default function updateNeighbours(
  grid: { isAlive: boolean }[][],
  liveNeighbours: { [key: number]: { [key: number]: number } },
  width: number,
  height: number,
  y: number,
  x: number,
  changeType: string
): { [key: number]: { [key: number]: number } } {
  const liveNeighboursClone: { [key: number]: { [key: number]: number } } =
    JSON.parse(JSON.stringify(liveNeighbours));

  whichDirection(width, height, y, x).forEach(({ y, x }) => {
    if (liveNeighboursClone[y] === undefined) liveNeighboursClone[y] = {};
    if (liveNeighboursClone[y][x] === undefined) liveNeighboursClone[y][x] = 0;

    if (changeType === "born") {
      liveNeighboursClone[y][x]++;
    } else if (liveNeighboursClone[y][x] > 0) {
      liveNeighboursClone[y][x]--;

      if (liveNeighboursClone[y][x] === 0 && !grid[y][x].isAlive) {
        delete liveNeighboursClone[y][x];
      }
    }
  });

  if (changeType === "born") {
    if (liveNeighboursClone[y] === undefined) liveNeighboursClone[y] = {};
    if (liveNeighboursClone[y][x] === undefined) liveNeighboursClone[y][x] = 0;
  } else {
    if (liveNeighboursClone[y][x] === 0) {
      delete liveNeighboursClone[y][x];
    }
  }

  return liveNeighboursClone;
}
