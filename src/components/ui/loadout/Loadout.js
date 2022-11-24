export default function LoadOut(props) {
    const { name } = props

    return (
        <div className="Loadout">
            <div className="loadout-primary">
                <span>Primary</span>
            </div>
            <div className="loadout-secondary">
                <span>Secondary</span>
            </div>
            <div className="loadout-gadget">
                <span>Gadget</span>
            </div>
            <div className="loadout-ability">
                <span>Special Ability</span>
            </div>
        </div>
    )
}