import whichDirection from "./whichDirection";

export default function updateNeighbours(
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

    if (changeType) {
      liveNeighboursClone[y][x]++;
    } else if (liveNeighboursClone[y][x] > 0) {
      liveNeighboursClone[y][x]--;
    }
  });

  ////////////////////////////

  //  Updates current and surrouding cells with the number of its alive neighbouring cells
  // let ownAliveNeighbours = 0;
  // whichDirection(width, height, y, x).forEach(({ y, x }) => {
  //   let aliveNeighbours = 0;

  //   if (gridClone[y][x].isAlive) {
  //     ownAliveNeighbours++;
  //   }

  //   whichDirection(gridWidth, gridHeight, y, x).forEach(({ y, x }) => {
  //     if (gridClone[y][x].isAlive) {
  //       aliveNeighbours++;
  //     }
  //   });

  //   if (liveNeighbours[y] === undefined) liveNeighbours[y] = {};
  //   liveNeighbours[y][x] = aliveNeighbours;
  // });

  // if (liveNeighbours[y] === undefined) liveNeighbours[y] = {};
  // liveNeighbours[y][x] = ownAliveNeighbours;

  ////////////////////////////

  return liveNeighboursClone;
}
