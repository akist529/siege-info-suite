import { Link } from 'react-router-dom'

export default function OperatorCardSmall(props) {
    const { name, team } = props

    function focusCard(e) {
        e.currentTarget.classList.add("focused")
    }

    function unFocusCard(e) {
        e.currentTarget.classList.remove("focused")
    }

    return (
        <Link to={`/operators/${name.toLowerCase()}`}>
            <div className="OperatorCardSmall" onMouseOver={focusCard} onMouseLeave={unFocusCard}>
                <img id="badge" alt={`${name}`} src={`images/ops/icons/${name}.webp`} />
                <div className="operator-details">
                    <span id="name">{name}</span>
                    <img id="faction" alt={`${team}`} src={ `images/ui/${team}.webp` } />
                </div>
            </div>
        </Link>
    )
}