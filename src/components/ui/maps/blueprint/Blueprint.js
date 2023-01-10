export default function Blueprint(props) {
    const { mapName, floor, floorData, setCurrentRoom } = props

    const mapImage = document.createElement("img")
    mapImage.src = `/images/maps/${mapName.replace(" ", "-")}/${mapName.replace(" ", "-")}-${floor}.webp`
    const mapImageWidth = mapImage.naturalWidth
    const mapImageHeight = mapImage.naturalHeight

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
                alt={`Blueprint - ${mapName} ${floor}`}
                src={`/images/maps/${mapName.replace(" ", "-")}/${mapName.replace(" ", "-")}-${floor}.webp`}
            />
            { floorData.map(item => {
                const image = document.createElement("img")
                image.src = `/images/maps/${mapName.replace(" ", "-")}/rooms/${floor}/${item.room.split(" ").join("-").replace(/[']/g, "").replace(/[()]/g, "").replace("/", "-")}.webp`
                const imageWidth = image.naturalWidth
                const divWidth = (window.innerWidth * 0.8)

                return (
                    <img 
                        key={ item.room } 
                        alt={ item.room } 
                        src={ image.src } 
                        className="blueprint-room" 
                        onMouseOver={ handleMouseOver } 
                        onMouseLeave={ handleMouseLeave } 
                        style={{ 
                            top: `calc(100% * ${ item.position.top }/${ mapImageHeight })`, 
                            left: `calc(100% * ${ item.position.left }/${ mapImageWidth })`, 
                            width: `${ imageWidth * (divWidth / mapImageWidth) }px`, 
                        }}
                    />)
                })
            }
        </div>
    )
}