export default function gridChecker(grid, width, height) {
  const gridClone = JSON.parse(JSON.stringify(grid));

  // xxxxxxxxxxxxxx
  // xoxxoxxoxxoxxx
  // xxxxxxxxxxxxxx
  // xxxxxxxxxxxxxx
  // xoxxoxxxxxxxxx

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

  const neighbours = (x, y) => [
    grid[y - 1][x], // north
    grid[y - 1][x + 1], // north east
    grid[y][x + 1], // east
    grid[y + 1][x + 1], // south east
    grid[y + 1][x], // south
    grid[y + 1][x - 1], // south east
    grid[y][x - 1], // west
    grid[y - 1][x - 1], // north west
  ];

  // To traverse without checking the same twice check every three starting on index 1

  // FIXME:
  //    Currently skips the edges.
  //    See minesweeper game for a wall filter
  //  Traverses grid every third cells
  for (let y = 1; y < height - 2; y++) {
    // for (let y = 0; y < height - 1; y++) {
    for (let x = 1; x < width - 2; x++) {
      // for (let x = 0; x < width - 1; x++) {
      //    Calls at each step calls funtion to cell surrounding 3x3 cells
      let currentAliveNeighbours = 0;

      neighbours(x, y).forEach((cell) => {
        if (cell.isAlive) {
          currentAliveNeighbours++;
        }
      });

      gridClone[y][x].isAlive = rules(
        gridClone[y][x].isAlive,
        currentAliveNeighbours
      );
    }
  }

  return gridClone;
}
