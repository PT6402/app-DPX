import { createSlice } from "@reduxjs/toolkit";
const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState: {
    content: null,
    isOpen: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});
