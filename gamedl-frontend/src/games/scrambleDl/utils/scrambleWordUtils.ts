import { SCRAMBLE_WORDS_DATA } from "../../../data/scramble_dl_words";

export function getRandomWord(): string {
	return SCRAMBLE_WORDS_DATA[Math.floor(Math.random() * SCRAMBLE_WORDS_DATA.length)];
}

export function shuffleWord(word: string): string {
	const chars = word.split("");

	for (let i = chars.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[chars[i], chars[j]] = [chars[j], chars[i]];
	}

	return chars.join("");
}

export function generateScrambledPair() {
	const word = getRandomWord();

	let shuffled = shuffleWord(word);
	while (shuffled === word) {
		shuffled = shuffleWord(word);
	}

	return { word, shuffled };
}
