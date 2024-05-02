import { configureStore } from "@reduxjs/toolkit";
import excelSlice from "./excelSlice";
import formSlice from "./formSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { excelSlice, formSlice, userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
