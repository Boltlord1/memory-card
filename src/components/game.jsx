import Card from './card'
import { shuffle } from '../logic/shuffle.js'

export default function Game({ data, clicked, diff, clickCard }) {
    const shuffled = shuffle(data, 3 * (diff + 1), clicked)
    return (
        <div className='game'>
            {shuffled.map(char => <Card key={char.id} id={char.id} name={char.name} img={char.img} clickCard={clickCard} />)}
        </div>
    )
}