import React from 'react'

const SearchDropDown = (fitleredResults) => {
    const categories = {
        businesses: "Businesses",
        menuItems: "Menu Items",
        services: "Services",
        attributeItems: "Business Attributes & Ammenities"
    }

    return (
        <div className="search-drop-down">
            {displayCategory(fitleredResults.businesses)}
            {displayCategory(fitleredResults.menuItems)}
            {displayCategory(fitleredResults.attributeItems)}
            {displayCategory(fitleredResults.services)}
        </div>
    )
}

export default SearchDropDown