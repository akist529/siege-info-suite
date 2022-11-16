import NavMenuButton from '../../../../buttons/nav-menu-button/NavMenuButton'
import './NavMenuMobile.css'

export default function NavMenuMobile(props) {
    const { windowWidth } = props

    function showUserMenu() {
        console.log("User Menu shown")
    }

    function showSettingsMenu() {
        console.log("Settings Menu shown")
    }

    function showAllMenu() {
        console.log("All Menu shown")
    }

    return (
        <div className="NavMenu">
            { (windowWidth > 480) && <NavMenuButton image="user" navFunction={showUserMenu} /> }
            { (windowWidth > 380) && <NavMenuButton image="settings" navFunction={showSettingsMenu} /> }
            <NavMenuButton image="menu" navFunction={showAllMenu} />
        </div>
    )
}