import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { email: null },
};

export const emailSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    resetEmailToStore: (state, action) => {
      state.value.email = action.payload.email;
    },
    resetUsernameToStore: (state, action) => {
      state.value.resetUsername = action.payload.resetUsername;
    },
    resetPasswordToStore: (state, action) => {
      state.value.resetPassword = action.payload.resetPassword;
    },
  },
});

export const { resetEmailToStore, resetUsernameToStore, resetPasswordToStore } =
  emailSlice.actions;
export default emailSlice.reducer;
