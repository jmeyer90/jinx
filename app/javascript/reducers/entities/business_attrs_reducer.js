import { RECEIVE_SEARCH_RESULTS} from "../../actions/search_actions";

const BusinessAttrsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SEARCH_RESULTS:
            return action.businessAttrs
        default:
            return state
    }
}

export default BusinessAttrsReducer