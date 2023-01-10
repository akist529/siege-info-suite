import { useState } from 'react'
import { weaponList } from 'dummy_data/weapon_data'
import ItemCard from 'components/ui/items/item-card/ItemCard'

export default function CategoryCard(props) {
    const { weaponClass, category } = props
    const [isOpen, setIsOpen] = useState(false)

    const filteredWeapons = weaponList.filter(weapon => weapon.class === weaponClass).filter(weapon => weapon.type === getWeaponType())

    function displayName(weapon) {
        return (
            weapon.name.replaceAll(".", "").replaceAll(" ", "-")
        )
    } 

    function getWeaponType() {
        return category.slice(0, category.length -1)
    }

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="CategoryCard">
            <div className="category-header" onClick={ handleClick }>
                <span>{ category }</span>
                { !isOpen && <img alt="Expand Category" src="/images/ui/add.webp" /> }
                { isOpen && <img alt="Shrink Category" src="/images/ui/remove.webp" /> }
            </div>
            { isOpen && <div className="weapon-list">
                { filteredWeapons.map(weapon => {
                    return <ItemCard key={ displayName(weapon) } name={ displayName(weapon) } type="weapon" />
                }) }
            </div> }
        </div>
    )
}