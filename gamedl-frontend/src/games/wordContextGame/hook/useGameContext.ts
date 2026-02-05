import { useContext } from "react";
import GameContext from "../context/ContextGameContext";

export function useGameContext() {
	const context = useContext(GameContext);

	if (!context) {
		throw new Error("useGame must be used inside GameProvider");
	}

	return context;
}
