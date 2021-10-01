import whichDirection from "./whichDirection";

//  Replace this with a better method to create the grid
export default function generateGrid(
  gridWidth: number,
  gridHeight: number,
  type: string,
  grid: { isAlive: boolean }[][] = []
): {
  newGrid: { isAlive: boolean }[][];
  liveNeighbours: { [key: number]: { [key: number]: number } };
} {
  const gridClone: { isAlive: boolean }[][] = JSON.parse(JSON.stringify(grid));
  const liveNeighbours: { [key: number]: { [key: number]: number } } = {};
  const countsNeighbours = (y: number, x: number) => {
    return whichDirection(gridWidth, gridHeight, y, x).reduce(
      (adder, { y, x }) => {
        return gridClone[y][x].isAlive ? adder + 1 : adder;
      },
      0
    );
  };

  const isAliveGenerator = (y: number, x: number): void => {
    if (!liveNeighbours[y]) liveNeighbours[y] = {};
    const isCellDead = Math.random() < 0.8;

    if (isCellDead) {
      gridClone[y][x].isAlive = false;

      let neighbours: number = countsNeighbours(y, x);

      if (neighbours > 0) {
        liveNeighbours[y][x] = neighbours;
      }
    } else {
      gridClone[y][x].isAlive = true;

      // even if 0 itself is alive so will need to be re-checked during update phase
      liveNeighbours[y][x] = whichDirection(gridWidth, gridHeight, y, x).reduce(
        (adder, { y, x }) => {
          // Neighbours for each surrouding cell of parent
          let childNeighbours: number = countsNeighbours(y, x);

          if (childNeighbours > 0) {
            if (!liveNeighbours[y]) liveNeighbours[y] = {};
            liveNeighbours[y][x] = childNeighbours;
          }

          return gridClone[y][x].isAlive ? adder + 1 : adder;
        },
        0
      );
    }
  };

  for (let y = 0; y < gridWidth; y++) {
    if (type === "empty") gridClone.push([]);

    for (let x = 0; x < gridHeight; x++) {
      if (type === "empty") {
        gridClone[y].push({ isAlive: false });
      } else {
        isAliveGenerator(y, x);
      }
    }
  }

  return {
    newGrid: gridClone,
    liveNeighbours,
  };
}
