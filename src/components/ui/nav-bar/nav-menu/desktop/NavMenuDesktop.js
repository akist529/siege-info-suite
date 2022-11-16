import { default as NavButton } from '../../../../buttons/nav-menu-button/desktop/DesktopNavMenuButton'
import './NavMenuDesktop.css'

export default function NavMenuDesktop() {
    return (
        <ul className="NavMenu">
            <li><NavButton linkName="Operators" linkPage="" /></li>
            <li><NavButton linkName="Maps" linkPage="" /></li>
            <li><NavButton linkName="Weapons" linkPage="" /></li>
            <li><NavButton linkName="Quizzes" linkPage="" /></li>
            <li><NavButton linkName="Strat Builder" linkPage="" /></li>
            <li><NavButton linkName="My Stats" linkPage="" /></li>
        </ul>
    )
}