import MobileNavMenuButton from '../../../../buttons/nav-menu-button/mobile/MobileNavMenuButton'
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
            { (windowWidth > 480) && <MobileNavMenuButton image="user" navFunction={showUserMenu} /> }
            { (windowWidth > 380) && <MobileNavMenuButton image="settings" navFunction={showSettingsMenu} /> }
            <MobileNavMenuButton image="menu" navFunction={showAllMenu} />
        </div>
    )
}