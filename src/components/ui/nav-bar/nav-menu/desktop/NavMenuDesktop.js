import { default as NavButton } from '../../../../buttons/nav-menu-button/desktop/DesktopNavMenuButton'

export default function NavMenuDesktop(props) {
    const { windowWidth } = props

    function showSettingsMenu() {
        console.log("Show Settings Menu")
    }

    return (
        <div className="NavMenuDesktop">
            <ul className="NavGameInfo">
                <li><NavButton linkName="Operators" linkPage="" /></li>
                <li><NavButton linkName="Maps" linkPage="" /></li>
                <li><NavButton linkName="Weapons" linkPage="" /></li>
                <li><NavButton linkName="Quizzes" linkPage="" /></li>
                <li><NavButton linkName="Strat Builder" linkPage="" /></li>
                <li><NavButton linkName="My Stats" linkPage="" /></li>
            </ul>
            { (windowWidth > 1100) && <ul className="NavAppInfo">
                <li><NavButton linkName="Settings" linkPage="" /></li>
                { (windowWidth > 1225) && <li><NavButton linkName="Buy Game" linkPage="" /></li> }
            </ul> }
        </div>
    )
}