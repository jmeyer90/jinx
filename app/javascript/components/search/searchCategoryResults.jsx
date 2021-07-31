import React from 'react'
import { useSelector } from 'react-redux'
import BusinessIndexItem from '../businesses/businessIndexItem'

const SearchCategoryResults = ({category, input}) => {
    const businesses = useSelector(state => state.entities.businesses)

    const categories = {
        businesses: "Names",
        menu_items: "Menu Items",
        services: "Services",
        attrs: "Attributes & Ammenities"
    }

    return(
        <div className="category-results-container">
            <h1 className="category-results-title">
                Businesess with {categories[category]} Matching {input}:
            </h1>
            <ul className="category-business-index-container">
                {Object.values(businesses).map(business => 
                    <BusinessIndexItem key={business.id} business={business}/>
                )}
            </ul>
        </div>
    )
}

export default SearchCategoryResults