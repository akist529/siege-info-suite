export default function BlueprintLocation(props) {
    const { currentRoom } = props

    return (
        currentRoom && <div className="BlueprintLocation">
            <span>{currentRoom}</span>
        </div>
    )
}