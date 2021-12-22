import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  orgUsers: [],
  loading: false,
  error: null,
};

// REDUCER
function orgUsersReducer(state = initialState, action) {
  let users;
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return { ...state, loading: true };
    case "FETCH_USERS_FULFILLED":
      orgUsers = action.payload.data.results;
      return { ...state, loading: false, orgUsers };
    case "FETCH_USERS_REJECTED":
      return { ...state, loading: false, error: `${action.payload.message}` };
    default:
      return state;
  }
}

export default orgUsersReducer;
