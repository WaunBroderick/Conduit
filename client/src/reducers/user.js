import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", email: "", organization: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    registerOrg: (state, action) => {
      state.value = action.payload;
    },

    createUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { registerOrg, createUser } = userSlice.actions;

export default userSlice.reducer;
