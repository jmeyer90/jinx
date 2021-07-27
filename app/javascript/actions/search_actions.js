import * as searchUtils from "../utils/search_utils";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const REMOVE_SEARCH_RESULTS = "REMOVE_SEARCH_RESULTS";
export const LOAD_SEARCHABLES = "LOAD_SEARCHABLES";

const receiveSearchables = searchables =>{
  return ({
    businesses: searchables.businesses,
    menuItems: searchables.menu_items,
    serviceItems: searchables.service_items,
    services: searchables.services,
    attributeItems: searchables.attribute_items
  })
}

export const loadSearchableItems = () => dispatch => {
  return(
    searchUtils.loadSearchables.then(
      searchables => dispatch(receiveSearchables(searchables))
    )
  )
}

// const receiveSearchResults = searchResults => {
//   return({
//     type: RECEIVE_SEARCH_RESULTS,
//     searchResults
//   })
// }

// const removeSearchResults = () =>{
//   return({
//     type: REMOVE_SEARCH_RESULTS
//   })
// }

// export const populateSearchResults = searchResults => dispatch =>{
//   return(
//     dispatch(receiveSearchResults(searchResults))
//   )
// }

// export const clearSearchResults = () => dispatch =>{
//   return(
//     dispatch(removeSearchResults())
//   )
// }