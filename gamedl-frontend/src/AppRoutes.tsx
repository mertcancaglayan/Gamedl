import CodeCracker from "./games/codeCracker/CodeCracker";
import WordContextGame from "./games/wordContextGame/WordContextGame";
import { CipherProvider } from "./games/codeCracker/components/context/CipherContext";
import Home from "./pages/Home";

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
        name: "Quiz Page"
    }, {
        path: "/wordcontextgame",
        element: <main>< WordContextGame /></main>,
        name: "Result Page"
    }
]



