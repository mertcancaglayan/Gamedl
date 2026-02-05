import GameArea from "./components/gameArea/GameArea"
import ScrambleHeader from "./components/scrambleHeader/ScrambleHeader"
import Stats from "./components/Stats/Stats"
import { useGame } from "./hooks/useGame"

function ScrambleDl() {
    const { startGame } = useGame()

    return (
        <section className="scramble-game-section">
            <div className="game-wrapper">
                <ScrambleHeader></ScrambleHeader>
                <Stats></Stats>
                <GameArea></GameArea>
            </div>
            <hr />
            <div><button onClick={startGame}>Start</button></div>
        </section>
    )
}

export default ScrambleDl
