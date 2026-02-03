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
        </Fragment>
    )
}

export default Home
