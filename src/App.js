import { AppStyled, GlobalStyle } from "./App.styled";
import Grid from "./components/Grid";

const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <Grid />
    </AppStyled>
  );
};

export default App;
