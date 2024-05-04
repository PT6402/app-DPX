import { createSlice } from "@reduxjs/toolkit";
const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState: {
    content: null,
    isOpen: false,
    data: null,
  },
  reducers: {
    setOpenDialog: (state, action) => {
      state.isOpen = true;
      state.content = action.payload.content;
      state.data = action.payload.data;
    },
    setCloseDialog: (state) => {
      state.isOpen = false;
      state.content = null;
      state.data = null;
    },
    setCloseNotClearContent: (state) => {
      state.isOpen = false;
    },
    setOpenContent: (state) => {
      state.isOpen = true;
    },
  },
});
export default dialogSlice.reducer;
export const {
  setOpenDialog,
  setCloseDialog,
  setCloseNotClearContent,
  setOpenContent,
} = dialogSlice.actions;
