export default function SearchBar() {
    function startSearch(e) {
        e.currentTarget.classList.add("SearchBarFocused")
        e.currentTarget.focus()
    }

    function clearSearch(e) {
        if (!e.currentTarget.value) {
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