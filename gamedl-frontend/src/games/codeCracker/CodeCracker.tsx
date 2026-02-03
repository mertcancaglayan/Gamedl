import {  useEffect, useState } from "react";
import { useCipher } from "./hooks/useCipher";
import "./CodeCracker.css";
import Header from "./components/header/Header";
import GameInfo from "./components/gameInfo/GameInfo";
import { useCipherContext } from "./hooks/useCipherContext";

type Entry = {
    letter: string;
    symbol: string;
};

const shuffleEntries = (entries: Entry[]) => {
    return [...entries].sort(() => Math.random() - 0.5);
};

function CodeCracker() {
    const contextValue = useCipherContext()

    const { guesses, setGuesses } = contextValue

    const { mapping, currentQuoteLetters, setRefresh, currentQuote } = useCipher();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [isGameEnd, setIsGameEnd] = useState<boolean>(false)
    const [numberOfGuess, setNumberOfGuess] = useState<number>(0)

    useEffect(() => {
        if (!mapping) return;

        const newEntries = Object.entries(mapping).map(
            ([letter, symbol]) => ({ letter, symbol })
        );

        setEntries(shuffleEntries(newEntries));
    }, [mapping]);

    function handleSubmit(value: string, letter: string) {
        if (isGameEnd) return

        const upperCaseValue = value.toUpperCase()
        const isCorrect: boolean = upperCaseValue === letter

        console.log(letter, value)

        setNumberOfGuess((prev) => prev + 1)


        setGuesses((prev) => ({
            ...prev,
            [letter]: {
                value: upperCaseValue,
                isCorrect,
            },
        }));

    }

    useEffect(() => {
        if (entries.length === 0) return;

        const allSolved = entries.every(
            ({ letter }) => guesses[letter]?.isCorrect === true
        );

        if (allSolved) {
            setIsGameEnd(true);
        }
    }, [guesses, entries]);

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


                <div className="mapping-grid">
                    <div className="letter-grid">
                        {entries.map(({ letter, symbol }) => {
                            const guess = guesses[letter]

                            return (
                                <div key={letter} className={`letter-mapping ${guess?.isCorrect === true
                                    ? "correct"
                                    : guess?.isCorrect === false
                                        ? "incorrect"
                                        : ""
                                    }`}>
                                    <label className="symbol" htmlFor={letter}>{symbol}</label>

                                    <input
                                        className="letter-input"
                                        type="text"
                                        id={letter}
                                        data-letter={letter}
                                        maxLength={1}
                                        value={guesses[letter]?.value || ""}
                                        onChange={((e) => {
                                            const input = e.target as HTMLInputElement;
                                            handleSubmit(
                                                input.value,
                                                input.dataset.letter!
                                            );
                                        })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                const input = e.target as HTMLInputElement;
                                                handleSubmit(
                                                    input.value,
                                                    input.dataset.letter!
                                                );
                                            }
                                        }}

                                        disabled={guess?.isCorrect === true}
                                    />
                                </div>)
                        })}
                    </div>

                </div>



                <div className="controls">
                    <button className="btn-secondary" onClick={() => newPuzzle()}><span>New Puzzle</span></button>
                </div>

                {isGameEnd && <div><p>GameEnded</p>
                    <p>sentence:  {currentQuote?.text}</p>
                    <p>autoger : {currentQuote?.author}</p>
                </div>}
            </div>

        </section>
    );
}

export default CodeCracker;
