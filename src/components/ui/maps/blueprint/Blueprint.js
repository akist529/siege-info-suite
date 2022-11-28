export default function Blueprint(props) {
    const { mapName, floor, floorData } = props

    return (
        <div className="Blueprint">
            <img 
                alt={`${mapName} Blueprint - ${floor}`} 
                src={`/images/maps/${mapName}/${mapName}-${floor}`} 
                usemap="#workmap"
            />
            <map name="workmap">
                { floorData.map(item => <area key={item.room} shape={item.shape} coords={item.coords.flat(1).toString} alt={item.room}/>) }
            </map>
        </div>
    )
}