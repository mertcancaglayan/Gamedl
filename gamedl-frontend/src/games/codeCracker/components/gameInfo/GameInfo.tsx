import "./GameInfo.css"

interface gameInfoProps {
    totalLetter: number;
    numberOfGuess: number
}

function GameInfo({ totalLetter, numberOfGuess }: gameInfoProps) {
    return (
        <div className="game-info">
            <div className="info-card">
                <div className="info-label">Number Of Guesses</div>
                <div className="info-value" id="guesses">{numberOfGuess}</div>
            </div>
            <div className="info-card">
                <div className="info-label">Total Letters</div>
                <div className="info-value" id="total">{totalLetter}</div>
            </div>
            <div className="info-card">
                <div className="info-label">Hints Used</div>
                <div className="info-value" id="hints">0</div>
            </div>
        </div>
    )
}

export default GameInfo
