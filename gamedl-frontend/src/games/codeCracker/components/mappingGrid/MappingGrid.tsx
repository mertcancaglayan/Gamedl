import { useEffect } from "react";
import { useCipherContext } from "../../hooks/useCipherContext";
import type { Entry } from "../context/CipherContext";

function MappingGrid() {
    const { entries, guesses, setGuesses, setEntries, isGameEnd, setNumberOfGuess, mapping } = useCipherContext()

    const shuffleEntries = (entries: Entry[]) => {
        return [...entries].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        if (!mapping) return;

        const newEntries = Object.entries(mapping).map(
            ([letter, symbol]) => ({ letter, symbol })
        );

        setEntries(shuffleEntries(newEntries));
    }, [mapping, setEntries]);

    function handleSubmit(value: string, letter: string) {
        if (isGameEnd) return

        if (!value) {
            setGuesses((prev) => {
                const newGuesses = { ...prev }
                delete newGuesses[letter]
                return newGuesses
            })
            return
        }

        const upperCaseValue = value.toUpperCase()
        const isCorrect: boolean = upperCaseValue === letter

        setNumberOfGuess((prev) => prev + 1)

        setGuesses((prev) => ({
            ...prev,
            [letter]: {
                value: upperCaseValue,
                isCorrect,
            },
        }));

    }

    return (
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

                                    const value = input.value
                                    handleSubmit(
                                        value,
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
    )
}

export default MappingGrid
