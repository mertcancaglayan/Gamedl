import { useCipherContext } from "../../hooks/useCipherContext";

function CipherDisplay() {
    const { guesses, currentQuoteLetters } = useCipherContext()

    return (
        <div className="cipher-display">
            <div className="cipher-text">
                {currentQuoteLetters && currentQuoteLetters.map((current, i) => {
                    const guess = guesses[current.letter]
                    return (
                        <span key={i} className={`cipher-symbol ${guess?.isCorrect === true ? "correct-letter" : ""}`
                        }>{current.symbol}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default CipherDisplay
