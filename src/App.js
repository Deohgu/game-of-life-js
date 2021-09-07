import { AppStyled, GlobalStyle } from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid } from "./settingsSlice.js";

import gridClear from "./utils/gridClear";
import gridChecker from "./utils/gridChecker";

const App = () => {
  const { gridWidth, gridHeight, grid } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  const clearGridHandler = () => {
    dispatch(updateGrid(gridClear(grid)));
  };

  const updateGridHandler = () => {
    dispatch(updateGrid(gridChecker(grid, gridWidth, gridHeight)));
  };

  return (
    <AppStyled>
      <GlobalStyle />
      <button onClick={clearGridHandler}>CLEAR</button>
      <button onClick={updateGridHandler}>UPDATE</button>
      <Grid grid={grid} />
    </AppStyled>
  );
};

export default App;
