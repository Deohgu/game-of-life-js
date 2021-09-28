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
      if (liveNeighbours <= 1 || liveNeighbours >= 4) {
        updateNeighbours(y, x, false);
        return false;
      }
      return true;
    }
    if (liveNeighbours === 3) {
      updateNeighbours(y, x, true);
      return true;
    }
    return false;
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
