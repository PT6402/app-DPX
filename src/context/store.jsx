import { configureStore } from "@reduxjs/toolkit";
import excelSlice from "./excelSlice";
import formSlice from "./formSlice";
import userSlice from "./userSlice";
import loadingSlice from "./loadingSlice";
import dialogSlice from "./dialogSlice";

const store = configureStore({
  reducer: { excelSlice, formSlice, userSlice, loadingSlice, dialogSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
