import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/users.reducer";
import departmentsReducer from "./departments/departments.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  departments: departmentsReducer,
});

export default rootReducer;
