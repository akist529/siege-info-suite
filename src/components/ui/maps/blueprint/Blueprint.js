import { useState } from 'react'

export default function Blueprint(props) {
    const { mapName, floor, floorData, setCurrentRoom, floorSelected } = props

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
                src={`/images/maps/${mapName}/${mapName}-${floor}.webp`}
            />
            { floorData.map(item => {
                const image = document.createElement("img")
                image.src = `/images/maps/${mapName}/rooms/${floor}/${item.room.split(" ").join("-").replace(/[']/g, "")}.webp`
                const imageWidth = image.naturalWidth
                const divWidth = (window.innerWidth * 0.8)

                return (
                    <img 
                        key={item.room} 
                        alt={item.room} 
                        src={image.src} 
                        className="blueprint-room" 
                        onMouseOver={handleMouseOver} 
                        onMouseLeave={handleMouseLeave} 
                        style={{ 
                            top: `${item.position.top}`, 
                            left: `${item.position.left}`, 
                            width: `${imageWidth * (divWidth / 1600)}px`, 
                        }}
                    />)
                })
            }
        </div>
    )
}