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
	const [score, setScore] = useState<number>(24);
	const [streak, setStreak] = useState<number>(0);

	function getRandomWord() {
		return WORD_DATABASE[Math.floor(Math.random() * WORD_DATABASE.length)];
	}

	useEffect(() => {
		setWord(getRandomWord());
	}, []);

	function revealNext() {
		if (word && currentContexIndex < word.contexts.length - 1 && score >= 6) {
			setScore((prev) => prev - 6);
		console.log(score);

			setCurrentContextIndex((prev) => prev + 1);
		}
	}

	function displayHint() {
		if (isHintVisible || score < 6) return;

		setScore((prev) => prev - 6);
		console.log(score);
		
		setIsHintVisible(true);
	}

	function handleGuess() {
		if (isGameOver || !guess.trim() || !word) return;

		setGuess("");

		if (guess.toLowerCase() === word.word.toLowerCase()) {
			setIsGameOver(true);
			setIsGameWon(true);
			setScore((prev) => prev + 12);
			setStreak((prev) => prev + 1);
			return;
		}
		if (guesses.length == 4) {
			setIsGameOver(true);
			setStreak(0)
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
		score,
		streak,
	};
}
