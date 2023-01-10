// Import components from React
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ItemCard(props) {
    const { name, type } = props
    const [cardFocused, setCardFocused] = useState(false)

    const linkName = name.toLowerCase().replaceAll(" ", "-")
    const fileName = name.replaceAll(".", "").replaceAll(" ", "-")
    const displayName = name.replaceAll("-", " ")

    return (
        <Link to={ `/${type}s/${linkName}` }>
            <div className={ `ItemCard ${cardFocused && 'focused'}` } 
                onMouseOver={ () => setCardFocused(true) } 
                onMouseLeave={ () => setCardFocused(false) }>
                <span>{ displayName }</span>
                <img alt={ `${name} Icon` } src={ `/images/${type}s/${fileName}.webp` } />
            </div>
        </Link>
    )
}