import { default as NavButton } from '../../../../buttons/nav-menu-button/desktop/DesktopNavMenuButton'

export default function NavMenuDesktop(props) {
    const { windowWidth } = props

    return (
        <div className="NavMenuDesktop">
            <ul className="NavGameInfo">
                <li><NavButton linkName="Operators" /></li>
                <li><NavButton linkName="Maps" /></li>
                <li><NavButton linkName="Weapons" /></li>
                <li><NavButton linkName="Quizzes" /></li>
                <li><NavButton linkName="Strat Builder" /></li>
                <li><NavButton linkName="My Stats" /></li>
            </ul>
            { (windowWidth > 1100) && <ul className="NavAppInfo">
                <li><NavButton linkName="Settings" linkPage="" /></li>
                { (windowWidth > 1225) && <li><NavButton linkName="Buy Game" linkPage="" /></li> }
            </ul> }
        </div>
    )
}