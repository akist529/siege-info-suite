import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import PageSubtitle from '../../../components/ui/page-subtitle/PageSubtitle'
import OperatorCard from '../../../components/ui/operators/operator-card/OperatorCard'
import { weaponList } from '../../../dummy_data/weapon_data'
import { operatorList } from '../../../dummy_data/operator_data'

export default function Weapon() {
    const { name } = useParams()
    
    const filteredName = name.toLowerCase().replace("-", "").replace(" ", "").replace(".", "")

    const weaponData = weaponList.filter(weapon => weapon.name.toLowerCase().replace("-", "").replace(" ", "").replace(".", "") === filteredName)[0]

    return (
        <div className="Weapon">
            <PageTitle title={weaponData.name} />
            <img alt="Weapon" src={ `/images/weapons/${weaponData.name.replace(" ", "-").replace(".", "")}.webp` } />
            <ul className="weapon-details">
                <li className="weapon-detail">
                    <span>Class:</span>
                    <span>{ weaponData.class }</span>
                </li>
                <li className="weapon-detail">
                    <span>Type:</span>
                    <span>{ weaponData.type }</span>
                </li>
                <li className="weapon-detail">
                    <span>Modes:</span>
                    <span>{ weaponData.modes.map(mode => `${mode}, `) }</span>
                </li>
            </ul>
            <PageSubtitle subtitle="Users" />
            <div className="weapon-users">
                { weaponData.users.map(user => <OperatorCard key={user} name={user} team={operatorList.filter(operator => operator.name === user)[0].team} /> ) }
            </div>
        </div>
    )
}