import { useEffect, useState } from "react";
import { quotes, symbols, type QUOTE } from "../../../data/quotes";

const shuffleSymbols = (): string[] => {
	return [...symbols].sort(() => Math.random() - 0.5);
};

const getRandomQuote = (): QUOTE => {
	return quotes[Math.floor(Math.random() * quotes.length)];
};


export const useCipher = () => {
	const [currentQuoteLetters, setCurrentQuoteLetters] = useState<string[]>([]);
	const [mapping, setMapping] = useState<Record<string, string>>({});

	useEffect(() => {
		const quote = getRandomQuote();

		const displayChars = Array.from(quote.text.toUpperCase());
		setCurrentQuoteLetters(displayChars);

		const uniqueAlphaChars = Array.from(
			new Set(
				quote.text
					.toUpperCase()
					.replace(/[^A-Z]/g, "")
					.split(""),
			),
		);

		const shuffledSymbols = shuffleSymbols();

		const newMapping: Record<string, string> = {};
		uniqueAlphaChars.forEach((letter, index) => {
			newMapping[letter] = shuffledSymbols[index];
		});

		setMapping(newMapping);
	}, []);

	return { currentQuoteLetters, mapping };
};
