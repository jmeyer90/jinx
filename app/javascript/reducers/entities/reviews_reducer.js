import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../../actions/review_actions';
import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../../actions/business_actions';
import { RECEIVE_SEARCH_RESULTS } from '../../actions/search_actions';


const ReviewsReducer = (state={}, action) =>{
  Object.freeze( state );
  let newState={};
  switch (action.type) {
    case RECEIVE_BUSINESS:
      newState = action.reviews;
      return newState;

    case RECEIVE_REVIEWS:
      newState = action.reviews;
      return newState;
      
    case RECEIVE_REVIEW:
      newState = action.review;
      return Object.assign({}, state, newState);
      
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId]
      return newState;

    case RECEIVE_SEARCH_RESULTS:
      return action.reviews

    default:
      return state;
  }
}

export default ReviewsReducer;