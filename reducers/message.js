import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
