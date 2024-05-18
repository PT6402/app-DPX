/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useUUID from "../../../hooks/useUUID";
import DownloadImage from "./DownloadImage";
import useAppScript from "../../../hooks/useAppScript";
import { convertToDatetimeLocalFormat } from "../../../util/TimeFormat";

export default function ItemUser({ dataItem, type }) {
  const { addUserByThuKy } = useAppScript();
  const { handHash } = useUUID();
  const [dataToId, setDataToId] = useState(null);
  useEffect(() => {
    setDataToId(
      handHash(dataItem?.name_truong_doan + dataItem?.phone_truong_doan)
    );
  }, []);
  const handleCreate = () => {
    const data = {
      phone_truong_doan: dataItem?.phone_truong_doan,
      name_truong_doan: dataItem?.name_truong_doan,
      bien_so: dataItem["bien_so(xx-xx-xxxxx)"] || "",
      time_leave_pagoda:
        convertToDatetimeLocalFormat(
          dataItem["time_leave_pagoda(dd-mm-yyyy|hh:mm)"]
        ) || "",
      number_of_people: dataItem?.number_of_people || "",
      type_car: dataItem["type_car(chỗ)"] || "",
      id: dataToId,
      type: type,
      name_tai_xe: dataItem?.name_tai_xe,
      phone_tai_xe: dataItem?.phone_tai_xe,
      vi_tri: dataItem["vi_tri(Xxx)"] || "",
    };
    addUserByThuKy(data);
  };
  return (
    <>
      {dataToId && (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full hover:scale-100 scale-95 duration-150 ">
          <div className="h-full flex justify-center flex-col  items-center border-gray-200  p-4 rounded-lg hover:border-black hover:border-2 border-2">
            <div className="flex-1 flex flex-col justify-start items-start w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="text-gray-900 title-font font-medium whitespace-normal">
                  {dataItem?.name_truong_doan}
                </h2>
                <p className="text-gray-500">{dataItem?.phone_truong_doan}</p>
              </div>

              <div className="bg-gray-300 h-1 w-full rounded-xl my-4"></div>
              <ul>
                <li>
                  <p>Tên tài xế: {dataItem.name_tai_xe || "chưa có"}</p>
                </li>
                <li>
                  <p>SDT tài xế: {dataItem.phone_tai_xe || "chưa có"}</p>
                </li>
                <li>
                  <p>
                    Biển số: {dataItem["bien_so(xx-xx-xxxxx)"] || "chưa có"}
                  </p>
                </li>
                <li>
                  <p>
                    Số người:{" "}
                    {`${dataItem.number_of_people || "chưa có"}/${
                      dataItem["type_car(chỗ)"] || "chưa có"
                    }`}
                  </p>
                </li>
                <li>
                  <p>
                    Giờ về:{" "}
                    {dataItem["time_leave_pagoda(dd-mm-yyyy|hh:mm)"] ||
                      "chưa có"}
                  </p>
                </li>
                <li>
                  <p>Vị trí: {dataItem["vi_tri(Xxx)"] || "chưa có"}</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 h-1 w-full rounded-xl my-3"></div>
            <div className=" w-full">
              <button
                onClick={handleCreate}
                className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-indigo-900 w-fit flex items-end justify-center gap-5"
              >
                <p className="font-bold text-sm">Create/Update</p>
              </button>
              <DownloadImage
                phone_tai_xe={dataItem?.phone_tai_xe}
                name_tai_xe={dataItem?.name_tai_xe}
                name_truong_doan={dataItem?.name_truong_doan}
                phone_truong_doan={dataItem?.phone_truong_doan}
                bien_so={dataItem["bien_so(xx-xx-xxxxx)"] || ""}
                type_car={dataItem["type_car(chỗ)"] || ""}
                number_of_people={dataItem?.number_of_people}
                time_leave_pagoda={
                  dataItem["time_leave_pagoda(dd-mm-yyyy|hh:mm)"] || ""
                }
                id={dataToId}
                type={type?.split("|")}
                vi_tri_dau={dataItem["vi_tri(Xxx)"] || ""}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
