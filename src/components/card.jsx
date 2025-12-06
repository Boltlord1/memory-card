export default function Card({ id, name, img, clickCard }) {
    return (
        <button id={id} className="card" onClick={clickCard}>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </button>
    )
}