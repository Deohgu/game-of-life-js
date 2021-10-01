export default function gridClear(
  grid: { isAlive: boolean }[][]
): { isAlive: boolean }[][] {
  const gridClone: { isAlive: boolean }[][] = JSON.parse(JSON.stringify(grid));

  gridClone.forEach((row) => {
    row.forEach((cell) => (cell.isAlive = false));
  });

  return gridClone;
}
