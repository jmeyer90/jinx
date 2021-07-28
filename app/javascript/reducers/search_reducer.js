import { LOAD_SEARCHABLES } from "../actions/search_actions"

const SearchReducer = ( state={}, action )=>{
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type) {
    case LOAD_SEARCHABLES:
      newState.businesses = action.businesses
      newState.menuItems = action.menuItems
      newState.services = action.services
      newState.attributeItems = action.attributeItems

      return newState
    default:
      return state
  }
}

export default SearchReducer