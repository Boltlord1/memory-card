export default function Start({ start, changeDiff }) {
    return (
        <>
        <div className="start">
            <button onClick={start}>Start</button>
        </div>
        <div>
            <button onClick={(e) => changeDiff(e, 0)}>Easy</button>
            <button onClick={(e) => changeDiff(e, 1)}>Medium</button>
            <button onClick={(e) => changeDiff(e, 2)}>Hard</button>
        </div>
        </>
    )
}