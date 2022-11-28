export default function Blueprint(props) {
    const { mapName, floor, floorData } = props

    function handleClick(e) {
        console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    }

    return (
        <div className="Blueprint">
            <img 
                alt={`${mapName} Blueprint - ${floor}`} 
                src={`/images/maps/${mapName}/${mapName}-${floor}.webp`}
                onClick={handleClick} 
            />
            <div className="blueprint-buttons">
                <svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                        className="blueprint-shape"
                        onMouseOver={e => e.currentTarget.classList.add("hoverable")} 
                        onMouseLeave={e => e.currentTarget.classList.remove("hoverable")}
                        points="463,165 549,165 549,183 712,183 712,165 790,165 790,250 463,250"/>
                </svg>
            </div>
        </div>
    )
}