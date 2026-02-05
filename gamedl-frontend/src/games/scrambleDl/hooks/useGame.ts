import { useContext } from "react";
import ScrambleContext from "../context/ScrambleContext";


export function useGame() {
	const context = useContext(ScrambleContext);

	if (!context) {
		throw new Error("useGame must be used inside GameProvider");
	}

	return context;
}
