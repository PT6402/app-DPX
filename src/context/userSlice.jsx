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
    logout: (state) => {
      state.infoUser = null;
    },
  },
});
export default userSlice.reducer;
export const { updateInfo, logout } = userSlice.actions;
