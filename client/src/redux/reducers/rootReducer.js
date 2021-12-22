import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import orgUsersReducer from "./orgUsers";

const rootReducer = combineReducers({
  userReducer: userSlice,
  orgUsersReducer,
});

export default rootReducer;
