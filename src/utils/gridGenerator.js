import whichDirection from "./whichDirection";

//  Replace this with a better method to create the grid
export default function generateGrid(gridWidth, gridHeight, type, grid = []) {
  const gridClone = JSON.parse(JSON.stringify(grid));
  const aliveLocations = [];

  // FIXME:
  //  COnsider each cell keep count of alive neighbours
  //  Then only iterate over those?
  //  https://www.youtube.com/watch?v=ndAfWKmKF34

  const isAliveGenerator = (y, x) => {
    if (Math.random() < 0.8) {
      return (gridClone[y][x].isAlive = false);
    }

    aliveLocations.push({ y, x });
    gridClone[y][x].isAlive = true;

    // FIXME:
    //  Also check for the current cell, not just the neighbours

    //  Updates surrouding cells of the current cell with the number of its alive neighbouring cells
    whichDirection(gridClone, gridWidth, gridHeight, x, y).forEach(
      ({ y, x }) => {
        let currentAliveNeighbours = 0;

        whichDirection(gridClone, gridWidth, gridHeight, x, y).forEach(
          ({ y, x }) => {
            if (gridClone[y][x].isAlive) {
              currentAliveNeighbours++;
            }
          }
        );
        gridClone[y][x].aliveNeighbours = currentAliveNeighbours;
      }
    );
  };

  for (let y = 0; y < gridWidth; y++) {
    if (type === "empty") gridClone.push([]);

    for (let x = 0; x < gridHeight; x++) {
      if (type === "empty") {
        gridClone[y].push({ isAlive: false, aliveNeighbours: 0 });
      } else {
        isAliveGenerator(y, x);
      }
    }
  }

  return { newGrid: gridClone, newAliveLocations: aliveLocations };
}
