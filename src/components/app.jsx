import fullData from '../data.json'
import { shuffleMain } from '../logic/shuffle.js'
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
    const [total, setTotal] = useState(5)
    const [status, setStatus] = useState(0)
    const [diff, setDiff] = useState(0)
    const [data, setData] = useState([])

    function reset() {
        setStatus(0)
        setBest(0)
    }

    function start(stat) {
        setClicked([])
        setScore(0)
        setStatus(stat)
        setTotal(5 * (diff + 1))
        setData(shuffleMain(fullData, 5 * (diff + 1)))
    }

    function changeDiff(event, diff) {
        const button = event.target
        if (button.classList.contains('selected')) return
        document.querySelector('.selected').classList.remove('selected')
        button.classList.add('selected')
        setDiff(diff)
    }

    function clickCard(e) {
        const id = Number(e.target.parentElement.id)
        if (clicked.includes(id)) {
            start(2)
        } else {
            setClicked([...clicked, id])
            const curr = score + 1
            setScore(curr)
            if (curr > best) setBest(curr)
            if (curr >= total) {
                setStatus(3)
                start(3)
            } else if (status !== 1) setStatus(1)
        }
    }

    return (
        <>
        <Header reset={reset} />
        <Status status={status} />
        {status === 0 ? (<Start start={start} changeDiff={changeDiff} />) : (
            <>
            <Score score={score} best={best} />
            <Game data={data} clicked={clicked} diff={diff} clickCard={clickCard} />
            </>
        )}
        </>
    )
}