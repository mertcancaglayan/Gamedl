import CodeCracker from "./games/codeCracker/CodeCracker";
import WordContextGame from "./games/wordContextGame/WordContextGame";
import { CipherProvider } from "./games/codeCracker/components/context/CipherContext";
import Home from "./pages/Home";
import ScrambleDl from "./games/scrambleDl/ScrambleDl";
import { ScrambleProvider } from "./games/scrambleDl/context/ScrambleContext";

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
        element: <main>< WordContextGame /></main>,
        name: "Word Context Game"
    }, {
        path: "/scramble-dl",
        element:
            <main>
                <ScrambleProvider>
                    <ScrambleDl></ScrambleDl>
                </ScrambleProvider>
            </main>,
        name: "Scramble-dl Game"
    }
]



