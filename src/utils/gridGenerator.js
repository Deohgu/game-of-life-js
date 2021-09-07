//  Replace this with a better method to create the grid
export default function generateGrid(gridWidth, gridHeight) {
  const grid = [];

  for (let i = 0; i < gridWidth; i++) {
    grid.push([]);
    for (let j = 0; j < gridHeight; j++) {
      grid[i].push({ isAlive: Math.random() < 0.5 ? false : true });
    }
  }

  return grid;
}
