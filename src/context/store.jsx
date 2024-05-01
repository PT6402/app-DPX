import { configureStore } from "@reduxjs/toolkit";
import excelSlice from "./excelSlice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: { excelSlice, formSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
