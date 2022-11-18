export default function Dropdown(props) {
    const { links } = props

    return (
        <ul className="Dropdown">
            { links.map(link => <li key={link}><a href="./">{link}</a></li>) }
        </ul>
    )
}