import {
  AppStyled,
  GameContainer,
  ButtonContainer,
  Button,
  GlobalStyle,
} from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { updateGrid, updateliveNeighbours } from "./settingsSlice.js";

import gridClear from "./utils/gridClear";
import gridChecker from "./utils/gridChecker";
import gridGenerator from "./utils/gridGenerator";

const updateHandler = (
  grid,
  gridWidth,
  gridHeight,
  liveNeighbours,
  dispatch
) => {
  const { newGrid, newliveNeighbours } = gridChecker(
    grid,
    gridWidth,
    gridHeight,
    liveNeighbours
  );
  dispatch(updateGrid(newGrid));
  dispatch(updateliveNeighbours(newliveNeighbours));
};

const generatorHandler = (gridWidth, gridHeight, type, grid, dispatch) => {
  const { newGrid, liveNeighbours } = gridGenerator(
    gridWidth,
    gridHeight,
    type,
    grid
  );
  dispatch(updateGrid(newGrid));
  dispatch(updateliveNeighbours(liveNeighbours));
};

const App = () => {
  const { gridWidth, gridHeight, grid, liveNeighbours } = useSelector(
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
              generatorHandler(gridWidth, gridHeight, "mixed", grid, dispatch)
            }
          >
            RANDOM
          </Button>
          <Button onClick={() => dispatch(updateGrid(gridClear(grid)))}>
            CLEAR
          </Button>
          <Button
            onClick={() =>
              updateHandler(
                grid,
                gridWidth,
                gridHeight,
                liveNeighbours,
                dispatch
              )
            }
          >
            UPDATE
          </Button>
        </ButtonContainer>
        <Grid />
      </GameContainer>
    </AppStyled>
  );
};

export default App;
