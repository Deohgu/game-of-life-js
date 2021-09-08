//  Replace this with a better method to create the grid
export default function generateGrid(gridWidth, gridHeight, type) {
  const grid = [];
  const aliveLocations = [];

  const isAliveGenerator = (y, x) => {
    if (Math.random() < 0.8) {
      return grid[y].push({ isAlive: false });
    }
    aliveLocations.push({ y, x });
    return grid[y].push({ isAlive: true });
  };

  for (let y = 0; y < gridWidth; y++) {
    grid.push([]);
    for (let x = 0; x < gridHeight; x++) {
      if (type === "empty") {
        grid[y].push({ isAlive: false });
      } else {
        isAliveGenerator(y, x);
      }
    }
  }

  return { newGrid: grid, newAliveLocations: aliveLocations };
}
