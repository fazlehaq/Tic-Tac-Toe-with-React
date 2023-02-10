import React, { useState } from "react";
import "../css/App.css";
import Result from "./Result";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";
import Button from "./Button";

const PLAYERS = ["x", "circle"];
const WIN_CONDITION = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function initiateSquares() {
  return Array(9).fill(null);
}

export const methodsContext = React.createContext();

function App() {
  // maintain allmoves here
  let [squares, setSquares] = useState(new Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState(PLAYERS[0]);
  const [scores, setScores] = useState({ x: 0, circle: 0 });
  const [moveCount, setMoveCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameTie, setIsGameTie] = useState(false);

  const methodsContextValue = {
    updateSquares,
    currPlayer,
    handlePlayAgain,
  };

  return (
    <>
      <methodsContext.Provider value={methodsContextValue}>
        {isGameOver ? (
          <Result
            handlePlayAgain={handlePlayAgain}
            result={`Game Over ${currPlayer} wins!`}
          />
        ) : isGameTie ? (
          <Result handlePlayAgain={handlePlayAgain} result={`Game Tie `} />
        ) : (
          <div className="App">
            <ScoreBoard currPlayer={currPlayer} scores={scores} />
            <Board squares={squares} />
            <Button name={"reset-btn"} handler={handleResetButton}>
              Reset
            </Button>
          </div>
        )}
      </methodsContext.Provider>
    </>
  );

  function updateSquares(index, value) {
    // calculate and set new squares
    const newSquares = [...squares];
    newSquares[index] = value;
    setSquares(newSquares);

    // check if we Have Winner
    if (checkForWin(currPlayer, newSquares)) {
      setIsGameOver(true);
      setScores((prevScores) => {
        const copyScore = { ...prevScores };
        copyScore[currPlayer] += 1;
        return copyScore;
      });
      return;
    }

    // updating Move Count
    setMoveCount((prevMoveCount) => prevMoveCount + 1);
    // moveCount+1 because State Updates are batched
    if (moveCount + 1 == 9) {
      setIsGameTie(true);
      return;
    }

    //Toggling Player
    togglePlayer();
  }

  function checkForWin(symbol, squares) {
    if (moveCount + 1 < 5) return false;
    return WIN_CONDITION.some((conditions) => {
      return conditions.every((index) => {
        return squares[index - 1] == symbol;
      });
    });
  }

  function clearBoard() {
    setSquares(initiateSquares);
    setCurrPlayer(PLAYERS[0]);
  }

  function handlePlayAgain() {
    clearBoard();
    setIsGameOver(false);
    setIsGameTie(false);
    setMoveCount(0);
  }

  function handleResetButton() {
    handlePlayAgain();
    setScores({ x: 0, circle: 0 });
  }

  function togglePlayer() {
    setCurrPlayer((prevPlayer) =>
      prevPlayer == PLAYERS[0] ? PLAYERS[1] : PLAYERS[0]
    );
  }
}

export default App;
