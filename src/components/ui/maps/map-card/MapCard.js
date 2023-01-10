// Import components from React
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MapCard(props) {
    const { name } = props
    const [mapFocused, setMapFocused] = useState(false)
    
    const linkName = name.toLowerCase().replaceAll(/\s/g, "-")
    const fileName = name.split(" ").join("-")

    return (
        <Link to={`/maps/${linkName}`}>
            <div className={`MapCard ${mapFocused && 'focused'}`} 
            onMouseOver={() => setMapFocused(true)} 
            onMouseLeave={() => setMapFocused(false)}>
                <img id="map-preview" alt={name} src={`images/maps/${fileName}/${fileName}.webp`} />
                <span id="map-name">{name}</span>
            </div>
        </Link>
    )
}