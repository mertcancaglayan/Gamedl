import { Lightbulb, Tally2 } from "lucide-react"

interface GameActionProps {
    revealNext: () => void; displayHint: () => void; 
}

function GameActions({ revealNext, displayHint }: GameActionProps) {
    return (
        <div className="action-btns">
            <button id="tally-btn" className="btn btn-secondary" onClick={revealNext}><Tally2 /> Reveal next context</button>
            <button className="btn btn-secondary" onClick={displayHint}><Lightbulb /> Show Hint</button>
        </div>
    )
}

export default GameActions
