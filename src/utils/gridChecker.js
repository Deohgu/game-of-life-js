export default function gridChecker(grid, width, height) {
  // xxxxxxxxxxxxxx
  // xoxxoxxoxxoxxx
  // xxxxxxxxxxxxxx
  // xxxxxxxxxxxxxx
  // xoxxoxxxxxxxxx

  const rules = (isCurrAlive, liveNeighbours) => {
    if (isCurrAlive) {
      switch (liveNeighbours) {
        case liveNeighbours < 2 || liveNeighbours > 3:
          console.log("dies");
          break;
        case liveNeighbours > 1 && liveNeighbours < 4:
          console.log("lives");
          break;
        default:
          console.log("no rules matched");
          break;
      }
    } else {
      if (liveNeighbours === 3) {
        console.log("lives");
      }
    }
  };

  const neighbours = ({ x, y }) => [
    grid[x][y - 1], // north
    grid[x + 1][y - 1], // north east
    grid[x + 1][y], // east
    grid[x + 1][y + 1], // south east
    grid[x][y + 1], // south
    grid[x - 1][y + 1], // south east
    grid[x - 1][y], // west
    grid[x - 1][y - 1], // north west
  ];

  // To traverse without checking the same twice check every three starting on index 1

  //  Traverses grid every third cells
  for (let y = 1; y < height - 2; y = y + 3) {
    for (let x = 1; x < width - 2; x = x + 3) {
      //    Calls at each step calls funtion to cell surrounding 3x3 cells
    }
  }
}
