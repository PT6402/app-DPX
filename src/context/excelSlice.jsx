import { createSlice } from "@reduxjs/toolkit";

const excelSlice = createSlice({
  name: "excelSlice",
  initialState: {
    data: null,
    worksheet: null,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    addWorkShhet: (state, action) => {
      state.worksheet = action.payload;
    },
  },
});

export default excelSlice.reducer;
export const { addData, addWorkShhet } = excelSlice.actions;
