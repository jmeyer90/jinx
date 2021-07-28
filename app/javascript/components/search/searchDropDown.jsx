import React from 'react'

const SearchDropDown = ({filteredResults}) => {
    const categories = {
        businesses: "Businesses",
        menuItems: "Menu Items",
        services: "Services",
        attributeItems: "Business Attributes & Ammenities"
    }

    if (filteredResults.businesses.length == 0 &&
        filteredResults.menuItems.length == 0 &&
        filteredResults.services.length == 0 &&
        filteredResults.attributeItems.length == 0) {
        return(
            <div className="search-drop-down">
                <h1 className="search-drop-down-title">No Results Found</h1>
            </div>
        )
    }

    const displayCategory = category => {
        console.log(category)
        if(filteredResults[category] && filteredResults[category].length > 0){
            return (
                <section className="search-drop-down-category">
                    <h1 className="search-drop-down-title">{categories[category]}</h1>
                    <ul className="search-drop-down-items">
                        {filteredResults[category].slice(0, 5).map(result => (
                            <p className="search-drop-down-item" 
                                key={result.name}>
                                {result.name}
                            </p>
                        ))}
                    </ul>
                </section>
            )
        } else {
            return null
        }
    }

    return (
        <div className="search-drop-down">
            {displayCategory("businesses")}
            {displayCategory("menuItems")}
            {displayCategory("attributeItems")}
            {displayCategory("services")}
        </div>
    )
}

export default SearchDropDown