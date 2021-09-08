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

  const neighbours = (x, y) => ({
    north: () => grid[y - 1][x], // north
    northEast: () => grid[y - 1][x + 1], // north east
    east: () => grid[y][x + 1], // east
    southEast: () => grid[y + 1][x + 1], // south east
    south: () => grid[y + 1][x], // south
    southWest: () => grid[y + 1][x - 1], // south west
    west: () => grid[y][x - 1], // west
    northWest: () => grid[y - 1][x - 1], // north west
  });

  const whichDirectionAmI = (x, y) => {
    const {
      north,
      northEast,
      east,
      southEast,
      south,
      southWest,
      west,
      northWest,
    } = neighbours(x, y);

    if (y === 0 && x !== width - 1 && x !== 0) {
      // NORTH
      console.log("NORTH");
      return [east, southEast, south, southWest, west];
    }
    if (y === 0 && x === width - 1) {
      // NORTH EAST
      console.log("NORTH EAST");
      return [south, southWest, west];
    }
    if (x === width - 1 && y !== 0 && y !== height - 1) {
      // EAST
      console.log("EAST");
      return [north, south, southWest, west, northWest];
    }
    if (y === height - 1 && x === width - 1) {
      // SOUTH EAST
      console.log("SOUTH EAST");
      return [north, west, northWest];
    }
    if (y === height - 1 && x !== width - 1 && x !== 0) {
      // SOUTH
      console.log("SOUTH");
      return [north, northEast, east, west, northWest];
    }
    if (y === height - 1 && x === 0) {
      // SOUTH WEST
      console.log("SOUTH WEST");
      return [north, northEast, east];
    }
    if (x === 0 && y !== 0 && y !== height - 1) {
      // WEST
      console.log("WEST");
      return [north, northEast, east, southEast, south];
    }
    if (y === 0 && x === 0) {
      // NORTH WEST
      console.log("NORTH WEST");
      return [east, southEast, south];
    }

    console.log("MIDDLE");
    return [
      north,
      northEast,
      east,
      southEast,
      south,
      southWest,
      west,
      northWest,
    ];
  };

  // To traverse without checking the same twice check every three starting on index 1

  // FIXME:
  //    Currently skips the edges.
  //    See minesweeper game for a wall filter
  //  Traverses grid every third cells
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      //    Calls at each step calls funtion to cell surrounding 3x3 cells
      let currentAliveNeighbours = 0;

      console.log("whichDirectionAmI(x, y)", whichDirectionAmI(x, y));

      whichDirectionAmI(x, y).forEach((direction) => {
        console.log("direction:", direction);
        if (direction().isAlive) {
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
