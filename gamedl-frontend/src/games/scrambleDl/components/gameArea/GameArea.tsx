import { useGame } from "../../hooks/useGame"

function GameArea() {
    const { nextWord, currentWord, shuffledWord, } = useGame()


    return (
        <div className="game-area" id="gameArea">
            <div className="scrambled-word">
                <div className="letters" id="scrambledWord">
                    {Array.from(shuffledWord).map((letter) => {
                        console.log(letter);
                        
                        return (
                            <div className="letter">{letter}</div>
                        )
                    })}
                </div>
            </div>

            <div className="input-area">
                <input type="text" id="guessInput" placeholder="Type your guess..." maxLength={5} autoComplete="off" />
            </div>

            <div className="message info" id="message">The word was: {currentWord}</div>

            <div className="buttons">
                <button className="btn-secondary" onClick={nextWord}>Skip</button>
                {/* <button className="btn-primary" onClick="submitGuess()">Submit</button> */}
                <button className="btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default GameArea
