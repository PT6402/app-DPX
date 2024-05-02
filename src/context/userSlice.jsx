import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    infoUser: null,
  },
  reducers: {
    updateInfo: (state, action) => {
      state.infoUser = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { updateInfo } = userSlice.actions;
