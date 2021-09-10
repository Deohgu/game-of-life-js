import {
  AppStyled,
  GameContainer,
  ButtonContainer,
  Button,
  GlobalStyle,
} from "./App.styled";
import Grid from "./components/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
  updateGrid,
  updateAliveLocations,
  updateHasLiveNeighbours,
} from "./settingsSlice.js";

import gridClear from "./utils/gridClear";
import gridChecker from "./utils/gridChecker";
import gridGenerator from "./utils/gridGenerator";

const App = () => {
  const { gridWidth, gridHeight, grid, aliveLocations } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  const updateHandler = () => {
    const { newGrid, newAliveLocations } = gridChecker(
      grid,
      gridWidth,
      gridHeight,
      aliveLocations
    );

    dispatch(updateGrid(newGrid));
    dispatch(updateAliveLocations(newAliveLocations));
  };

  const generatorHandler = () => {
    const { newGrid, newAliveLocations, hasLiveNeighbours } = gridGenerator(
      gridWidth,
      gridHeight,
      "mixed",
      grid
    );

    dispatch(updateGrid(newGrid));
    dispatch(updateAliveLocations(newAliveLocations));
    dispatch(updateHasLiveNeighbours(hasLiveNeighbours));
  };

  return (
    <AppStyled>
      <GlobalStyle />
      <GameContainer>
        <ButtonContainer>
          <Button onClick={generatorHandler}>RANDOM</Button>
          <Button onClick={() => dispatch(updateGrid(gridClear(grid)))}>
            CLEAR
          </Button>
          <Button onClick={updateHandler}>UPDATE</Button>
        </ButtonContainer>
        <Grid />
      </GameContainer>
    </AppStyled>
  );
};

export default App;
