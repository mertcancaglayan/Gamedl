import { createContext } from "react";
import { useContextGame } from "../hook/useContextGame";

const GameContext = createContext<ReturnType<typeof useContextGame> | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
    const game = useContextGame();

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
}


export default GameContext