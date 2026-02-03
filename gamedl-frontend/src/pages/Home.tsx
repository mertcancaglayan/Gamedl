import CodeCracker from "../games/codeCracker/CodeCracker"
import { CipherProvider } from "../games/codeCracker/components/context/CipherContext"

function Home() {
    return (
        <main>
            {/* <WordContextGame></WordContextGame> */}
            <CipherProvider>
                <CodeCracker></CodeCracker>
            </CipherProvider>
        </main>
    )
}

export default Home
