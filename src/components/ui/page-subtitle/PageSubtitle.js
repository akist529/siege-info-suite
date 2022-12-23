export default function PageSubtitle(props) {
    const { id, subtitle } = props

    return (
        <h3 id={id} className="PageSubtitle">{subtitle}</h3>
    )
}