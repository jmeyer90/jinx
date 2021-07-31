import React from 'react'
import { useSelector } from 'react-redux'
import BusinessIndexItem from '../businesses/businessIndexItem'

const SearchCategoryResults = ({category, input}) => {
    const businesses = useSelector(state => state.entities.businesses)

    console.log("Category: ", category)
    console.log("Input: ", input)

    const categories = {
        businesses: "Names",
        menu_items: "Menu Items",
        services: "Services",
        attrs: "Attributes & Ammenities"
    }

    return(
        <div>
            <h1>Businesess with {categories[category]} Matching {input}:</h1>
            <ul>
                {Object.values(businesses).map(business => 
                    <BusinessIndexItem key={business.id} business={business}/>
                )}
            </ul>
        </div>
    )
}

export default SearchCategoryResults