export default function whichDirection(
  width: number,
  height: number,
  y: number,
  x: number
): { y: number; x: number }[] {
  const north = { y: y - 1, x }, // north
    northEast = { y: y - 1, x: x + 1 }, // north east
    east = { y, x: x + 1 }, // east
    southEast = { y: y + 1, x: x + 1 }, // south east
    south = { y: y + 1, x }, // south
    southWest = { y: y + 1, x: x - 1 }, // south west
    west = { y, x: x - 1 }, // west
    northWest = { y: y - 1, x: x - 1 }; // north west

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
