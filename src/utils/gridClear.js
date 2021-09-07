export default function gridClear(grid) {
  const gridClone = JSON.parse(JSON.stringify(grid));

  gridClone.forEach((row) => {
    row.forEach((cell) => (cell.isAlive = false));
  });

  return gridClone;
}
