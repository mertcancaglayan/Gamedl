import { createContext, useEffect, useState, } from "react";
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
	guesses: Record<string, GuessState>;
	setGuesses: React.Dispatch<React.SetStateAction<Record<string, GuessState>>>;
	entries: Entry[];
	setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
	isGameEnd: boolean;
	setIsGameEnd: React.Dispatch<React.SetStateAction<boolean>>;
	numberOfGuess: number;
	setNumberOfGuess: React.Dispatch<React.SetStateAction<number>>;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	currentQuoteLetters: CurrentQuoteLetter[] | undefined;
	mapping: Record<string, string>;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
	currentQuote: QUOTE | undefined;
}

const CipherContext = createContext<CipherContextType | undefined>(undefined);

export function CipherProvider({ children }: { children: React.ReactNode }) {
	const cipher = useCipher();
	const [guesses, setGuesses] = useState<Record<string, GuessState>>({});
	const [entries, setEntries] = useState<Entry[]>([]);
	const [isGameEnd, setIsGameEnd] = useState<boolean>(false);
	const [numberOfGuess, setNumberOfGuess] = useState<number>(0);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	useEffect(() => {
		if (isGameEnd) {
			setIsModalOpen(true)
		}
	}, [isGameEnd])

	const contextValue = { ...cipher, guesses, setGuesses, entries, setEntries, isGameEnd, setIsGameEnd, numberOfGuess, setNumberOfGuess, isModalOpen, setIsModalOpen };

	return (
		<CipherContext.Provider value={contextValue}>
			{children}
		</CipherContext.Provider>
	);
}

export default CipherContext