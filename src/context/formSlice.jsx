import { createSlice } from "@reduxjs/toolkit";
import infor from "../components/pages/FormInfor/Setup";

const formSlice = createSlice({
  name: "formSlice",
  initialState: {
    currentStep: 1,
    infor: infor,
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
  },
});

export default formSlice.reducer;
export const { nextStep, previousStep } = formSlice.actions;
