export default function Score({ score, best }) {
    return (
        <div className="score">
            <h2>Score: {score}</h2>
            <h2>Best: {best}</h2>
        </div>
    )
}