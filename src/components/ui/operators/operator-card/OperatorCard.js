import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function OperatorCard(props) {
    const { name, team } = props
    const [showPortrait, setShowPortrait] = useState()
    const [showTeam, setShowTeam] = useState()

    useEffect(() => {
        setShowPortrait(window.innerWidth >= 470 ? true : false)
        setShowTeam(window.innerWidth >= 380 ? true : false)
    }, [])

    function focusCard(e) {
        e.currentTarget.classList.add("focused")
    }

    function unFocusCard(e) {
        e.currentTarget.classList.remove("focused")
    }

    function resizeHandler() {
        setShowPortrait(window.innerWidth >= 470 ? true : false)
        setShowTeam(window.innerWidth >= 380 ? true : false)
    }

    window.addEventListener("resize", resizeHandler)

    return (
        <Link to={`/operators/${name.toLowerCase()}`}>
            <div className="OperatorCard" onMouseOver={focusCard} onMouseLeave={unFocusCard}>
                <div className="operator-details">
                    <span id="name">{name}</span>
                    { showTeam && <img id="faction" alt={`${team}`} src={ `images/ui/${team}.webp` } /> }
                </div>
                { showPortrait && <img id="portrait" alt={`${name}`} src={`images/ops/portraits/${name}.webp`} /> }
                <img id="badge" alt={`${name}`} src={`images/ops/icons/${name}.webp`} />
            </div>
        </Link>
    )
}