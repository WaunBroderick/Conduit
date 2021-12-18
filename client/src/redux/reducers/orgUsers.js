import {
  createAsyncThunk,
  createSlice,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { ActionCreators } from "redux-devtools";

const initialState = {
  orgUsers: [],
};

// TODO

export const loadUsers = () => async (dispatch, getState) => {
  const users = axios
    .get(
      "http://localhost:5000/users",
      {
        organization: "test",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => response.json());
  dispatch(setUsers(users));
};

export const fetchOrgUsers = createAsyncThunk("users/fetchUsers", async () => {
  const orgUsers = await fetch("http://localhost:4000/notes").then((res) =>
    res.json()
  );
  dispatchEvent(set);
});

export const orgUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action) {
      state.value = action.payload;
    },

    addUser(state, action) {
      state.users.push(state.email);
      state.email = "";
    },
    changeEmail(state, action) {
      state.email = action.payload;
    },
    changeSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const { login, addUser, changeEmail, changeSearch } = userSlice.actions;

export default userSlice.reducer;
