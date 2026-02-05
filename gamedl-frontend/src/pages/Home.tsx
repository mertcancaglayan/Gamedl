import { useNavigate } from "react-router"
import { Fragment } from "react/jsx-runtime"
import "./Home.css"

function Home() {
    const navigate = useNavigate()

    return (
        <Fragment>
            <main className="home-page">
                <div className="container">
                    <header>
                        <h1>GAME-DL</h1>
                        <div className="tagline">Epic Browser Games!</div>
                    </header>

                    <div className="games-grid">
                        <div className="game-card">
                            <div className="game-thumbnail">🔐</div>
                            <div className="game-info">
                                <div className="game-title">Code Cracker</div>
                                <div className="game-description">
                                    Break the secret code in this classic logic puzzle. Use deductive reasoning to guess the correct color combination. Each guess reveals how close you are to cracking the code.
                                </div>
                                <button className="play-btn" onClick={() => navigate("/codecracker")}>Play Now</button>
                            </div>
                        </div>

                        <div className="game-card">
                            <div className="game-thumbnail">🎯</div>
                            <div className="game-info">
                                <div className="game-title">Context</div>
                                <div className="game-description">
                                    A word association challenge that tests your vocabulary and lateral thinking. Connect words through context clues and discover hidden relationships.
                                </div>
                                <button className="play-btn" onClick={() => navigate("/wordcontextgame")}>Play Now</button>
                            </div>
                        </div>

                        <div className="game-card">
                            <div className="game-thumbnail">🔤</div>
                            <div className="game-info">
                                <div className="game-title">Scramble</div>
                                <div className="game-description">
                                    Unscramble jumbled letters to form words before time runs out. Race against the clock in this fast-paced word puzzle game.
                                </div>
                                <button className="play-btn" onClick={() => navigate("/scramble-dl")}>
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Home