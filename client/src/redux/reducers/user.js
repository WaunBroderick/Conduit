import {
  createAsyncThunk,
  createSlice,
  isAsyncThunkAction,
} from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { ActionCreators } from "redux-devtools";

const state = {
  token: localStorage.getItem("token"),
  user: [],
  email: "",
  name: "",
  organization: "",
  departments: [],
  search: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return ["Jack", "John"];
});

export const userSlice = createSlice({
  name: "users",
  state,
  reducers: {
    login(state, action) {
      state = action.payload;
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
