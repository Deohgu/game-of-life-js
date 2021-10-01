export default function gridClear(
  grid: { isAlive: boolean }[][]
): { isAlive: boolean }[][] {
  const gridClone = JSON.parse(JSON.stringify(grid));

  gridClone.forEach((row: { isAlive: boolean }[]) => {
    row.forEach((cell: { isAlive: boolean }) => (cell.isAlive = false));
  });

  return gridClone;
}
