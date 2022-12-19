import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import { mapList } from '../../../dummy_data/map_data'
import Blueprint from '../../../components/ui/maps/blueprint/Blueprint'
import BlueprintLocation from '../../../components/ui/maps/blueprint/location/BlueprintLocation'
import ToggleFloorMenu from '../../../components/ui/maps/toggle-floor-menu/ToggleFloorMenu'

export default function Map() {
    const { name } = useParams()
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

    for (let i = 0; i < capitalizedName.length; i++) {
        if (capitalizedName[i] === "-") {
            capitalizedName = capitalizedName.slice(0, i) + " " + capitalizedName.charAt(i + 1).toUpperCase() + capitalizedName.slice(i + 2)
        }
    }

    console.log(capitalizedName)

    const mapInfo = mapList.filter(map => map.name === capitalizedName)[0]

    const [floorSelected, setFloorSelected] = useState("1F")
    const [currentRoom, setCurrentRoom] = useState()

    return (
        <div className="Map">
            <PageTitle title={capitalizedName} />
            <ToggleFloorMenu
                floorData={mapInfo.layout} 
                floorSelected={floorSelected}
                setFloorSelected={setFloorSelected}
            />
            <Blueprint
                mapName={capitalizedName} 
                floor={floorSelected} 
                floorData={mapInfo.layout[floorSelected]}
                setCurrentRoom={setCurrentRoom}
            />
            <BlueprintLocation currentRoom={currentRoom} />
        </div>
    )
}