import { useGame } from "../../hooks/useGame";
import "./Stats.css"
import TimeStat from "./timeStat/TimeStat";

function Stats() {
    const { score, streak } = useGame();

    return (
        <div className="stats">
            <TimeStat></TimeStat>
            <div className="stat">
                <div className="stat-value">{score}</div>
                <div className="stat-label">Score</div>
            </div>

            <div className="stat">
                <div className="stat-value">{streak}</div>
                <div className="stat-label">Streak</div>
            </div>
        </div>
    );
}

export default Stats;
