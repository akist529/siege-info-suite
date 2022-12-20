import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import ItemCard from '../../../components/ui/items/item-card/ItemCard'
import { operatorList } from '../../../dummy_data/operator_data'
import { weaponList } from '../../../dummy_data/weapon_data'
import { gadgetList } from '../../../dummy_data/gadget_data'

export default function Operator() {
    const { name } = useParams()
    const [showFullPortrait, setShowFullPortrait] = useState()

    function resizeHandler() {
        setShowFullPortrait(window.innerWidth >= 540 ? true : false)
    }

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const operatorData = operatorList.filter(operator => operator.name === capitalizedName)[0]
    const weaponData = weaponList.filter(weapon => weapon["users"].includes(capitalizedName))
    const gadgetData = gadgetList.filter(gadget => gadget["users"].includes(capitalizedName))

    useEffect(() => {
        setShowFullPortrait(window.innerWidth >= 540 ? true : false)
    }, [])

    window.addEventListener("resize", resizeHandler)

    return (
        <div className="Operator">
            <span></span>
            <div className="operator-header">
                <img id="operator-portrait" alt='Operator Portrait' src={ `/images/ops/portraits/${showFullPortrait ? 'full/' : ''}${capitalizedName}.webp` } />
                <div className="operator-title">
                    <PageSubtitle subtitle={operatorData.name} />
                    <img alt={`${operatorData.name} Icon`} src={`/images/ops/icons/${operatorData.name}.webp`} />
                </div>
            </div>
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
                    <span>Armor:</span>
                    { (() => {
                        let health = []
                        for (let i = 0; i < operatorData.health; i++) {
                            health.push(<div className="operator-health-full"></div>)
                        }
                        return health
                    })() }
                    { (() => {
                        var speed = []
                        for (let i = 0; i < (3 - operatorData.health); i++) {
                            speed.push(<div className="operator-health-empty"></div>)
                        }
                        return speed
                    })() }
                </li>}
            </ul>
            <PageSubtitle subtitle="Loadout" />
            <div className="operator-loadout">
                <span className="loadout-category">Primary Weapons</span>
                <div className="item-list">
                    { weaponData.filter(weapon => weapon.class === "Primary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="gun" />) }
                </div>
                <span className="loadout-category">Secondary Weapons</span>
                <div className="item-list">
                    { weaponData.filter(weapon => weapon.class === "Secondary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="gun" />) }
                </div>
                <span className="loadout-category">Gadgets</span>
                <div className="item-list">
                    { gadgetData.map(gadget => <ItemCard key={gadget.name.split(" ").join("-")} name={gadget.name.split(" ").join("-")} type="gadget" />) }
                </div>
                <span className="loadout-category">Special Ability</span>
                <ItemCard name={operatorData.ability.replace(/[.]/g, "").split(" ").join("-")} type="abilitie" />
            </div>
            <img className="operator-art" alt={`${capitalizedName} Artwork`} src={`/images/ops/art/${capitalizedName}.webp`} />
        </div>
    )
}