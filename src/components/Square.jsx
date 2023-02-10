import { useContext } from "react";
import { methodsContext } from "./App";

export default function Square({ index, value, currPlayer }) {
  const { updateSquares } = useContext(methodsContext);

  function handleClick(index) {
    if (value != null) return;
    updateSquares(index, currPlayer);
  }

  return (
    <>
      <div className={`square ${value} `} onClick={() => handleClick(index)} />
    </>
  );
}
