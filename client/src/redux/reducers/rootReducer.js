import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./user";

const rootReducer = combineReducers({
  userReducer: userSlice,
});

export default rootReducer;
