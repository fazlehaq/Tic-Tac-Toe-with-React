import "../css/Result.css";

export default function Result({ result, handlePlayAgain }) {
  return (
    <div className="Result-wrapper">
      <div className="Result">
        <h1>Game Over</h1>
        <div>{result}</div>
        <div className="buttons">
          <button className="play-again-btn" onClick={handlePlayAgain}>
            Play Again!
          </button>
        </div>
      </div>
    </div>
  );
}
