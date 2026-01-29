import "../wordContextGame/WordContextGame.css"
import GameScore from "./components/GameScore";
import WordContextListItem from "./components/WordContextListItem";
import GameStatus from "./components/GameStatus";
import Instructions from "./components/Instructions";
import { useContextGame } from "./hook/useContextGame";
import GameActions from "./components/GameActions";
import GameTitle from "./components/GameTitle";
import GameHint from "./components/GameHint";

function WordContextGame() {
    const {
        word,
        currentContexIndex,
        isHintVisible,
        guess,
        guesses,
        isGameOver,
        isGameWon,
        revealNext,
        displayHint,
        handleGuess,
        handleRetry,
        setGuess
    } = useContextGame()

    if (!word) return <>Error</>


    return (
        <section className="context-game-section">
            <GameTitle />
            <GameScore />
            <div className="game-area">
                <div className="context-progress"><p>Contexts revealed: {`${currentContexIndex + 1} / ${word?.contexts.length}`}</p></div>
                <div className="context-list">
                    {word.contexts.map((context, i) => (
                        <WordContextListItem
                            key={i}
                            text={context}
                            index={i}
                            isVisible={i <= currentContexIndex}
                        />
                    ))}
                </div>
                <GameHint isHintVisible={isHintVisible} word={word} />
                <GameActions revealNext={revealNext} displayHint={displayHint} />

                {(
                    <GameStatus word={word} handleRetry={handleRetry} isGameWon={isGameWon} isGameOver={isGameOver}>
                        <div className="guess-area">
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
                        </div>
                    </GameStatus>
                )}
            </div>
            <Instructions />
        </section>
    )
}

export default WordContextGame
