import { Trophy, Zap } from "lucide-react"

function GameScore() {
    return (
        <div className="score-area">
            <div className="score-area-tile"><div className="icon-box"><Trophy /></div>
                <div> <span>Score</span><span>0</span></div>
            </div>
            <div className="score-area-tile"><div className="icon-box"><Zap /></div>
                <div><span>Streak</span><span>0</span></div>
            </div>
        </div>
    )
}

export default GameScore
