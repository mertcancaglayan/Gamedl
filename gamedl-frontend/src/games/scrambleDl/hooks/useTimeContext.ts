import { useContext } from "react";
import TimerContext from "../context/TimerContext";

export const useTimeContext = () => {
	const context = useContext(TimerContext);

	if (!context) throw new Error("TimerContext must be called from within the XContextProvider");

	return context;
};
