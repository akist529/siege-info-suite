import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import ItemCard from '../../../components/ui/items/item-card/ItemCard'
import { operatorList } from '../../../dummy_data/operator_data'
import { weaponList } from '../../../dummy_data/weapon_data'
import { gadgetList } from '../../../dummy_data/gadget_data'

export default function Operator() {
    const { name } = useParams()

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const operatorData = operatorList.filter(operator => operator.name === capitalizedName)[0]
    const weaponData = weaponList.filter(weapon => weapon["users"].includes(capitalizedName))
    const gadgetData = gadgetList.filter(gadget => gadget["users"].includes(capitalizedName))

    return (
        <div className="Operator">
            <div className="operator-title">
                <PageTitle title={operatorData.name} />
                <img alt={`${operatorData.name} Icon`} src={`/images/ops/icons/${operatorData.name}.webp`} />
            </div>
            <div className="operator-profile">
                <div className="operator-portrait">
                    <img id="operator-portrait-full" alt='Operator Portrait' src={ `/images/ops/portraits/full/${capitalizedName}.webp` } />
                    <div id="operator-shadow"></div>
                </div>
                <div className="operator-info">
                    <div>
                        <PageSubtitle subtitle="Stats" />
                        <ul className="operator-stats">
                            { operatorData.team && <li>
                                <span>Team:</span>
                                <span>{ operatorData.team }</span>
                            </li>}
                            { operatorData.ability && <li>
                                <span>Ability:</span>
                                <span>{ operatorData.ability }</span>
                            </li>}
                            { operatorData.health && <li>
                                <span>Health:</span>
                                <span>{ operatorData.health }</span>
                            </li>}
                        </ul>
                    </div>
                    <div>
                        <PageSubtitle subtitle="Loadout" />
                        <div className="operator-loadout">
                            <span>Primary Weapons</span>
                            <div className="operator-primary">
                                { weaponData.filter(weapon => weapon.class === "Primary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="gun" />) }
                            </div>
                            <span>Secondary Weapons</span>
                            <div className="operator-secondary">
                                { weaponData.filter(weapon => weapon.class === "Secondary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="gun" />) }
                            </div>
                            <span>Gadgets</span>
                            <div className="operator-gadgets">
                                { gadgetData.map(gadget => <ItemCard key={gadget.name.split(" ").join("-")} name={gadget.name.split(" ").join("-")} type="gadget" />) }
                            </div>
                            <span>Special Ability</span>
                            <ItemCard name={operatorData.ability.replace(/[.]/g, "").split(" ").join("-")} type="abilitie" />
                        </div>
                    </div>
                </div>
            </div>
            <img className="operator-art" alt={`${capitalizedName} Artwork`} src={`/images/ops/art/${capitalizedName}.webp`} />
        </div>
    )
}