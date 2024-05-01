/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { previousStep } from "../../../../context/formSlice";

export default function Previous() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.formSlice);
  const [status, setStatus] = useState();
  const handleChangeStatus = () => {
    if (currentStep == 1) {
      return "bg-white text-gray-600";
    } else {
      return "bg-blue-500 text-white";
    }
  };
  useEffect(() => {
    setStatus(handleChangeStatus);
  }, [currentStep]);

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      dispatch(previousStep());
    }
  };
  return (
    <div className="w-1/2" onClick={handlePreviousStep}>
      <button
        className={`w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center   hover:bg-gray-100 font-medium border ${status} `}
      >
        Previous
      </button>
    </div>
  );
}
