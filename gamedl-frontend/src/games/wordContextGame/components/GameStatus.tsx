import { RotateCcw } from 'lucide-react'
import type { WORDTYPE } from '../../../data/data'

interface GameStatusProps {
    word: WORDTYPE;
    handleRetry: () => void;
    isGameWon: boolean;
    isGameOver: boolean;
    children: React.ReactNode;
}

function GameStatus({ word, handleRetry, isGameWon, isGameOver, children }: GameStatusProps) {
    if (!isGameOver) return <>{children}</>
    return (
        <div className="display-message">
            {
                isGameWon ? <div className="win-game">
                    🎉 Correct!
                </div> : <div className="lost-game">❌ The word was: {word?.word}</div>
            }
            <button className="btn btn-primary" id="retry-button" onClick={handleRetry}><RotateCcw /> Next Word</button>
        </div>
    )
}

export default GameStatus
