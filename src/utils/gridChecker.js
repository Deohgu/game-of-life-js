import whichDirection from "./whichDirection";

export default function gridChecker(grid, width, height, liveNeighbours) {
  const gridClone = JSON.parse(JSON.stringify(grid));
  const liveNeighboursClone = JSON.parse(JSON.stringify(liveNeighbours));

  const ifUndefinedReset = (y, x) => {
    if (liveNeighboursClone[y] === undefined) liveNeighboursClone[y] = {};
    if (liveNeighboursClone[y][x] === undefined) liveNeighboursClone[y][x] = 0;
  };
  const deleteEmptyNeighbour = (y, x) => {
    delete liveNeighboursClone[y][x];
    if (!Object.keys(liveNeighboursClone[y]).length)
      delete liveNeighboursClone[y];
  };

  const updateNeighbours = (y, x, changeType) => {
    whichDirection(width, height, y, x).forEach(({ y, x }) => {
      ifUndefinedReset(y, x);

      if (changeType === "born") {
        liveNeighboursClone[y][x]++;
      } else if (liveNeighboursClone[y][x] > 0) {
        liveNeighboursClone[y][x]--;
        if (liveNeighboursClone[y][x] === 0 && !gridClone[y][x].isAlive) {
          deleteEmptyNeighbour(y, x);
        }
      }
    });

    if (changeType === "born") {
      ifUndefinedReset(y, x);
    } else if (liveNeighboursClone[y][x] === 0) {
      deleteEmptyNeighbour(y, x);
    }
  };

  const ruleChecker = (isCurrAlive, liveNeighbours, y, x) => {
    if (isCurrAlive) {
      const isDead = liveNeighbours <= 1 || liveNeighbours >= 4;
      if (isDead) updateNeighbours(y, x, "dead");
      return !isDead;
    }

    const isBorn = liveNeighbours === 3;
    if (isBorn) updateNeighbours(y, x, "born");
    return isBorn;
  };

  Object.keys(liveNeighbours).forEach((yKey) => {
    const y = Number(yKey);
    Object.keys(liveNeighbours[y]).forEach((xKey) => {
      const x = Number(xKey);

      gridClone[y][x].isAlive = ruleChecker(
        gridClone[y][x].isAlive,
        liveNeighbours[y][x],
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
