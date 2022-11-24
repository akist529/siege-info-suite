export default function ItemCard(props) {
    const { name, type } = props

    return (
        <div className="ItemCard">
            <span>{name}</span>
            <img alt={`${name} Icon`} src={`/images/${type}s/${name}.webp`} />
        </div>
    )
}