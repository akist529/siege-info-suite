// Import dummy data
import { mapList } from 'dummy_data/map_data'

// Import components from project
import PageTitle from 'components/ui/page-title/PageTitle'
import MapCard from 'components/ui/maps/map-card/MapCard'

export default function Maps() {
    return (
        <div className="Maps">
            <PageTitle title="Maps" />
            <div className="maps-list">
                { mapList.map(map => <MapCard key={ map.name } name={ map.name } playlists={ map.playlists } />) }
            </div>
        </div>
    )
}