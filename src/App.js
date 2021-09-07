import { AppStyled, GlobalStyle } from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid } from "./settingsSlice.js";

import gridChecker from "./utils/gridChecker";
import { useEffect } from "react";

const App = () => {
  const { gridWidth, gridHeight, grid } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  const updateGridHandler = () => {
    dispatch(updateGrid(gridChecker(grid, gridWidth, gridHeight)));
  };

  useEffect(() => {
    console.log("grid:", grid);
  }, [grid]);

  return (
    <AppStyled>
      <GlobalStyle />
      <button onClick={updateGridHandler}>Update Grid</button>
      <Grid grid={grid} />
    </AppStyled>
  );
};

export default App;
