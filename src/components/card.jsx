export default function Card({ name, img }) {
    return (
        <button className="card">
            <img src={img} alt="" />
            <h2>{name}</h2>
        </button>
    )
}