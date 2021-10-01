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

  const isAliveGenerator = (y: number, x: number): void => {
    if (Math.random() < 0.8) {
      gridClone[y][x].isAlive = false;

      let ownAliveNeighbours = 0;
      whichDirection(gridWidth, gridHeight, y, x).forEach(({ y, x }) => {
        if (gridClone[y][x].isAlive) ownAliveNeighbours++;
      });

      if (ownAliveNeighbours > 0) {
        if (!liveNeighbours[y]) liveNeighbours[y] = {};
        liveNeighbours[y][x] = ownAliveNeighbours;
      }
    } else {
      gridClone[y][x].isAlive = true;

      //  Updates current and surrouding cells with the number of its alive neighbouring cells
      let ownAliveNeighbours = 0;
      whichDirection(gridWidth, gridHeight, y, x).forEach(({ y, x }) => {
        let aliveNeighbours = 0;

        if (gridClone[y][x].isAlive) ownAliveNeighbours++;

        whichDirection(gridWidth, gridHeight, y, x).forEach(({ y, x }) => {
          if (gridClone[y][x].isAlive) {
            aliveNeighbours++;
          }
        });

        if (aliveNeighbours > 0) {
          if (!liveNeighbours[y]) liveNeighbours[y] = {};
          liveNeighbours[y][x] = aliveNeighbours;
        }
      });

      // even if 0 neighbours itself is alive so will need to be re-checked
      if (!liveNeighbours[y]) liveNeighbours[y] = {};
      liveNeighbours[y][x] = ownAliveNeighbours;
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
