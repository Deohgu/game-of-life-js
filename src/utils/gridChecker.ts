import updateNeighbours from "./updateNeighbours";

export default function gridChecker(
  grid: { isAlive: boolean }[][],
  width: number,
  height: number,
  liveNeighbours: { [key: number]: { [key: number]: number } }
) {
  const gridClone: { isAlive: boolean }[][] = JSON.parse(JSON.stringify(grid));
  let liveNeighboursClone: { [key: number]: { [key: number]: number } } =
    JSON.parse(JSON.stringify(liveNeighbours));

  const ruleChecker = (isCurrAlive: boolean, y: number, x: number) => {
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
      liveNeighboursClone = updateNeighbours(
        gridClone,
        liveNeighboursClone,
        width,
        height,
        y,
        x,
        true
      );
    });
  });

  return {
    newGrid: gridClone,
    newliveNeighbours: liveNeighboursClone,
  };
}
