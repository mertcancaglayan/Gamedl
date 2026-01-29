import { useEffect, useState } from "react"
import { WORD_DATABASE, type WORDTYPE } from "../../data/data"
import "../wordContextGame/WordContextGame.css"
import { Lightbulb, RotateCcw, Tally2, Trophy, Zap } from 'lucide-react';

function WordContextGame() {
    const [word, setWord] = useState<WORDTYPE>()
    const [currentContexIndex, setCurrentContextIndex] = useState<number>(1);
    const [isHintVisible, setIsHintVisible] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [isGameWon, setIsGameWon] = useState<boolean>(false)

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
            setIsGameWon(true)
            return
        }
        if (guesses.length == 4) {
            setIsGameOver(true);
            setIsGameWon(false)
            return;
        }

        setGuesses(prev => [...prev, guess]);
    }

    function handleRetry() {
        setWord(getRandomWord())
        setCurrentContextIndex(1)
        setIsHintVisible(false)
        setGuess("")
        setGuesses([])
        setIsGameOver(false)
        setIsGameWon(false)
    }

    return (
        <section className="context-game-section">
            <div className="title-area">
                <h2>Meaning Shift</h2>
                <p>Guess the word from its different meanings</p>
            </div>
            <div className="score-area">
                <div className="score-area-tile"><div className="icon-box"><Trophy></Trophy></div>
                    <div> <span>Score</span><span>0</span></div>
                </div>
                <div className="score-area-tile"><div className="icon-box"><Zap></Zap></div>
                    <div><span>Streak</span><span>0</span></div>
                </div>
            </div>

            <div className="game-area">
                <div className="context-progress"><p>Contexts revealed: {`${currentContexIndex + 1} / ${word?.contexts.length}`}</p></div>
                <div className="context-list">
                    {word?.contexts.map((context, i) => {
                        return <div key={i} className={`context ${i <= currentContexIndex ? "visible" : ""}`}>
                            <span className="context-index">Context {i + 1}</span>
                            <p>{context}</p>
                        </div>
                    })}
                </div>
                <div className={`hint ${isHintVisible ? "visible" : ""}`}>
                    <span>💡 Hint</span>
                    <p> {word?.hint}</p>
                </div>
                <div className="action-btns">
                    <button className="btn btn-secondary" onClick={revealNext}><Tally2 /> Reveal next context</button>
                    <button className="btn btn-secondary" onClick={displayHint}><Lightbulb /> Show Hint</button>
                </div>

                {isGameOver ? <div className="display-message">
                    {isGameWon ? <div>
                        <div className="win-game">
                            🎉 Correct!
                        </div>
                        <button className="btn btn-primary" id="retry-button" onClick={handleRetry}><RotateCcw /> Next Word</button></div>
                        :
                        <div>
                            <div className="lost-game">❌ The word was: {word?.word}</div>
                            <button className="btn btn-primary" id="retry-button" onClick={handleRetry}><RotateCcw /> Next Word</button>
                        </div>
                    }
                </div> : <div className="guess-area">
                    <label htmlFor="guess-input">Your guess</label>
                    <div className="guess-area-actions">
                        <input
                            id="guess-input"
                            type="text"
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleGuess()}
                        />
                        <button className="btn btn-primary" onClick={handleGuess}>Submit</button>
                    </div>
                </div>}
            </div>

            <div className="instructions">
                <h3 className="instructions-title">
                    How to play
                </h3>
                <ul className="instructions-list">
                    <li>Read the context clues that show different meanings of the same word</li>
                    <li>Guess the word that fits all contexts</li>
                    <li>Reveal more contexts if needed (but you'll lose points!)</li>
                    <li>Fewer contexts used = more points earned</li>
                    <li>Build your streak by guessing correctly</li>
                </ul>
            </div>
        </section>
    )
}

export default WordContextGame
