export default function Header({ reset }) {
    return (
        <header className="header">
            <h1>Memory Card</h1>
            <button onClick={() => reset(0)}>Reset</button>
        </header>
    )
}