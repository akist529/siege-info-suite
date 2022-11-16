import './DesktopNavMenuButton.css'

export default function DesktopNavMenuButton(props) {
    const { linkName, linkPage } = props

    return (
        <button>
            <a href={linkPage}>{linkName}</a>
        </button>
    )
}