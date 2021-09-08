import { AppStyled, GlobalStyle } from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid } from "./settingsSlice.js";

import gridClear from "./utils/gridClear";
import gridChecker from "./utils/gridChecker";
import gridGenerator from "./utils/gridGenerator";

const App = () => {
  const { gridWidth, gridHeight, grid } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  return (
    <AppStyled>
      <GlobalStyle />
      <button
        onClick={() =>
          dispatch(updateGrid(gridGenerator(gridWidth, gridHeight)))
        }
      >
        RESET
      </button>
      <button onClick={() => dispatch(updateGrid(gridClear(grid)))}>
        CLEAR
      </button>
      <button
        onClick={() =>
          dispatch(updateGrid(gridChecker(grid, gridWidth, gridHeight)))
        }
      >
        UPDATE
      </button>
      <Grid grid={grid} />
    </AppStyled>
  );
};

export default App;
