import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import ItemCard from '../../../components/ui/items/item-card/ItemCard'
import OperatorLink from '../../../components/ui/operators/operator-link/OperatorLink'
import OperatorHint from '../../../components/ui/operators/operator-hint/OperatorHint'
import { operatorList } from '../../../dummy_data/operator_data'
import { weaponList } from '../../../dummy_data/weapon_data'
import { gadgetList } from '../../../dummy_data/gadget_data'

export default function Operator() {
    const { name } = useParams()
    const [showFullPortrait, setShowFullPortrait] = useState()

    function resizeHandler() {
        setShowFullPortrait(window.innerWidth >= 740 ? true : false)
    }

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const operatorData = operatorList.filter(operator => operator.name === capitalizedName)[0]
    const weaponData = weaponList.filter(weapon => weapon["users"].includes(capitalizedName))
    const gadgetData = gadgetList.filter(gadget => gadget["users"].includes(capitalizedName))

    useEffect(() => {
        setShowFullPortrait(window.innerWidth >= 740 ? true : false)
    }, [])

    window.addEventListener("resize", resizeHandler)

    return (
        <div className="Operator">
            <div className="operator-landing">
                { showFullPortrait && <img id='operator-portrait' alt='Operator Portrait' src={ `/images/ops/portraits/full/${capitalizedName}.webp` } /> }
                <div className="operator-basics">
                    <div className="operator-header">
                        { !showFullPortrait && <img id="operator-portrait" alt='Operator Portrait' src={ `/images/ops/portraits/${capitalizedName}.webp` } /> }
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
                            <div className="operator-health">
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
                            </div>
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
                    </div>
                </div>
            </div>
            <img className="operator-art" alt={`${capitalizedName} Artwork`} src={`/images/ops/art/${capitalizedName}.webp`} />
            <PageSubtitle subtitle="Special Ability" />
            <ItemCard name={operatorData.ability.replace(/[.]/g, "").split(" ").join("-")} type="abilitie" />
            <span className="operator-description">{operatorData.description}</span>
            { operatorData.synergies && <PageSubtitle subtitle="Synergies" /> }
            { operatorData.synergies && <div className="operator-synergies">
                { operatorData.synergies.map(operator => {
                    return (
                        <OperatorLink name={operator.name} description={operator.description} />
                    )
                }) }
            </div> }
            { operatorData.counters && <PageSubtitle subtitle="Counters" /> }
            { operatorData.counters && <div className="operator-counters">
                { operatorData.counters.map(operator => {
                    return (
                        <OperatorLink name={operator.name} description={operator.description} />
                    )
                }) }
            </div> }
            { operatorData.tips && <PageSubtitle subtitle="Tips & Tricks" /> }
            { operatorData.tips && <div className="operator-hints">
                { operatorData.tips.map(hint => {
                    return (
                        <OperatorHint description={hint.description} image={hint.image} />
                    )
                }) }
            </div> }
        </div>
    )
}