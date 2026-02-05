import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getRandomWord, shuffleWord } from "../utils/scrambleWordUtils";
import { useTimeContext } from "../hooks/useTimeContext";

interface ScrambleContextInterface {
    currentWord: string;
    shuffledWord: string;
    gameOver: boolean;
    startGame: () => void;
    nextWord: () => void;
    restartGame: () => void;
    handleGuess: (guess: string) => boolean;
    score: number;
}

const ScrambleContext = createContext<ScrambleContextInterface | undefined>(undefined);

export function ScrambleProvider({ children }: { children: React.ReactNode }) {
    const [currentWord, setCurrentWord] = useState("");
    const [shuffledWord, setShuffledWord] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState<number>(0);

    const { start, time } = useTimeContext();

    const generateWord = useCallback(() => {
        const word = getRandomWord();

        let shuffled = shuffleWord(word);
        while (shuffled === word) {
            shuffled = shuffleWord(word);
        }

        setCurrentWord(word);
        setShuffledWord(shuffled);
    }, []);

    const startGame = useCallback(() => {
        start(15);
        setGameOver(false);
        setScore(0);
        generateWord();
    }, [start, generateWord]);

    const nextWord = useCallback(() => {
        if (gameOver) return;
        generateWord();
    }, [gameOver, generateWord]);

    const restartGame = useCallback(() => {
        startGame();
    }, [startGame]);

    const handleGuess = useCallback((candidateGuess: string): boolean => {
        if (gameOver || !candidateGuess.trim()) return false;

        if (candidateGuess.toLowerCase() === currentWord.toLowerCase()) {
            setScore((prev) => prev + 12);
            nextWord();
            return true;
        } else if (candidateGuess.toLowerCase() !== currentWord.toLowerCase()) {
            setScore((prev) => prev - 6)
        }
 
        return false;
    }, [gameOver, currentWord, nextWord]);

    useEffect(() => {
        if (time === 0) {
            setGameOver(true);
        }
    }, [time]);

    const contextValue: ScrambleContextInterface = useMemo(() => ({
        currentWord,
        shuffledWord,
        gameOver,
        startGame,
        nextWord,
        restartGame,
        handleGuess,
        score
    }), [currentWord, shuffledWord, gameOver, startGame, nextWord, restartGame, handleGuess, score]);

    return (
        <ScrambleContext.Provider value={contextValue} >
            {children}
        </ScrambleContext.Provider>
    );
}

export default ScrambleContext;
