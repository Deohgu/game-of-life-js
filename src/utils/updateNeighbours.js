import whichDirection from "./whichDirection";

export default function updateNeighbours(
  grid,
  liveNeighbours,
  width,
  height,
  y,
  x,
  changeType
) {
  const liveNeighboursClone = JSON.parse(JSON.stringify(liveNeighbours));
  // const ownAliveNeighbours = 0;
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
