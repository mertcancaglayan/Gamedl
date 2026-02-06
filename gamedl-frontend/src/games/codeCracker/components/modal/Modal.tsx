
import { useCipherContext } from "../../hooks/useCipherContext"
import "./Modal.css"

function Modal() {
    const { setIsModalOpen, setEntries, setGuesses, setIsGameEnd, setRefresh, currentQuote } = useCipherContext()

    function closeModal() {
        setIsModalOpen(false)
    }

    function newPuzzle() {
        setIsGameEnd(false);
        setGuesses({});
        setEntries([]);
        setRefresh(true);
        closeModal();
    }

    return (
        <div className="modal active" id="winModal">
            <div className="modal-content">
                <h2>DECODED!</h2>
                <p>Congratulations! You've successfully cracked the cipher.</p>
                <div className="hint-text" id="quoteAttribution">"{currentQuote?.text}" — {currentQuote?.author}</div>
                <button className="modal-btn" onClick={newPuzzle}><span>New Puzzle</span></button>
            </div>
        </div>
    )
}

export default Modal
