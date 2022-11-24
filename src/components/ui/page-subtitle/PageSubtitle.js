export default function PageSubtitle(props) {
    const { subtitle } = props

    return (
        <div className="PageSubtitle">
            <h3>{subtitle}</h3>
        </div>
    )
}