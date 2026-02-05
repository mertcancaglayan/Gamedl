import { createContext, useEffect, useState } from "react";
import { getRandomWord, shuffleWord } from "../utils/scrambleWordUtils";

interface ScrambleContextInterface {
    currentWord: string;
    shuffledWord: string;
    gameOver: boolean;
    time: number;
    startGame: () => void;
    nextWord: () => void;
    restartGame: () => void;
}

const ScrambleContext = createContext<ScrambleContextInterface | undefined>(undefined);

export function ScrambleProvider({ children }: { children: React.ReactNode }) {
    const [currentWord, setCurrentWord] = useState("");
    const [shuffledWord, setShuffledWord] = useState("");
    const [time, setTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const generateWord = () => {
        const word = getRandomWord();

        let shuffled = shuffleWord(word);
        while (shuffled === word) {
            shuffled = shuffleWord(word);
        }

        setCurrentWord(word);
        setShuffledWord(shuffled);
    };

    const startGame = () => {
        setTime(5);
        setGameOver(false);
        generateWord();
    };

    const nextWord = () => {
        if (gameOver) return;

        generateWord();
    };

    const restartGame = () => {
        startGame();
    };


    useEffect(() => {
        if (gameOver) return;

        if (time === 0) {
            setGameOver(true);
            return;
        }

        const timer = setTimeout(() => {
            setTime(t => t - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [time, gameOver]);



    const contextValue: ScrambleContextInterface = {
        currentWord,
        shuffledWord,
        time,
        gameOver,
        startGame,
        nextWord,
        restartGame
    };

    return (
        <ScrambleContext.Provider value={contextValue} >
            {children}
        </ScrambleContext.Provider>
    );
}

export default ScrambleContext;

