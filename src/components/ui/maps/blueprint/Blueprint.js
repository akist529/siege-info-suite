export default function Blueprint(props) {
    const { mapName, floor, floorData } = props
    const mapImage = require(`../../../../../public/images/maps/${mapName}/${mapName}-${floor}.webp`)

    return (
        <div 
            className="Blueprint"
            style={{ 
                backgroundImage: `url(${mapImage})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="blueprint-buttons">
                { floorData.map(item => 
                    <img 
                        key={item.room} 
                        alt={item.room} 
                        src={`/images/maps/${mapName}/rooms/${floor}/${item.room.split(" ").join("-")}.webp`} 
                        className="blueprint-room" 
                        onMouseOver={e => e.currentTarget.classList.add("blueprint-hover")} 
                        onMouseLeave={e => e.currentTarget.classList.remove("blueprint-hover")} 
                        style={{ top: `${item.position.top}`, left: `${item.position.left}` }}
                    />) }
            </div>
        </div>
    )
}