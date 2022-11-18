export default function DesktopNavMenuButton(props) {
    const { linkName, linkPage } = props

    return (
        <a href={linkPage} className="NavLink">
            <button>
                <h2>{linkName}</h2>
                <img alt="Expand More" src="images/ui/expand_more.png" />
            </button>
        </a>
    )
}