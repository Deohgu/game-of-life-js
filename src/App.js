import { AppStyled, GlobalStyle } from "./App.styled";
import Grid from "./components/Grid";
import { useSelector } from "react-redux";

import gridChecker from "./utils/gridChecker";
import { useEffect, useState } from "react";

const App = () => {
  //  Replace this with a better method to create the grid
  const generateGrid = () => {
    const grid = [];

    for (let i = 0; i < gridWidth; i++) {
      grid.push([]);
      for (let j = 0; j < gridHeight; j++) {
        grid[i].push({ isAlive: Math.random() < 0.5 ? false : true });
      }
    }

    return grid;
  };

  const { gridWidth, gridHeight } = useSelector((state) => state.settings);
  const [gridArr, setGridArr] = useState(generateGrid());

  // useEffect(() => {
  //   setGridArr(generateGrid());
  // }, []);

  const updateGrid = () => {
    setGridArr(gridChecker(gridArr, gridWidth, gridHeight));
  };

  useEffect(() => {
    console.log("gridArr:", gridArr);
  }, [gridArr]);

  return (
    <AppStyled>
      <GlobalStyle />
      <button onClick={updateGrid}>Update Grid</button>
      <Grid gridArr={gridArr} />
    </AppStyled>
  );
};

export default App;
