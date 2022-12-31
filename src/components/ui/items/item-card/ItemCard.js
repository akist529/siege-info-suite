import { Link } from 'react-router-dom'

export default function ItemCard(props) {
    const { name, type } = props

    function focusCard(e) {
        e.currentTarget.classList.add("focused")
    }

    function unFocusCard(e) {
        e.currentTarget.classList.remove("focused")
    }

    return (
        <Link to={`/${type}s/${name.toLowerCase().replaceAll(" ", "-")}`}>
            <div className="ItemCard" onMouseOver={focusCard} onMouseLeave={unFocusCard}>
                <span>{ name.replaceAll("-", " ") }</span>
                <img alt={`${name} Icon`} src={`/images/${type}s/${name.replaceAll(".", "").replaceAll(" ", "-")}.webp`} />
            </div>
        </Link>
    )
}