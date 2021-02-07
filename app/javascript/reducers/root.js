import { combineReducers } from "redux";
import SessionReducer from "./sessions_reducer";
import EntitiesReducer from "./entities/entities_reducer";
import ErrorsReducer from './errors/errors_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  search: SearchReducer,
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
})

export default RootReducer;