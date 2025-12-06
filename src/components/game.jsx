import basicData from '../basic-data.json'
import Card from './card'
import shuffle from '../logic/shuffle'

export default function Game({ clickCard }) {
    const data = shuffle(basicData)
    return (
        <div className='cards'>
            {data.map(char => <Card key={char.id} id={char.id} name={char.name} img={null} clickCard={clickCard} />)}
        </div>
    )
}