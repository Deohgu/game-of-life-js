import updateNeighbours from "./updateNeighbours";

//  Replace this with a better method to create the grid
export default function generateGrid(
  gridWidth: number,
  gridHeight: number,
  type: string,
  grid: { isAlive: boolean }[][] = []
): {
  newGrid: { isAlive: boolean }[][];
  liveNeighbours: { [key: number]: { [key: number]: number } };
} {
  const gridClone: { isAlive: boolean }[][] = JSON.parse(JSON.stringify(grid));
  let liveNeighbours: { [key: number]: { [key: number]: number } } = {};

  const isAliveGenerator = (y: number, x: number): void => {
    const isAlive = Math.random() > 0.8;

    gridClone[y][x].isAlive = isAlive;

    liveNeighbours = updateNeighbours(
      gridClone,
      liveNeighbours,
      gridWidth,
      gridHeight,
      y,
      x,
      isAlive
    );
  };

  for (let y = 0; y < gridWidth; y++) {
    if (type === "empty") gridClone.push([]);

    for (let x = 0; x < gridHeight; x++) {
      if (type === "empty") {
        gridClone[y].push({ isAlive: false });
      } else {
        isAliveGenerator(y, x);
      }
    }
  }

  return {
    newGrid: gridClone,
    liveNeighbours,
  };
}
