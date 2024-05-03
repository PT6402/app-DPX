import { Tai_xe, Truong_doan, Xe } from "./Steps";

const infor = {
  steps: [
    {
      step: 1,
      title: "Trưởng đoàn",
      component: Truong_doan,
    },
    {
      step: 2,
      title: "Tài xế",
      component: Tai_xe,
    },
    {
      step: 3,
      title: "Xe",
      component: Xe,
    },
  ],
};
infor.lastStep = infor.steps.length;
export default infor;
