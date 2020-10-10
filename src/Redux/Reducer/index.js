import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  State: reducer,
});

export default rootReducer;
