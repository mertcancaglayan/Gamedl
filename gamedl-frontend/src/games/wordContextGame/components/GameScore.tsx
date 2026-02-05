import { Trophy, Zap } from "lucide-react"
import { useGameContext } from "../hook/useGameContext";

function GameScore() {
    const { score, streak } = useGameContext();

    return (
        <div className="score-area">
            <div className="score-area-tile"><div className="icon-box"><Trophy /></div>
                <div> <span>Score</span><span>{score}</span></div>
            </div>
            <div className="score-area-tile"><div className="icon-box"><Zap /></div>
                <div><span>Streak</span><span>{streak}</span></div>
            </div>
        </div>
    )
}

export default GameScore
