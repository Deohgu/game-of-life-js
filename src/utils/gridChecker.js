import updateNeighbours from "./updateNeighbours";

export default function gridChecker(grid, width, height, liveNeighbours) {
  const gridClone = JSON.parse(JSON.stringify(grid));
  let liveNeighboursClone = JSON.parse(JSON.stringify(liveNeighbours));

  const ruleChecker = (isCurrAlive, y, x) => {
    if (isCurrAlive) {
      const isDead = liveNeighbours[y][x] <= 1 || liveNeighbours[y][x] >= 4;
      return !isDead;
    }

    const isBorn = liveNeighbours[y][x] === 3;
    return isBorn;
  };

  Object.keys(liveNeighbours).forEach((yKey) => {
    const y = Number(yKey);
    Object.keys(liveNeighbours[y]).forEach((xKey) => {
      const x = Number(xKey);

      gridClone[y][x].isAlive = ruleChecker(gridClone[y][x].isAlive, y, x);
      if (gridClone[y][x].isAlive) {
        liveNeighboursClone = updateNeighbours(
          gridClone,
          liveNeighboursClone,
          width,
          height,
          y,
          x,
          true
        );
      } else {
        liveNeighboursClone = updateNeighbours(
          gridClone,
          liveNeighboursClone,
          width,
          height,
          y,
          x,
          true
        );
      }
    });
  });

  return {
    newGrid: gridClone,
    newliveNeighbours: liveNeighboursClone,
  };
}
