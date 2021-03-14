import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../../actions/business_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../../actions/review_actions'

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      const businesses = Object.values( action.businesses );
      businesses.forEach( business => {
        newState[business.id] = business;
      });
      
      return newState;
    case RECEIVE_BUSINESS:
      newState = { [action.business.id]: action.business };

      return Object.assign({}, state, newState);
    case RECEIVE_REVIEW:
      newState = { [action.business.id]: action.business };

      return Object.assign({}, state, newState);
    case REMOVE_REVIEW:
      newState = { [action.business.id]: action.business };

      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default BusinessesReducer;