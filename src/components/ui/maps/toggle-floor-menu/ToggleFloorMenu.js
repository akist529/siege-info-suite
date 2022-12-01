import ToggleFloorButton from '../../../buttons/toggle-floor-button/ToggleFloorButton'

export default function ToggleFloorMenu(props) {
    const { floorData, floorSelected, setFloorSelected } = props

    return (
        <div className="ToggleFloorMenu">
            { Object.keys(floorData).map(floor => <ToggleFloorButton key={floor} floor={floor} floorSelected={floorSelected} setFloorSelected={setFloorSelected} />) }
        </div>
    )
}