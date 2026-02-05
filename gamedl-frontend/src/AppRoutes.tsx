import CodeCracker from "./games/codeCracker/CodeCracker";
import WordContextGame from "./games/wordContextGame/WordContextGame";
import { CipherProvider } from "./games/codeCracker/components/context/CipherContext";
import Home from "./pages/Home";
import ScrambleDl from "./games/scrambleDl/ScrambleDl";
import { ScrambleProvider } from "./games/scrambleDl/context/ScrambleContext";
import { TimerProvider } from "./games/scrambleDl/context/TimerContext";
import { GameProvider } from "./games/wordContextGame/context/ContextGameContext";

export const appRoutes = [
    {
        path: "/",
        element: <Home />,
        name: "Home Page"
    }, {
        path: "/codecracker",
        element:
            <main>
                <CipherProvider>
                    <CodeCracker></CodeCracker>
                </CipherProvider>
            </main>
        ,
        name: "Code Cracker Game"
    }, {
        path: "/wordcontextgame",
        element: <main>
            <GameProvider>
                < WordContextGame />
            </GameProvider>

        </main>,
        name: "Word Context Game"
    }, {
        path: "/scramble-dl",
        element:
            <main>
                <TimerProvider>
                    <ScrambleProvider>
                        <ScrambleDl></ScrambleDl>
                    </ScrambleProvider>
                </TimerProvider>
            </main>,
        name: "Scramble-dl Game"
    }
]



