import { useSelector } from "react-redux";
import { formatDateTime } from "../../../../util/TimeFormat";

export default function Review() {
  const { contextForm } = useSelector((state) => state.formSlice);
  const { infoUser } = useSelector((state) => state.userSlice);
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row max-w-sm space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
          <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 rounded-lg px-4 py-2">
            <h3 className="font-medium text-lg">Trưởng đoàn</h3>
            <ul className="mt-2">
              <li>Pháp danh: {infoUser?.Name}</li>
              <li>Số điện thoại: {infoUser?.Phone}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-sm space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
          <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 rounded-lg px-4 py-2">
            <h3 className="font-medium text-lg">Tài xế</h3>
            <ul className="mt-2">
              <li>Họ và tên: {contextForm?.name_tai_xe}</li>
              <li>Số điện thoại: {contextForm?.phone_tai_xe}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-sm space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-shrink-0 -mb-6 mt-4 z-20">
          <div className="h-10 w-10 bg-green-500  rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-gray-200 rounded-lg px-4 py-2">
            <h3 className="font-medium text-lg">Thông tin xe</h3>
            <ul className="mt-2">
              <li>Biển số xe: {contextForm?.bien_so}</li>
              <li>Loại xe: {contextForm?.type_car.label}</li>
              <li>Số lượng người: {contextForm?.number_of_people}</li>
              <li>
                Rời chùa: {formatDateTime(contextForm?.time_leave_pagoda)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
