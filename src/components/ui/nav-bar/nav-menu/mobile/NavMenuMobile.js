import { useState } from 'react'
import MobileNavMenuButton from 'components/buttons/nav-menu-button/mobile/MobileNavMenuButton'
import Dropdown from 'components/ui/nav-bar/dropdown/Dropdown'

export default function NavMenuMobile(props) {
    const { windowWidth } = props
    const [showAllMenuState, setShowAllMenuState] = useState(false)
    const allMenuItems = ['Operators', 'Maps', 'Weapons', 'Quizzes', 'Strat Builder', 'My Stats']

    function showSettingsMenu() {
        console.log("Settings Menu shown")
    }

    function showAllMenu() {
        setShowAllMenuState(prevState => !prevState)
    }

    return (
        <div className="NavMenuMobile">
            <div className="NavButton">
                <MobileNavMenuButton 
                    image="menu" 
                    navFunction={showAllMenu} />
                { showAllMenuState && <Dropdown links={allMenuItems} /> }
            </div>
            { (windowWidth > 380) && 
                <div className="NavButton">
                    <MobileNavMenuButton 
                        image="settings" 
                        navFunction={showSettingsMenu} />
                </div>
            }
        </div>
    )
}