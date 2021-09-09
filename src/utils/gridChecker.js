import whichDirection from "./whichDirection";

export default function gridChecker(grid, width, height, aliveLocations) {
  const gridClone = JSON.parse(JSON.stringify(grid));

  const rules = (isCurrAlive, liveNeighbours) => {
    if (isCurrAlive) {
      if (liveNeighbours < 2 || liveNeighbours > 3) {
        return false;
      } else if (liveNeighbours > 1 && liveNeighbours < 4) {
        return true;
      }
    } else {
      if (liveNeighbours === 3) {
        return true;
      }
    }
  };

  // FIXME:
  //    Instead of running the grid, use recursion on a data structure with the live ones. Clusters of dead don’t need to be checked after all.

  // To traverse without checking the same twice check every three starting on index 1
  //    See minesweeper game for a wall filter
  //  Traverses grid every third cells
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      //    Calls at each step calls funtion to cell surrounding 3x3 cells
      let currentAliveNeighbours = 0;

      whichDirection(grid, width, height, x, y).forEach(({ y, x }) => {
        if (grid[y][x].isAlive) {
          currentAliveNeighbours++;
        }
      });

      gridClone[y][x].isAlive = rules(
        gridClone[y][x].isAlive,
        currentAliveNeighbours
      );
    }
  }

  return { newGrid: gridClone };
}
