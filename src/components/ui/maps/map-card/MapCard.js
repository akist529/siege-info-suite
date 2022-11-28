import { Link } from 'react-router-dom'

export default function MapCard(props) {
    const { name } = props

    function focusCard(e) {
        e.currentTarget.classList.add("focused")
    }

    function unFocusCard(e) {
        e.currentTarget.classList.remove("focused")
    }

    return (
        <Link to={`/maps/${name.toLowerCase()}`}>
            <div className="MapCard" onMouseOver={focusCard} onMouseLeave={unFocusCard}>
                <img id="map-preview" alt={name} src={`images/maps/${name.split(" ").join("-")}/${name.split(" ").join("-")}.webp`} />
                <span id="map-name">{name}</span>
            </div>
        </Link>
    )
}