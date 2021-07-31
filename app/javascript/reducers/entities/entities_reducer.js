import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';
import AttrsReducer from "./attrs_reducer";
import BusinessAttrsReducer from "./business_attrs_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  businesses: BusinessesReducer,
  reviews: ReviewsReducer,
  attrs: AttrsReducer,
  businessAttrs: BusinessAttrsReducer
});

export default EntitiesReducer;

