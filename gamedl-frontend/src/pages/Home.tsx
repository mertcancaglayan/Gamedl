import { useNavigate } from "react-router"
import { Fragment } from "react/jsx-runtime"

function Home() {
    const navigate = useNavigate()


    return (
        <Fragment>
            <button onClick={() => navigate("/codecracker")}>
                Start CodeCracker
            </button>
            <button onClick={() => navigate("/wordcontextgame")}>
                Start Word Context
            </button>
            <button onClick={() => navigate("/scramble-dl")}>
                Start Scramble-Dl
            </button>
        </Fragment>

    )
}

export default Home
