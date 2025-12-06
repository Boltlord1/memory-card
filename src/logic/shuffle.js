function shuffleMain(data, length) {
    const array = []
    const indexes = []
    while (length > 0) {
        const rand = Math.floor(Math.random() * data.length)
        if (indexes.includes(rand)) continue
        indexes.push(rand)
        array.push(data[rand])
        length--
    }
    return array
}

function shuffle(data, length, clicked) {
    let valid = false
    const len = length
    const array = []
    const indexes = []
    while (length > 0) {
        const rand = Math.floor(Math.random() * data.length)
        if (indexes.includes(rand)) continue
        if (!valid && length === 1 && clicked.includes(data[rand].id)) continue
        else if (!valid && length === 1) {
            const randInd = Math.floor(Math.random() * len)
            array.splice(randInd, 0, data[rand])
            length--
            break
        }
        if (!valid && !clicked.includes(data[rand].id)) valid = true
        indexes.push(rand)
        array.push(data[rand])
        length--
    }
    return array
}

export { shuffleMain, shuffle }