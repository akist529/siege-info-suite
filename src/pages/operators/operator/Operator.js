// Import components from React
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Import dummy data
import { operatorList } from 'dummy_data/operator_data'
import { weaponList } from 'dummy_data/weapon_data'
import { gadgetList } from 'dummy_data/gadget_data'

// Import components from project
import PageSubtitle from 'components/ui/page-subtitle/PageSubtitle'
import ItemCard from 'components/ui/items/item-card/ItemCard'
import OperatorLink from 'components/ui/operators/operator-link/OperatorLink'
import OperatorHint from 'components/ui/operators/operator-hint/OperatorHint'

export default function Operator() {
    const { name } = useParams()
    const [showFullPortrait, setShowFullPortrait] = useState()
    const [useElite, setUseElite] = useState(false)
    const [hasEliteSmall, setHasEliteSmall] = useState(false)
    const [hasEliteLarge, setHasEliteLarge] = useState(false)

    function resizeHandler() {
        setShowFullPortrait(window.innerWidth >= 740 ? true : false)
    }

    function checkImage(url) {
        return new Promise(function(resolve, reject) {
            var image = new Image()
    
            image.onload = function() {
                if (this.width > 0) {
                    resolve(url)
                }
            }
    
            image.onerror = function() {
                reject(url)
            }

            image.src = url
        })
    }

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const operatorData = operatorList.filter(operator => operator.name === capitalizedName)[0]
    const weaponData = weaponList.filter(weapon => weapon["users"].includes(capitalizedName))
    const gadgetData = gadgetList.filter(gadget => gadget["users"].includes(capitalizedName))

    useEffect(() => {
        setShowFullPortrait(window.innerWidth >= 740 ? true : false)
        checkImage(`/images/ops/portraits/elite/${capitalizedName}.webp`).then(() => setHasEliteSmall(true)).catch(() => setHasEliteSmall(false))
        checkImage(`/images/ops/portraits/elite/full/${capitalizedName}.webp`).then(() => setHasEliteLarge(true))
    }, [capitalizedName])

    window.addEventListener("resize", resizeHandler)

    return (
        <div className="Operator">
            <div className="operator-landing">
                <div className="portrait-backdrop">
                    <img className='operator-portrait' alt='Operator Portrait' src={ `/images/ops/portraits/${useElite ? 'elite/' : ''}${showFullPortrait ? 'full/' : ''}${capitalizedName}.webp` } />
                </div>
                <div className="operator-title">
                    <PageSubtitle subtitle={operatorData.name} />
                    <img alt={`${operatorData.name} Icon`} src={`/images/ops/icons/${operatorData.name}.webp`} />
                </div>
                { ((hasEliteSmall && window.innerWidth < 740) || (hasEliteLarge && window.innerWidth >= 740)) && <button className="toggle-skin" onClick={ () => setUseElite(!useElite) }>{useElite ? 'Elite' : 'Normal'}</button> }
                <PageSubtitle id="stats-header" subtitle="Stats" />
                <ul className="operator-stats">
                    { operatorData.team && <li>
                        <span>Team:</span>
                        <span>{ operatorData.team }</span>
                    </li>}
                    { operatorData.role && <li>
                        <span>Role:</span>
                        <span>{ operatorData.role }</span>
                    </li> }
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
                        <span>{ (() => {
                            if (operatorData.health === 1) {
                                return 'Light'
                            } else if (operatorData.health === 2) {
                                return 'Medium'
                            } else {
                                return 'Heavy'
                            }
                        })() }</span>
                    </li>}
                    { operatorData.health && <li>
                        <span>Speed:</span>
                        <div className="operator-speed">
                            { (() => {
                                let speed = []
                                for (let i = 0; i < (3 - operatorData.health); i++) {
                                    speed.push(<div className="operator-health-full"></div>)
                                }
                                return speed
                            })() }
                            { (() => {
                                var health = []
                                for (let i = 0; i < operatorData.health; i++) {
                                    health.push(<div className="operator-health-empty"></div>)
                                }
                                return health
                            })() }
                        </div>
                        <span>{ (() => {
                            if (operatorData.health === 1) {
                                return 'Fast'
                            } else if (operatorData.health === 2) {
                                return 'Normal'
                            } else {
                                return 'Slow'
                            }
                        })() }</span>
                    </li> }
                </ul>
                <PageSubtitle id="loadout-header" subtitle="Loadout" />
                <div className="operator-loadout">
                    <div className="loadout-category">
                        <span>Primary Weapons</span>
                        <div className="item-list">
                            { weaponData.filter(weapon => weapon.class === "Primary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="weapon" />) }
                        </div>
                    </div>
                    <div className="loadout-category">
                        <span>Secondary Weapons</span>
                        <div className="item-list">
                            { weaponData.filter(weapon => weapon.class === "Secondary").map(weapon => <ItemCard key={weapon.name.split(" ").join("-")} name={weapon.name.split(" ").join("-")} type="weapon" />) }
                        </div>
                    </div>
                    <div className="loadout-category">
                        <span>Gadgets</span>
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