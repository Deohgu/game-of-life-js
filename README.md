# Conway's Game of Life

### About

Created from scratch using a modern Front-End stack.
Serves the purpose of a code baseline for future cellular automata projects.

Makes use of memoization in order to not have to check the entire grid on each update.
On initial generate or pressed cell, an object called `liveNeighbours` is updated with the new cell coordinates containing surrouding live cells the cells that are alive. This way `gridChecker` does not waste time looking through empty space, it already know the cells that need updating, all it has to do is run through the `liveNeighbours` object.

### Stack

- React
- Redux toolkit
- Styled-Components
- TypeScript

### How to run

1. `npm ci`
2. `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
