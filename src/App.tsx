import {
  AppStyled,
  GameContainer,
  ButtonContainer,
  Button,
  GlobalStyle,
} from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import { selectSettings } from "./store";
import { updateGrid, updateliveNeighbours } from "./settingsSlice";

import gridClear from "./utils/gridClear";
import gridChecker from "./utils/gridChecker";
import gridGenerator from "./utils/gridGenerator";

const generatorHandler = (
  gridWidth: number,
  gridHeight: number,
  type: string,
  grid: { isAlive: boolean }[][] = [],
  dispatch: (state: any) => void
) => {
  const { newGrid, liveNeighbours } = gridGenerator(
    gridWidth,
    gridHeight,
    type,
    grid
  );
  dispatch(updateGrid(newGrid));
  dispatch(updateliveNeighbours(liveNeighbours));
};

const clearHandler = (
  dispatch: (state: any) => void,
  grid: { isAlive: boolean }[][]
) => {
  dispatch(updateGrid(gridClear(grid)));
  dispatch(updateliveNeighbours({}));
};

const updateHandler = (
  grid: { isAlive: boolean }[][],
  gridWidth: number,
  gridHeight: number,
  liveNeighbours: { [key: number]: { [key: number]: number } },
  dispatch: (state: any) => void
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

const App = () => {
  const { gridWidth, gridHeight, grid, liveNeighbours } =
    useSelector(selectSettings);

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
          <Button onClick={() => clearHandler(dispatch, grid)}>CLEAR</Button>
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
