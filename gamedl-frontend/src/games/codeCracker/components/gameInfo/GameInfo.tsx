import "./GameInfo.css"

interface gameInfoProps {
    totalLetter: number;
    numberOfGuess: number;
    author: string
}

function GameInfo({ totalLetter, numberOfGuess,author }: gameInfoProps) {
    return (
        <div className="cipher-game-info">
            <div className="info-card">
                <div className="info-label">Number Of Guesses</div>
                <div className="info-value" id="guesses">{numberOfGuess}</div>
            </div>
            <div className="info-card">
                <div className="info-label">Total Letters</div>
                <div className="info-value" id="total">{totalLetter}</div>
            </div>
            <div className="info-card">
                <div className="info-label">Author</div>
                <div className="info-value" id="author">{author}</div>
            </div>
        </div>
    )
}

export default GameInfo
