import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import { mapList } from '../../../dummy_data/map_data'
import Blueprint from '../../../components/ui/maps/blueprint/Blueprint'

export default function Map() {
    const { name } = useParams()
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const mapInfo = mapList.filter(map => map.name === capitalizedName)[0]

    const [floorSelected, setFloorSelected] = useState("1F")

    return (
        <div className="Map">
            <PageTitle title={capitalizedName} />
            <Blueprint 
                mapName={capitalizedName} 
                floor={floorSelected} 
                floorData={mapInfo.layout[floorSelected]}
            />
        </div>
    )
}