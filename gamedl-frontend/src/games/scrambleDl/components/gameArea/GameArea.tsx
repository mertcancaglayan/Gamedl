import { useState } from "react";
import { useGame } from "../../hooks/useGame"
import "./GameArea.css"

function GameArea() {
    const { nextWord, shuffledWord, handleGuess, currentWord } = useGame()
    const [guess, setGuess] = useState("")

    function handleSubmit() {
        const isCorrect = handleGuess(guess);
        if (isCorrect) {
            setGuess("");
        }
    }
    console.log(currentWord);


    return (
        <div className="game-area" id="gameArea">
            <div className="scrambled-word">
                <div className="letters" id="scrambledWord">
                    {Array.from(shuffledWord).map((letter, i) => {
                        return (
                            <div key={i} className="letter">{letter}</div>
                        )
                    })}
                </div>
            </div>

            <div className="input-area">
                <input
                    value={guess}
                    onChange={(e) => {
                        const value = e.target.value.replace(/[^a-zA-Z]/g, "");
                        setGuess(value);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    placeholder="Type your guess..."
                    id="scramble-dl-input"
                    maxLength={5}
                    type="text"
                />
            </div>

            <div className="scramble-control-buttons">
                <button className="scramble-btn scramble-btn-primary" onClick={handleSubmit}>Submit</button>

                <button className="scramble-btn  scramble-btn-secondary" onClick={() => {
                    nextWord();
                    setGuess("");
                }}>Skip</button>
            </div>
        </div>
    )
}

export default GameArea
