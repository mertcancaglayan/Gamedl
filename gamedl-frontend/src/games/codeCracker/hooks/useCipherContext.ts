import { useContext } from "react";
import CipherContext from "../components/context/CipherContext";


export function useCipherContext() {
	const ctx = useContext(CipherContext);
	if (!ctx) {
		throw new Error("useCipherContext must be used inside CipherProvider");
	}
	return ctx;
}
