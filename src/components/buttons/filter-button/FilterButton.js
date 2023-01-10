// Import components from React
import { useState } from 'react'

export default function FilterButton(props) {
    // Import state
    const { setShowFilter } = props

    // Create state
    const [isFocused, setIsFocused] = useState(false)

    return (
        <button className={`FilterButton ${isFocused && 'focused'}`} 
            onMouseOver={ () =>  setIsFocused(true) } 
            onMouseLeave={ () => setIsFocused(false) }
            onClick={ () => setShowFilter(prevState => !prevState) }>
            <img alt='Filter' src="images/ui/filter.webp" />
            <span>Filter</span>
        </button>
    )
}