export default function OperatorHint(props) {
    const { description, image } = props

    return (
        <div className="OperatorHint">
            <span>{description}</span>
            { image && <img alt='Operator Hint' src={image} /> }
        </div>
    )
}