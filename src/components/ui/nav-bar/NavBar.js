// Import components from React
import { useEffect, useState } from 'react'

// Import components from project
import NavMenuMobile from 'components/ui/nav-bar/nav-menu/mobile/NavMenuMobile'
import NavMenuDesktop from 'components/ui/nav-bar/nav-menu/desktop/NavMenuDesktop'
import NavLoginButton from 'components/buttons/nav-login-button/NavLoginButton'
import SearchBar from 'components/inputs/searchbar/SearchBar'

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
        <img id="r6s-logo" alt="Rainbow Six: Siege" src={`/images/ui/siege-logo-${R6LogoSize}.webp`}/>
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
