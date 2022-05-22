import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import usersReducer from "./users/users.reducer";
import departmentsReducer from "./departments/departments.reducer";
import profileReducer from "./profile/profile.reducer";
import assignmentsReducer from "./assignments/assignments.reducer";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "departments", "profile", "assignments"],
};

const rootReducer = combineReducers({
  users: usersReducer,
  departments: departmentsReducer,
  profile: profileReducer,
  assignments: assignmentsReducer,
});

export default rootReducer;
