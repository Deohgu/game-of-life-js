import whichDirection from "./whichDirection";

//  [key: number] -> TypeScript Index Signatures

export default function updateNeighbours(
  grid: { isAlive: boolean }[][],
  liveNeighbours: { [key: number]: { [key: number]: number } },
  width: number,
  height: number,
  y: number,
  x: number,
  twoDimensional?: boolean
): { [key: number]: { [key: number]: number } } {
  const liveNeighboursClone: { [key: number]: { [key: number]: number } } =
    JSON.parse(JSON.stringify(liveNeighbours));

  const countsNeighbours = (y: number, x: number) => {
    return whichDirection(width, height, y, x).reduce((adder, { y, x }) => {
      return grid[y][x].isAlive ? adder + 1 : adder;
    }, 0);
  };

  const parentNeighbours: number = whichDirection(width, height, y, x).reduce(
    (adder, { y, x }) => {
      if (liveNeighboursClone[y] === undefined) liveNeighboursClone[y] = {};

      if (twoDimensional) {
        // Neighbours for each surrouding cell of parent
        let childNeighbours: number = countsNeighbours(y, x);

        if (childNeighbours > 0 || grid[y][x].isAlive) {
          if (!liveNeighboursClone[y]) liveNeighboursClone[y] = {};
          liveNeighboursClone[y][x] = childNeighbours;
        } else {
          delete liveNeighboursClone[y][x];
          if (!Object.keys(liveNeighboursClone[y]).length)
            delete liveNeighboursClone[y];
        }
      }

      return grid[y][x].isAlive ? adder + 1 : adder;
    },
    0
  );

  if (liveNeighboursClone[y] === undefined) liveNeighboursClone[y] = {};
  if (grid[y][x].isAlive || parentNeighbours) {
    liveNeighboursClone[y][x] = parentNeighbours;
  } else if (liveNeighboursClone[y][x] !== undefined) {
    delete liveNeighboursClone[y][x];
    if (!Object.keys(liveNeighboursClone[y]).length)
      delete liveNeighboursClone[y];
  }

  return liveNeighboursClone;
}
