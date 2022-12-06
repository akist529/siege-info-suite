import { useState } from 'react'

export default function Blueprint(props) {
    const { mapName, floor, floorData, setCurrentRoom } = props

    function handleMouseOver(e) {
        e.currentTarget.classList.add("blueprint-hover")
        setCurrentRoom(e.currentTarget.alt)
    }

    function handleMouseLeave(e) {
        e.currentTarget.classList.remove("blueprint-hover")
        setCurrentRoom("")
    }

    return (
        <div className="Blueprint">
            <img 
                className="blueprint-image"
                alt={`Blueprint - ${mapName} - ${floor}`}
                src={`/images/maps/Villa/Villa-1F.webp`}
            />
            { floorData.map(item => 
                <img 
                    key={item.room} 
                    alt={item.room} 
                    src={`/images/maps/${mapName}/rooms/${floor}/${item.room.split(" ").join("-").replace(/[']/g, "")}.webp`} 
                    className="blueprint-room" 
                    onMouseOver={handleMouseOver} 
                    onMouseLeave={handleMouseLeave} 
                    style={{ top: `${item.position.top}`, left: `${item.position.left}`, width: `${item.width}` }}
                />) }
        </div>
    )
}