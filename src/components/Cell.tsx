import { CellStyled } from "./Cell.styled";

type CellProps = {
  isAlive: boolean;
  cellClickHandler: () => void;
};

const Cell = ({ isAlive, cellClickHandler }: CellProps) => {
  return <CellStyled onClick={cellClickHandler} isAlive={isAlive} />;
};

export default Cell;
