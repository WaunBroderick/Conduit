import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
