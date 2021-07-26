import { combineReducers } from "redux";
import rocketReducer from "../reducer/Reducer";

const rootReducer = combineReducers({
  rocket: rocketReducer,
});

export default rootReducer;
