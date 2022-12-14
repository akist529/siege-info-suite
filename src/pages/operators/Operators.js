import { operatorList } from '../../dummy_data/operator_data'
import OperatorCardLarge from '../../components/ui/operators/operator-card/large/OperatorCardLarge'
import OperatorCardSmall from '../../components/ui/operators/operator-card/small/OperatorCardSmall'
import PageTitle from '../../components/ui/page-title/PageTitle'

export default function Operators() {
    return (
        <div className="Operators">
            <PageTitle title="Operators" />
            <div className="operators-list">
                { operatorList.map(operator => <OperatorCardLarge key={operator.name} name={operator.name} team={operator.team} />) }
            </div>
        </div>
    )
}