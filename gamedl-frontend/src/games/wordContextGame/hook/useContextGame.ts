import { useEffect, useState } from "react";
import { WORD_DATABASE, type WORDTYPE } from "../../../data/data";

export function useContextGame() {
	const [word, setWord] = useState<WORDTYPE>();
	const [currentContexIndex, setCurrentContextIndex] = useState<number>(1);
	const [isHintVisible, setIsHintVisible] = useState<boolean>(false);
	const [guess, setGuess] = useState<string>("");
	const [guesses, setGuesses] = useState<string[]>([]);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [isGameWon, setIsGameWon] = useState<boolean>(false);

	function getRandomWord() {
		return WORD_DATABASE[Math.floor(Math.random() * WORD_DATABASE.length)];
	}

	useEffect(() => {
		setWord(getRandomWord());
	}, []);

	function revealNext() {
		if (word && currentContexIndex < word.contexts.length - 1) {
			setCurrentContextIndex((prev) => prev + 1);
		}
	}

	function displayHint() {
		if (isHintVisible) return;
		setIsHintVisible(true);
	}

	function handleGuess() {
		if (isGameOver || !guess.trim() || !word) return;

		setGuess("");

		if (guess.toLowerCase() === word.word.toLowerCase()) {
			setIsGameOver(true);
			setIsGameWon(true);
			return;
		}
		if (guesses.length == 4) {
			setIsGameOver(true);
			setIsGameWon(false);
			return;
		}

		setGuesses((prev) => [...prev, guess]);
	}

	function handleRetry() {
		setWord(getRandomWord());
		setCurrentContextIndex(1);
		setIsHintVisible(false);
		setGuess("");
		setGuesses([]);
		setIsGameOver(false);
		setIsGameWon(false);
	}

	return {
		word,
		currentContexIndex,
		isHintVisible,
		guess,
		guesses,
		isGameOver,
		isGameWon,
		revealNext,
		displayHint,
		handleGuess,
		handleRetry,
		setGuess,
	};
}
