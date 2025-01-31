import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import referenceReducer from "./referenceReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  reference: referenceReducer,
});

export default rootReducer;
