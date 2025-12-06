import Header from "./header"
import Game from "./game"
import Score from "./score"
import Status from "./status"
import Start from "./start"
import { useState } from "react"

export default function App() {
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    const [clicked, setClicked] = useState([])
    const [total, setTotal] = useState(8)
    const [status, setStatus] = useState(0)
    const [diff, setDiff] = useState(0)

    function reset(stat) {
        setClicked([])
        setScore(0)
        setStatus(stat)
        if (stat === 0) setBest(0)
    }

    function clickCard(e) {
        const id = e.target.parentElement.id
        if (clicked.includes(id)) {
            reset(2)
        } else {
            setClicked([...clicked, id])
            const curr = score + 1
            setScore(curr)
            if (curr > best) setBest(curr)
            if (curr > total) setStatus(3)
            else if (status !== 1) setStatus(1)
        }
    }

    return (
        <>
        <Header reset={reset} />
        <Status status={status} />
        {status === 0 ? (<Start setStatus={setStatus} setDiff={setDiff} />) : (
            <>
            <Score score={score} best={best} />
            <Game clickCard={clickCard} />
            </>
        )}
        </>
    )
}