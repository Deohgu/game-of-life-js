import {
  AppStyled,
  GameContainer,
  ButtonContainer,
  Button,
  GlobalStyle,
} from "./App.styled";
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
      <GameContainer>
        <ButtonContainer>
          <Button
            onClick={() =>
              dispatch(updateGrid(gridGenerator(gridWidth, gridHeight)))
            }
          >
            RESET
          </Button>
          <Button onClick={() => dispatch(updateGrid(gridClear(grid)))}>
            CLEAR
          </Button>
          <Button
            onClick={() =>
              dispatch(updateGrid(gridChecker(grid, gridWidth, gridHeight)))
            }
          >
            UPDATE
          </Button>
        </ButtonContainer>
        <Grid grid={grid} />
      </GameContainer>
    </AppStyled>
  );
};

export default App;
