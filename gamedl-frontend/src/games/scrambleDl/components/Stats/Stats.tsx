import "./Stats.css"
import { useGame } from "../../hooks/useGame";

function Stats() {
    const { gameOver, restartGame, time } = useGame();

    return (
        <div className="stats">
            <div className="stat">
                <div className={`stat-value timer ${time <= 10 ? "warning" : ""}`}>
                    {time}
                </div>
                <div className="stat-label">Seconds</div>
            </div>

            <div className="stat">
                <div className="stat-value">12</div>
                <div className="stat-label">Score</div>
            </div>

            <div className="stat">
                <div className="stat-value">0</div>
                <div className="stat-label">Streak</div>
            </div>

            {gameOver && (
                <div className="game-over">
                    ⛔ Game Over
                    <button onClick={restartGame}>
                        Restart
                    </button>
                </div>
            )}
        </div>
    );
}

export default Stats;
