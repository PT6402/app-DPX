/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
export default function HeaderStep() {
  const { infor, currentStep } = useSelector((state) => state.formSlice);
  const [header, setHeader] = useState(null);
  const handleChangeTile = () => {
    const listStep = infor.steps;
    listStep.map((item) => {
      if (item.step == currentStep) {
        setHeader(item.title);
      }
    });
  };
  useEffect(() => {
    handleChangeTile();
  }, [currentStep]);
  return (
    <div className=" border-b-2 py-4 border-gray-300 px-10">
      <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
        Step: {currentStep} of {infor.lastStep}
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div>
            <div className="text-lg font-bold text-gray-700 leading-tight">
              {header}
            </div>
          </div>
        </div>

        <div className="flex items-center md:w-64">
          <div className="w-full bg-white rounded-full mr-2">
            <div
              className={`rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white`}
              style={{ width: (100 / infor.lastStep) * currentStep + "%" }}
            ></div>
          </div>
          <div className="text-xs w-10 text-gray-600">
            {Math.round((100 / infor.lastStep) * currentStep)}%
          </div>
        </div>
      </div>
    </div>
  );
}
