import { createSlice } from "@reduxjs/toolkit";
import infor from "components/pages/FormInforPage/Setup";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    currentStep: 1,
    infor: infor,
    contextForm: null,
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
    updateContextForm: (state, action) => {
      state.contextForm = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { nextStep, previousStep, updateContextForm } = formSlice.actions;
