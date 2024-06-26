/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../../../context/formSlice";
import useAppScript from "../../../../hooks/useAppScript";
import { setOpenDialog } from "../../../../context/dialogSlice";
import CheckoutContent from "../../../pages/FormInforPage/CheckoutContent";
// import { setOpenDialog } from "context/dialogSlice";
// import CheckoutContent from "components/pages/FormInforPage/CheckoutContent";

/* eslint-disable react/prop-types */
export default function Next_Submit() {
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userSlice);
  const { currentStep, infor } = useSelector((state) => state.formSlice);
  const { addApp } = useAppScript();
  const [status, setStatus] = useState({
    content: "Next",
    style: "blue",
  });
  const handleChange = () => {
    if (infor?.lastStep) {
      if (currentStep == infor.lastStep) {
        setStatus({
          content: "Lưu",
          style: "green",
        });
      } else {
        setStatus({
          content: "Tiếp tục",
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
      dispatch(nextStep());
    }
  };
  const handleAddApp = () => {
    addApp({
      id: infoUser.ID,
      name: infoUser.Name,
      phone: infoUser.Phone,
    }).then((res) => {
      if (res.status == 200) {
        dispatch(
          setOpenDialog({
            isOpen: true,
            content: CheckoutContent,
            data: { message: res.message },
          })
        );
      }
    });
  };
  return (
    <>
      {infor?.lastStep && (
        <div className="w-1/2 text-right" onClick={handleChangeStep}>
          <button
            type="button"
            className={`w-35 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm  text-white  hover:bg-${status.style}-600  bg-${status.style}-500 inline-flex justify-center items-center`}
            onClick={() => {
              if (status.content == "Lưu") {
                handleAddApp();
              }
            }}
          >
            {status.content}
          </button>
        </div>
      )}
    </>
  );
}
