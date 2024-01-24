import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "@redux/slices/auth.slice";

const combinedReducer = combineReducers({
  auth: AuthReducer,
});
const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};
export default rootReducer;
