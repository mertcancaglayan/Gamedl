import { createContext, useState, } from "react";
import { useCipher } from "../../hooks/useCipher";
import type { QUOTE } from "../../../../data/quotes";

export type GuessState = {
	value: string;
	isCorrect: boolean | null;
};

export type Entry = {
	letter: string;
	symbol: string;
};

export type CurrentQuoteLetter = {
	letter: string;
	symbol: string;
}

interface CipherContextType {
	currentQuoteLetters?: CurrentQuoteLetter[];
	mapping: Record<string, string>;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
	currentQuote?: QUOTE;
	guesses: Record<string, GuessState>;
	setGuesses: React.Dispatch<React.SetStateAction<Record<string, GuessState>>>;
	entries: Entry[];
	setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
	isGameEnd: boolean;
	setIsGameEnd: React.Dispatch<React.SetStateAction<boolean>>;
	numberOfGuess: number;
	setNumberOfGuess: React.Dispatch<React.SetStateAction<number>>;
}

const CipherContext = createContext<CipherContextType | undefined>(undefined);

export function CipherProvider({ children }: { children: React.ReactNode }) {
	const cipher = useCipher();

	const [guesses, setGuesses] = useState<Record<string, GuessState>>({});
	const [entries, setEntries] = useState<Entry[]>([]);
	const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
	const [numberOfGuess, setNumberOfGuess] = useState<number>(0);

	const contextValue = { ...cipher, guesses, setGuesses, entries, setEntries, isGameEnd, setIsGameEnd, numberOfGuess, setNumberOfGuess };

	return (
		<CipherContext.Provider value={contextValue}>
			{children}
		</CipherContext.Provider>
	);
}

export default CipherContext