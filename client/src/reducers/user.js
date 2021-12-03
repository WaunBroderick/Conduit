import { createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialStateValue = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  organization: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { initialStateValue } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    createUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      const user = jwtDecode(action.token);
      return {
        ...initatialState,
        token: action.token,
        name: user.name,
        email: user.email,
        id: user.id,
      };
  }
};

export const { login, createUser } = userSlice.actions;

export default userSlice.reducer;
