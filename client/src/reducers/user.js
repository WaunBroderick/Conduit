import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", email: "", organization: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", email: "", organization: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    createUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login, createUser } = userSlice.actions;

export default userSlice.reducer;
