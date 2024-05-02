import { useDispatch, useSelector } from "react-redux";
import { updateContextForm } from "../../../../context/formSlice";
import { useEffect, useRef } from "react";

export default function Tai_xe() {
  const nameInput = useRef();
  const phoneInput = useRef();
  const dispatch = useDispatch();
  const { infoUser } = useSelector((state) => state.userSlice);
  const { contextForm, currentStep } = useSelector((state) => state.formSlice);
  const handleSave = () => {
    dispatch(
      updateContextForm({
        ...contextForm,
        name_tai_xe: nameInput.current.value,
        phone_tai_xe: phoneInput.current.value,
      })
    );
  };
  useEffect(() => {
    handleSave();
  }, [currentStep]);
  return (
    <div>
      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Họ và tên
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="nhập tên"
          ref={nameInput}
          defaultValue={contextForm?.name_tai_xe || infoUser?.Name_Tai_Xe}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
          Số điện thoại
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="nhập số điện thoại"
          ref={phoneInput}
          defaultValue={contextForm?.phone_tai_xe || infoUser?.Phone_Tai_Xe}
        />
      </div>
    </div>
  );
}
