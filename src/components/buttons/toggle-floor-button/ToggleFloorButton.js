export default function ToggleFloorButton(props) {
    const { floor, floorSelected, setFloorSelected } = props

    return (
        <button 
            className={`ToggleFloorButton ${(floorSelected === floor) ? 'floor-selected' : null}`}
        >
            {floor}
        </button>
    )
}