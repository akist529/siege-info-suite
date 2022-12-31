import { weaponList } from '../../dummy_data/weapon_data'
import PageTitle from '../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../components/ui/page-subtitle/PageSubtitle'
import ItemCard from '../../components/ui/items/item-card/ItemCard'

export default function Weapons() {
    return (
        <div className="Weapons">
            <PageTitle title="Weapons" />
            <PageSubtitle subtitle="Primaries" />
            <PageSubtitle subtitle="Light Machine Guns" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Light Machine Gun").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Assault Rifles" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Assault Rifle").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Shotguns" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Shotgun").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Submachine Guns" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Submachine Gun").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Marksman Rifles" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Marksman Rifle").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Ballistic Shields" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Primary").filter(weapon => weapon.type === "Ballistic Shield").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Secondaries" />
            <PageSubtitle subtitle="Handguns" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Secondary").filter(weapon => weapon.type === "Handgun").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Shotguns" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Secondary").filter(weapon => weapon.type === "Shotgun").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
            <PageSubtitle subtitle="Machine Pistols" />
            <div className="weapon-list">
                { weaponList.filter(weapon => weapon.class === "Secondary").filter(weapon => weapon.type === "Machine Pistol").map(weapon => {
                    return <ItemCard key={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } name={ weapon.name.replaceAll(".", "").replaceAll(" ", "-") } type="weapon" />
                }) }
            </div>
        </div>
    )
}