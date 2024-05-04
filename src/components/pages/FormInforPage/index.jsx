/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setOpenDialog } from "context/dialogSlice";
import LoginContent from "./LoginContent";

export default function FormInforPage() {
  const { id } = useParams();
  const dialog = useSelector((state) => state.dialogSlice);
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userSlice);
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
    if (infoUser) {
      changeUIStep();
    }
  }, [formSlice.currentStep, infoUser]);
  useEffect(() => {
    if (!infoUser && !dialog.isOpen) {
      dispatch(setOpenDialog({ content: LoginContent, data: { id } }));
    }
  }, [dialog]);
  if (infoUser) {
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
}
