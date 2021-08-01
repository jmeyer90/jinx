import React from 'react'
import { useSelector } from 'react-redux'
import BusinessIndexItem from '../businesses/businessIndexItem'

const SearchCategoryResults = ({category, input}) => {
    const businesses = useSelector(state => Object.values(state.entities.businesses))

    category = category == "menu_Items" ? "menuItems" : category
    category = category == "attributeItems" || category == "attrs" ? "businessAttrs" : category

    const categories = {
        businesses: "Names",
        services: "Services",
        businessAttrs: "Attributes & Ammenities",
        menuItems: "Menu Items",
        general: "are"
    }

    const titleInput = input.split(" ").map(word => 
        word[0].toUpperCase() + word.substr(1).toLowerCase())
        .join(" ")

    const renderTitle = () => {
        const text = businesses.length > 0 ?
            `Businesess with ${ categories[category]} Matching ${ titleInput }:`
            :
            `There Are No Businesses with Attributes Matching "${input}".`

        return (
            <h1 className="category-results-title">
                {text}
            </h1>
        )
    }

    return(
        <div className="category-results-container">
            {renderTitle()}
            <ul className="category-business-index-container">
                {Object.values(businesses).map(business =>
                    <BusinessIndexItem key={business.id} business={business} />
                )}
            </ul>
        </div>
    )
}

export default SearchCategoryResults