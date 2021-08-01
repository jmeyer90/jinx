import React from 'react'
import { useSelector } from 'react-redux'
import BusinessIndexItem from '../businesses/businessIndexItem'

const SearchCategoryResults = ({category, input}) => {
    const businesses = useSelector(state => state.entities.businesses)
    // const businessAttrs = useSelector(state => Object.values(state.entities.businessAttrs))

    category = category == "menu_Items" ? "menuItems" : category
    category = category == "attributeItems" || category == "attrs" ? "businessAttrs" : category


    // const categoryItems = useSelector(state => {
    //     if (category == "menuItems" ){
    //         const attrsArray = Object.entries(state.entities.attrs) || []
    //         const filteredAttrs = attrsArray.filter(([id, attr]) => attr.attribute_type == "Cuisine")
    //         return Object.fromEntries(filteredAttrs)
    //     } else {
    //         return state.entities[category]
    //     }
    // })

    // const filterBusinessesByCategory = () =>{
    //     const filtered = {}
    //     const categoryArray = Object.values(categoryItems)
    //     if(categoryArray[0] && category != "menuItems"){
    //         categoryArray.map(categoryItem =>{ 
    //             console.log("categroyItem: ", categoryItem)
    //             // filtered[categoryItem.business_id] = businesses[categoryItem.business_id]
    //         })
    //     } else if (categoryArray[0] && category == "menuItems") {
    //         businessAttrs.forEach(businessAttr => {
    //             if (businessAttr.attribute_id in categoryItems) {
    //                 filtered[businessAttr.business_id] = businesses[businessAttr.business_id]
    //             }
    //         })
    //     }
    //     return filtered
    // }

    // const filteredBusinesses = filterBusinessesByCategory()
    // console.log("category: ", category)
    // console.log("categoryItems: ", categoryItems)
    // console.log("businesses: ", businesses)
    // console.log("filteredBusinesses: ", filteredBusinesses)

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

    return(
        <div className="category-results-container">
            <h1 className="category-results-title">
                Businesess with {categories[category]} Matching {titleInput}:
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