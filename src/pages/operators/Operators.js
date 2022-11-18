import { operatorList } from '../../dummy_data/operator_data'
import OperatorCard from '../../components/ui/operators/operator-card/OperatorCard'
import PageTitle from '../../components/ui/page-title/PageTitle'

export default function Operators() {
    return (
        <div className="Operators">
            <PageTitle title="Operators" />
            <div className="operators-list">
                { operatorList.map(operator => <OperatorCard key={operator.name} name={operator.name} team={operator.team} />) }
            </div>
        </div>
    )
}