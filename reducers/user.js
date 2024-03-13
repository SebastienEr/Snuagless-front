import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, image: null, settings: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;

      state.value.username = action.payload.username;
      state.value.image = action.payload.image;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.image = null;
    },
    changePhoto: (state, action) => {
      state.value.image = action.payload;
    },
  },
});

export const { login, logout, changePhoto } = userSlice.actions;
export default userSlice.reducer;
