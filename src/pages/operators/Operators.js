// Import dummy data
import { operatorList } from 'dummy_data/operator_data'

// Import components from project
import OperatorCard from 'components/ui/operators/operator-card/OperatorCard'
import PageTitle from 'components/ui/page-title/PageTitle'
import FilterButton from 'components/buttons/filter-button/FilterButton'

export default function Operators() {
    return (
        <div className="Operators">
            <PageTitle title="Operators" />
            <FilterButton />
            <div className="operators-list">
                { operatorList.map(operator => <OperatorCard key={operator.name} name={operator.name} team={operator.team} />) }
            </div>
        </div>
    )
}