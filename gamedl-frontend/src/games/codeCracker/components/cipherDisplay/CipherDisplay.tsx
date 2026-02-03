import { useCipher } from "../../hooks/useCipher";
import { useCipherContext } from "../../hooks/useCipherContext";

function CipherDisplay() {
    const contextValue = useCipherContext()

    const { guesses } = contextValue;

    const { currentQuoteLetters, } = useCipher();



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
