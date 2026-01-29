import type { WORDTYPE } from "../../../data/data"

interface GameHintProps {
    isHintVisible: boolean;
    word: WORDTYPE;
}

function GameHint({ isHintVisible, word }: GameHintProps) {
    return (
        <div className={`hint ${isHintVisible ? "visible" : ""}`}>
            <span>💡 Hint</span>
            <p> {word?.hint}</p>
        </div>
    )
}

export default GameHint
