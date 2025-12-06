import { useState, useEffect } from "react"

export default function Status({ status }) {
    const [playing, setPlaying] = useState('Playing')
    useEffect(() => {
        if (status !== 1) return setPlaying('Playing')
        const interval = setInterval(() => {
            if (playing.length > 9) setPlaying('Playing.')
            else setPlaying(playing + '.')
        }, 1000);
        return () => clearInterval(interval)
    }, [status, playing])
    if (status === 1) {
        return (
            <h2>{playing}</h2>
        )
    } else if (status === 2) {
        return (
            <h2>You lost! Game is automatically reset.</h2>
        )
    } else if (status === 3) {
        return (
            <h2>You won! Game is automatically reset.</h2>
        )
    }
}