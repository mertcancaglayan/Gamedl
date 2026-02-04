import { useEffect } from "react";
import "./CodeCracker.css";
import Header from "./components/header/Header";
import GameInfo from "./components/gameInfo/GameInfo";
import { useCipherContext } from "./hooks/useCipherContext";
import MappingGrid from "./components/mappingGrid/MappingGrid";
import Modal from "./components/modal/Modal";


function CodeCracker() {
    const {
        entries,
        guesses,
        setGuesses,
        setEntries,
        setIsGameEnd,
        numberOfGuess,
        currentQuoteLetters,
        setRefresh,
        isModalOpen
    } = useCipherContext()

    useEffect(() => {
        if (entries.length === 0) return;

        const allSolved = entries.every(
            ({ letter }) => guesses[letter]?.isCorrect === true
        );

        if (allSolved) {
            setIsGameEnd(true);
        }
    }, [guesses, entries, setIsGameEnd]);

    function newPuzzle() {
        setIsGameEnd(false);
        setGuesses({});
        setEntries([]);
        setRefresh(true);
    }


    return (
        <section className="code-cracker">
            <div className="code-cracker-container">
                <Header></Header>
                <GameInfo totalLetter={entries.length} numberOfGuess={numberOfGuess}></GameInfo>
                <div className="cipher-display">
                    <div className="cipher-text">
                        {currentQuoteLetters && currentQuoteLetters.map((current, i) => {
                            const guess = guesses[current.letter]
                            return (
                                <span key={i} className={`cipher-symbol ${guess?.isCorrect === true ? "correct-letter" : ""}`
                                }>{current.symbol}</span>
                            )
                        })}
                    </div>
                </div>
                <MappingGrid></MappingGrid>
                <div className="controls">
                    <button className="code-cracker-btn" onClick={() => newPuzzle()}><span>New Puzzle</span></button>
                </div>
                {isModalOpen && <Modal></Modal>}

            </div>
        </section>
    );
}

export default CodeCracker;
