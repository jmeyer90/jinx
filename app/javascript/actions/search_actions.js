import * as searchUtils from "../utils/search_utils";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const LOAD_SEARCHABLES = "LOAD_SEARCHABLES";

const receiveSearchables = searchables => {
  searchables.services ||= []
  const services = searchables.services.concat(searchables.service_items)
  
  return ({
    type: LOAD_SEARCHABLES,
    businesses: searchables.businesses,
    menuItems: searchables.menu_items,
    attributeItems: searchables.attribute_items,
    services,
  })
}

const receiveSearchResults = searchResults => {
  return ({
    type: RECEIVE_SEARCH_RESULTS,
    businesses: searchResults.businesses || {},
    reviews: searchResults.reviews || {},
    users: searchResults.users || {},
    attrs: searchResults.attrs || {},
    businessAttrs: searchResults.business_attributes || {}
  })
}

export const loadSearchableItems = () => dispatch => {
  debugger
  return (
    searchUtils.loadSearchables().then(
      searchables => dispatch(receiveSearchables(searchables))
    )
  )
}

export const executeSearch = (searchRequest) => dispatch => {
  debugger
  return (
    searchUtils.executeSearch(searchRequest).then(
      searchResults => dispatch(receiveSearchResults(searchResults))
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