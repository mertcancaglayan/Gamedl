import { useEffect, useState } from "react";
import { useCipher } from "./hooks/useCipher";
import "./CodeCracker.css";

type Entry = {
    letter: string;
    symbol: string;
};

type GuessState = {
    value: string;
    isCorrect: boolean | null;
};

const shuffleEntries = (entries: Entry[]) => {
    return [...entries].sort(() => Math.random() - 0.5);
};

function CodeCracker() {
    const { mapping, currentQuoteLetters } = useCipher();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [guesses, setGuesses] = useState<Record<string, GuessState>>({});


    useEffect(() => {
        if (!mapping) return;

        const newEntries = Object.entries(mapping).map(
            ([letter, symbol]) => ({ letter, symbol })
        );

        setEntries(shuffleEntries(newEntries));
    }, [mapping, currentQuoteLetters]);

    function handleSubmit(value: string, letter: string) {
        console.log(value, letter);

        const upperCaseValue = value.toUpperCase()
        const isCorrect: boolean = upperCaseValue === letter

        setGuesses((prev) => ({
            ...prev,
            [letter]: {
                value: upperCaseValue,
                isCorrect,
            },
        }));
    }

    return (
        <section>
            <div className="quote">
                {currentQuoteLetters.map((letter, i) => {
                    const guess = guesses[letter]
                    return (
                        <span key={i} className={
                            guess?.isCorrect === true ? "correct-letter" : ""
                        }>{letter}</span>
                    )
                })}
            </div>

            <div className="input-area">
                {entries.map(({ letter, symbol }) => {
                    const guess = guesses[letter]

                    return (
                        <div key={letter} className={`letter-area ${guess?.isCorrect === true
                            ? "correct"
                            : guess?.isCorrect === false
                                ? "incorrect"
                                : ""
                            }`}>
                            <label htmlFor={letter}>{symbol}</label>

                            <input
                                type="text"
                                id={letter}
                                data-letter={letter}
                                maxLength={1}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        const input = e.target as HTMLInputElement;
                                        handleSubmit(
                                            input.value,
                                            input.dataset.letter!
                                        );
                                    }
                                }}
                            />
                        </div>)
                })}
            </div>
        </section>
    );
}

export default CodeCracker;
