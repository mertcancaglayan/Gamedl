import GameArea from "./components/gameArea/GameArea"
import ScrambleHeader from "./components/scrambleHeader/ScrambleHeader"
import Stats from "./components/Stats/Stats"
import { useGame } from "./hooks/useGame"
import GameOver from "./components/gameOver/GameOver";
import "./ScrambleDl.css"
import { useState } from "react";

function ScrambleDl() {
    const { startGame, gameOver } = useGame();
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false)

    const handleStart = () => {
        setIsGameStarted(true)
        startGame()
    }

    return (
        <section className="scramble-game-section">
            <div className="game-wrapper">
                <ScrambleHeader></ScrambleHeader>
                <Stats></Stats>
                {gameOver ? (
                    <GameOver></GameOver>
                ) : <GameArea></GameArea>}
                {!isGameStarted && <button className="scramble-btn scramble-btn-primary" onClick={handleStart}>Start the Game</button>}

            </div>
            <hr />

        </section>
    )
}

export default ScrambleDl
