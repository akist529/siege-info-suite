export default function PageTitle(props) {
    const { title } = props

    return (
        <div className="PageTitle">
            <h3>{title}</h3>
        </div>
    )
}