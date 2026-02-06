import { useGame } from "../../hooks/useGame"
import "./GameOver.css"

function GameOver() {
    const { restartGame, score, totalSolved } = useGame()

    return (
        <div className="game-over show" id="gameOver">
            <h2>Game Over!</h2>
            <p>Great effort! Here are your final stats:</p>
            <div className="final-stats">
                <div className="final-stat">
                    <div className="final-stat-value" id="finalScore">{score}</div>
                    <div className="final-stat-label">Final Score</div>
                </div>

                <div className="final-stat">
                    <div className="final-stat-value" id="wordsGuessed">{totalSolved}</div>
                    <div className="final-stat-label">Words Solved</div>
                </div>

            </div>
            <button className="scramble-btn scramble-btn-primary" onClick={restartGame}>
                Play Again
            </button>
        </div>
    )
}

export default GameOver
