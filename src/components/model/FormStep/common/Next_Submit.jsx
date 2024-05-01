/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../../../context/formSlice";

/* eslint-disable react/prop-types */
export default function Next_Submit() {
  const dispatch = useDispatch();
  const { currentStep, infor } = useSelector((state) => state.formSlice);
  const [status, setStatus] = useState({
    content: "Next",
    style: "blue",
  });
  const handleChange = () => {
    if (infor?.lastStep) {
      if (currentStep == infor.lastStep) {
        setStatus({
          content: "Send",
          style: "green",
        });
      } else {
        setStatus({
          content: "Next",
          style: "blue",
        });
      }
    }
  };
  useEffect(() => {
    handleChange();
  }, [currentStep]);

  const handleChangeStep = () => {
    if (currentStep < infor.lastStep) {
      console.log(infor.lastStep, currentStep);
      dispatch(nextStep());
    }
  };
  return (
    <>
      {infor?.lastStep && (
        <div className="w-1/2 text-right" onClick={handleChangeStep}>
          <button
            className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white  hover:bg-${status.style}-600 font-medium bg-${status.style}-500`}
          >
            {status.content}
          </button>
        </div>
      )}
    </>
  );
}
