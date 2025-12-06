export default function Start({ start, changeDiff }) {
    return (
        <>
        <div className="start">
            <button onClick={start}>Start</button>
        </div>
        <div className="difficulty">
            <button onClick={(e) => changeDiff(e, 0)} className="selected">Easy</button>
            <button onClick={(e) => changeDiff(e, 1)}>Medium</button>
            <button onClick={(e) => changeDiff(e, 2)}>Hard</button>
        </div>
        </>
    )
}