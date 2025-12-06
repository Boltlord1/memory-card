import data from '../basic-data.json'
import Card from './card'

export default function Game() {
    return (
        <div className='cards'>
            {data.map(char => <Card key={char.id} name={char.name} img="" />)}
        </div>
    )
}