export default function whichDirection(grid, width, height, x, y) {
  const north = () => grid[y - 1][x], // north
    northEast = () => grid[y - 1][x + 1], // north east
    east = () => grid[y][x + 1], // east
    southEast = () => grid[y + 1][x + 1], // south east
    south = () => grid[y + 1][x], // south
    southWest = () => grid[y + 1][x - 1], // south west
    west = () => grid[y][x - 1], // west
    northWest = () => grid[y - 1][x - 1]; // north west

  const isNorth = y === 0,
    isEast = x === width - 1,
    isSouth = y === height - 1,
    isWest = x === 0;

  // NORTH
  if (isNorth && !isEast && !isWest) {
    return [east, southEast, south, southWest, west];
  }
  // NORTH EAST
  if (isNorth && isEast) {
    return [south, southWest, west];
  }
  // EAST
  if (isEast && !isNorth && !isSouth) {
    return [north, south, southWest, west, northWest];
  }
  // SOUTH EAST
  if (isSouth && isEast) {
    return [north, west, northWest];
  }
  // SOUTH
  if (isSouth && !isEast && !isWest) {
    return [north, northEast, east, west, northWest];
  }
  // SOUTH WEST
  if (isSouth && isWest) {
    return [north, northEast, east];
  }
  // WEST
  if (isWest && !isNorth && !isSouth) {
    return [north, northEast, east, southEast, south];
  }
  // NORTH WEST
  if (isNorth && isWest) {
    return [east, southEast, south];
  }

  // MIDDLE
  return [north, northEast, east, southEast, south, southWest, west, northWest];
}
