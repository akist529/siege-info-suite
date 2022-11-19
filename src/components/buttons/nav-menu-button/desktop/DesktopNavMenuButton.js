import { Link } from 'react-router-dom'

export default function DesktopNavMenuButton(props) {
    const { linkName } = props
    let linkPage = linkName

    if (/\s/.test(linkName)) {
        linkPage = linkName.split(" ").join("")
    }

    return (
        <Link to={linkPage} className="NavLink">
            <button>
                <h2>{linkName}</h2>
                <img alt="Expand More" src="images/ui/expand_more.png" />
            </button>
        </Link>
    )
}