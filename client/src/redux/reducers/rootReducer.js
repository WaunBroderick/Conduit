import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./users/users.reducer";
import departmentsReducer from "./departments/departments.reducer";
import profileReducer from "./profile/profile.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  departments: departmentsReducer,
  profile: profileReducer,
});

export default rootReducer;
