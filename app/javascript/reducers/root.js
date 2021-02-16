import { combineReducers } from "redux";
import SessionReducer from "./sessions_reducer";
import EntitiesReducer from "./entities/entities_reducer";
import ErrorsReducer from './errors/errors_reducer';
import SearchReducer from './search_reducer';
import UIReducer from "./ui/uiReducer";

const RootReducer = combineReducers({
  search: SearchReducer,
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  ui: UIReducer
})

export default RootReducer;