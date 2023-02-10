import "../css/ScoreBoard.css";

export default function ScoreBoard({ scores, currPlayer }) {
  return (
    <div className="ScoreBoard">
      <span className={`score x-score ${currPlayer == "x" ? "active" : null}`}>
        {" "}
        X - {scores.x}
      </span>
      <span
        className={`score circle-score ${
          currPlayer == "circle" ? "active" : null
        }`}
      >
        {" "}
        O - {scores.circle}
      </span>
    </div>
  );
}
