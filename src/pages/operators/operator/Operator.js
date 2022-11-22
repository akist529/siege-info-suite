import { useParams } from 'react-router-dom'
import PageTitle from '../../../components/ui/page-title/PageTitle'
import { operatorList } from '../../../dummy_data/operator_data'

export default function Operator() {
    const { name } = useParams()

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    const operatorData = operatorList.filter(operator => operator.name === capitalizedName)[0]

    return (
        <div className="Operator">
            <PageTitle title={operatorData.name} />
            <div className="operator-profile">
                <img id="operator-portrait-full" alt='Operator Portrait' src={ `/images/ops/portraits/full/${capitalizedName}.webp` } />
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
        </div>
    )
}