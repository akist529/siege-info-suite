// Import components from project
import PageTitle from 'components/ui/page-title/PageTitle'
import PageSubtitle from 'components/ui/page-subtitle/PageSubtitle'
import CategoryCard from 'components/ui/weapons/category-card/CategoryCard'

const primaryCats = ['Light Machine Guns', 'Assault Rifles', 'Shotguns', 'Submachine Guns', 'Marksman Rifles', 'Ballistic Shields']
const secondCats = ['Handguns', 'Shotguns', 'Machine Pistols']

function catExists(catClass, cat) {
    if (catClass === 'Primary' && primaryCats.filter(category => category === cat)) {
        return true
    } else if (catClass === 'Secondary' && secondCats.filter(category => category === cat)) {
        return true
    }

    return false
}

export default function Weapons() {
    return (
        <div className="Weapons">
            <PageTitle title="Weapons" />
            <PageSubtitle subtitle="Primaries" />
            <div className="cat-list">
                { primaryCats.map(cat => {
                    if (catExists('Primary', cat)) {
                        return <CategoryCard weaponClass='Primary' category={ cat } key={ `Primary-${cat}` } />
                    } else {
                        return null
                    }
                }) }
            </div>
            <PageSubtitle subtitle="Secondaries" />
            <div className="cat-list">
                { secondCats.map(cat => {
                    if (catExists('Secondary', cat)) {
                        return <CategoryCard weaponClass='Secondary' category={ cat } key={ `Secondary-${cat}` } />
                    } else {
                        return null
                    }
                }) }
            </div>
        </div>
    )
}