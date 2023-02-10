import Square from "./Square";
import { useContext } from "react";
import { methodsContext } from "./App";

export default function Board({ squares }) {
  const { currPlayer } = useContext(methodsContext);
  return (
    <div className={"board " + currPlayer}>
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            value={square}
            currPlayer={currPlayer}
          />
        );
      })}
    </div>
  );
}
