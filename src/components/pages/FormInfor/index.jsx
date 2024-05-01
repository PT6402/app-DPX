/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

export default function FormInfor() {
  const { currentStep, infor } = useSelector((state) => state.formSlice);
  const formSlice = useSelector((state) => state.formSlice);
  const [uiStep, setUIStep] = useState(null);
  const changeUIStep = () => {
    infor.steps.map((item) => {
      if (item.step == currentStep) {
        setUIStep(<item.component />);
      }
    });
  };

  useEffect(() => {
    changeUIStep();
  }, [formSlice.currentStep]);
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 ">
        <div>
          <div className="">{uiStep}</div>
        </div>
      </div>
    </div>
  );
}
