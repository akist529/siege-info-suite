import { useEffect, useState } from 'react'

import NavMenuMobile from './nav-menu/mobile/NavMenuMobile'
import NavMenuDesktop from './nav-menu/desktop/NavMenuDesktop'
import NavLoginButton from '../../buttons/nav-login-button/NavLoginButton'
import SearchBar from '../../inputs/searchbar/SearchBar'

export default function NavBar() {
  const [R6LogoSize, setR6LogoSize] = useState('small')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showNavMenus, setShowNavMenus] = useState(true)
  const [showAppTitle, setShowAppTitle] = useState(true)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    setR6LogoSize((windowWidth < 912) ? 'small' : 'large')
  }, [windowWidth])

  return (
    <nav className="NavBar">
      <div className="AppTitle">
        <img id="r6s-logo" alt="Rainbow Six: Siege" src={`/images/ui/siege-logo-${R6LogoSize}.png`}/>
        { showAppTitle && <h1>Info Suite</h1> }
      </div>
      { (windowWidth < 912) ? (showNavMenus && <NavMenuMobile windowWidth={windowWidth} />) : <NavMenuDesktop windowWidth={windowWidth} /> }
      <div className="AppControls">
        <NavLoginButton />
        <SearchBar 
          setShowNavMenus={setShowNavMenus} 
          setShowAppTitle={setShowAppTitle} 
          windowWidth={windowWidth} 
        />
      </div>
    </nav>
  )
}
