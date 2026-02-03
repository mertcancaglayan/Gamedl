import { useEffect, useState } from "react";
import { quotes, symbols, type QUOTE } from "../../../data/quotes";

interface CurrentQuoteLetter {
	letter: string;
	symbol: string;
}

const shuffleSymbols = (): string[] => {
	return [...symbols].sort(() => Math.random() - 0.5);
};

const getRandomQuote = (): QUOTE => {
	return quotes[Math.floor(Math.random() * quotes.length)];
};

export const useCipher = () => {
	const [currentQuoteLetters, setCurrentQuoteLetters] = useState<CurrentQuoteLetter[]>();
	const [mapping, setMapping] = useState<Record<string, string>>({});
	const [refreshed, setRefresh] = useState<boolean>(false);
	const [currentQuote, setCurrentQuote] = useState<QUOTE>();

	useEffect(() => {
		const quote = getRandomQuote();
		setCurrentQuote(quote);

		const displayChars = Array.from(quote.text.toUpperCase());

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

		const lettersWithSymbols: CurrentQuoteLetter[] = displayChars.map((char) => {
			if (char === " ") {
				return {
					letter: " ",
					symbol: "\u00A0", 
				};
			}

			return {
				letter: char,
				symbol: newMapping[char] ?? char,
			};
		});

		setCurrentQuoteLetters(lettersWithSymbols);

		setRefresh(false);
		setMapping(newMapping);
	}, [refreshed]);

	return { currentQuoteLetters, mapping, setRefresh, currentQuote };
};
