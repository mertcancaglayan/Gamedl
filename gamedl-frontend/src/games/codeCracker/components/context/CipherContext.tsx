import { createContext, useState, } from "react";

export type GuessState = {
	value: string;
	isCorrect: boolean | null;
};

interface CipherContextType {
	guesses: Record<string, GuessState>;
	setGuesses: React.Dispatch<React.SetStateAction<Record<string, GuessState>>>;
}

const CipherContext = createContext<CipherContextType | undefined>(undefined);

export function CipherProvider({ children }: { children: React.ReactNode }) {
	const [guesses, setGuesses] = useState<Record<string, GuessState>>({});

	const contextValue = { guesses, setGuesses };

	return (
		<CipherContext.Provider value={contextValue}>
			{children}
		</CipherContext.Provider>
	);
}

export default CipherContext