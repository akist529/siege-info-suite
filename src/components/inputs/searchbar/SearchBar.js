export default function SearchBar(props) {
    const { setShowNavMenus, setShowAppTitle, windowWidth } = props

    function startSearch(e) {
        if (windowWidth < 520) {
            setShowAppTitle(false)
        }

        if (windowWidth < 696) {
            setShowNavMenus(false)
        }

        e.currentTarget.classList.add("SearchBarFocused")
        e.currentTarget.focus()
    }

    function clearSearch(e) {
        if (!e.currentTarget.value) {
            setShowNavMenus(true)
            setShowAppTitle(true)
            e.currentTarget.classList.remove("SearchBarFocused")
            e.currentTarget.blur()
        }
    }

    return (
        <input className="SearchBar" alt="Search" placeholder="Search" 
            onMouseEnter={startSearch}
            onMouseLeave={clearSearch}
        />
    )
}