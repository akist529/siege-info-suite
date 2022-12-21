export default function OperatorHint(props) {
    const { name, description, image } = props

    return (
        <div className="OperatorHint">
            <div className="hint-header">
                <div id="operator-name">
                    <img id="operator-icon" alt={ name } src={ `/images/ops/icons/${name}.webp` } />
                    <span>{ name }</span>
                </div>
                <img id="hint-expand" alt='Expand' src='/images/ui/add.webp' />
            </div>
        </div>
    )
}