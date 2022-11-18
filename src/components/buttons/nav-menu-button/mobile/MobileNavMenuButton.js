export default function MobileNavMenuButton(props) {
    const { image, navFunction } = props

    return (
        <button className="NavMenuButton" onClick={navFunction}>
            <img alt="Nav Menu Button" src={`images/ui/${image}.png`}/>
        </button>
    )
}