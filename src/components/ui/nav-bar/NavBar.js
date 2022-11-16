import { useEffect, useState } from 'react'

import NavMenuMobile from './nav-menu/mobile/NavMenuMobile'
import NavMenuDesktop from './nav-menu/desktop/NavMenuDesktop'
import './NavBar.css'

export default function NavBar() {
  const [R6LogoSize, setR6LogoSize] = useState('small')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    setR6LogoSize((windowWidth < 768) ? 'small' : 'large')
  }, [windowWidth])

  return (
    <nav className="NavBar">
      <div className="AppTitle">
        <img id="r6s-logo" alt="Rainbow Six: Siege" src={`images/ui/siege-logo-${R6LogoSize}.png`}/>
        <h1>Info Suite</h1>
      </div>
      { windowWidth < 768 ? <NavMenuMobile windowWidth={windowWidth} /> : <NavMenuDesktop /> }
    </nav>
  )
}
