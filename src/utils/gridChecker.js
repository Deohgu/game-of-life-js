import whichDirection from "./whichDirection";

export default function gridChecker(grid, width, height, liveNeighbours) {
  const gridClone = JSON.parse(JSON.stringify(grid));
  const liveNeighboursClone = JSON.parse(JSON.stringify(liveNeighbours));

  const updateNeighbours = (y, x, change) => {
    whichDirection(width, height, y, x).forEach(({ y, x }) => {
      if (change) {
        liveNeighboursClone[y][x]++;
      } else if (!change && liveNeighboursClone[y][x] > 0) {
        liveNeighboursClone[y][x]--;
      }
    });
  };

  const ruleChecker = (isCurrAlive, liveNeighbours, y, x) => {
    if (isCurrAlive) {
      const isDead = liveNeighbours <= 1 || liveNeighbours >= 4;
      if (isDead) updateNeighbours(y, x, false);
      return !isDead;
    }

    const isBorn = liveNeighbours === 3;
    if (isBorn) updateNeighbours(y, x, true);
    return isBorn;
  };

  Object.keys(liveNeighbours).forEach((yKey) => {
    const y = Number(yKey);
    Object.keys(liveNeighbours[y]).forEach((xKey) => {
      const x = Number(xKey);

      gridClone[y][x].isAlive = ruleChecker(
        gridClone[y][x].isAlive,
        liveNeighboursClone[y][x],
        y,
        x
      );
    });
  });

  return {
    newGrid: gridClone,
    newliveNeighbours: liveNeighboursClone,
  };
}
