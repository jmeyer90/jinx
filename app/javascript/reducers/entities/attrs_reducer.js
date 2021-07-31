import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const AttrsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.attrs
        default:
            return state
    }
}

export default AttrsReducer