export default function OperatorCard(props) {
    const { name, team } = props

    function focusCard(e) {
        e.currentTarget.classList.add("focused")
    }

    function unFocusCard(e) {
        e.currentTarget.classList.remove("focused")
    }

    return (
        <div className="OperatorCard" onMouseOver={focusCard} onMouseLeave={unFocusCard}>
            <div className="operator-details">
                <p id="name">{name}</p>
                <img id="faction" alt={`${team}`} src={ `images/ui/${team}.webp` } />
            </div>
            <img id="portrait" alt={`${name}`} src={`images/ops/portraits/${name}.webp`} />
            <img id="badge" alt={`${name}`} src={`images/ops/icons/${name}.webp`} />
        </div>
    )
}