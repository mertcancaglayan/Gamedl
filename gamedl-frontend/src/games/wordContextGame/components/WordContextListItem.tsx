interface WordContextListItemProps {
    text: string;
    index: number;
    isVisible: boolean;
}

function WordContextListItem({ text, index, isVisible }: WordContextListItemProps) {
    return (
        <div className={`context ${isVisible ? "visible" : ""}`}>
            <span className="context-index">Context {index + 1}</span>
            <p>{text}</p>
        </div>
    );
}

export default WordContextListItem;