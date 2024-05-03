import { createSlice } from "@reduxjs/toolkit";

const excelSlice = createSlice({
  name: "excelSlice",
  initialState: {
    data: null,
    worksheet: null,
    type: null,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    addWorkShhet: (state, action) => {
      state.worksheet = action.payload;
    },
    updateType: (state, action) => {
      state.type = action.payload;
    },
    clear: (state) => {
      state.data = null;
      state.worksheet = null;
      state.type = null;
    },
  },
});

export default excelSlice.reducer;
export const { addData, addWorkShhet, updateType, clear } = excelSlice.actions;
