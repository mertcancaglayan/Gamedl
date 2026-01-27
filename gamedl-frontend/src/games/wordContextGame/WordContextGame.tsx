import { useEffect, useState } from "react"
import { WORD_DATABASE, type WORDTYPE } from "../../data/data"
import "../wordContextGame/WordContextGame.css"

function WordContextGame() {
    const [word, setWord] = useState<WORDTYPE>()
    const [currentContexIndex, setCurrentContextIndex] = useState<number>(1);
    const [isHintVisible, setIsHintVisible] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    function getRandomWord() {
        return WORD_DATABASE[Math.floor(Math.random() * WORD_DATABASE.length)]
    }

    useEffect(() => {
        setWord(getRandomWord())
    }, [])

    function revealNext() {
        if (currentContexIndex < 3) {
            setCurrentContextIndex(prev => prev + 1)
        }
        else return
    }

    useEffect(() => {
        console.log(word);
    }, [word])

    function displayHint() {
        if (isHintVisible) return
        setIsHintVisible(true)
    }

    function handleGuess() {
        if (isGameOver || !guess.trim() || !word) return;

        setGuess("")

        if (guess.toLowerCase() === word.word.toLowerCase()) {
            setIsGameOver(true)
            return
        }
        if (guesses.length >= 6) {
            setIsGameOver(true);
            return;
        }
        setGuesses(prev => [...prev, guess]);
    }

    return (
        <section>
            <div className="title-area">
                <h2>Meaning Shift</h2>
                <p>Guess the word from its different meanings</p>
            </div>
            <div className="score-area">
                <div><span>Score</span><span>0</span></div>
                <div><span>Streak</span><span>0</span></div>
            </div>

            <div className="game-area">
                <div ><p>Contexts revealed: {`${currentContexIndex + 1 } / ${word?.contexts.length}`}</p></div>
                <div className="context-list">
                    {word?.contexts.map((context, i) => {
                        return <div key={i} className={`context ${i <= currentContexIndex ? "visible" : ""}`}>{context}</div>
                    })}
                </div>
                <div className={`hint ${isHintVisible ? "visible" : ""}`}>{word?.hint}</div>
                <button onClick={revealNext}>Reveal next</button>
                <button onClick={displayHint}>Show Hint</button>

                {isGameOver ? <div className="display-message">
                    Congrats
                </div> : <div className="guess-area">
                    <label htmlFor="guess-input">Your guess</label>
                    <input
                        id="guess-input"
                        type="text"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleGuess()}
                    />
                    <button onClick={handleGuess}>Guess</button>
                </div>}


            </div>
        </section>
    )
}

export default WordContextGame
