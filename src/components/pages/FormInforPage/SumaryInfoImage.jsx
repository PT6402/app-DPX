/* eslint-disable react/prop-types */
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logoDPX from "../../../assets/images/photo_CTN_DT.png";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";
import { saveAs } from "file-saver";
import { formatDateTime } from "../../../util/TimeFormat";
export default function SumaryInfoImage() {
  const { id } = useParams();
  const { contextForm } = useSelector((state) => state.formSlice);
  const { infoUser } = useSelector((state) => state.userSlice);
  const imageRef = useRef();
  const qr_code = document.getElementById("my-qrcode");
  const urlID = `${import.meta.env.VITE_URL_APP}user/${id}`;
  const qrImg = qr_code?.toDataURL();
  const [imageDP] = useImage(logoDPX);
  const [imageQR] = useImage(qrImg);
  const data = {
    phone_tai_xe: contextForm?.phone_tai_xe,
    name_tai_xe: contextForm?.name_tai_xe,
    phone_truong_doan: infoUser?.Phone,
    name_truong_doan: infoUser?.Name,
    bien_so: contextForm.bien_so,
    type: infoUser?.Type,
    so_luong_nguoi: `${
      contextForm?.number_of_people
    }/${contextForm?.type_car?.label?.substring(0, 2)}`,
    thoi_gian_roi_chua: formatDateTime(contextForm?.time_leave_pagoda || ""),
    vi_tri_dau: infoUser?.Khu_vuc
      ? `${infoUser?.Khu_vuc} - ${infoUser?.Vi_tri}`
      : "",
  };
  const handleDownload = () => {
    const uri = imageRef.current.toDataURL();
    saveAs(uri);
  };
  console.log(infoUser);
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleDownload}
        className="focus:outline-none text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-indigo-900 w-fit flex items-end justify-center gap-5"
      >
        <p className="font-bold text-sm">HD tải ảnh !</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <g stroke="#fff" strokeLinecap="round" strokeWidth="2">
            <path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122.3.3.662.497 1.121.627"></path>
            <path
              strokeLinejoin="round"
              d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5"
            ></path>
          </g>
        </svg>
      </button>
      <QRCodeCanvas
        value={urlID}
        id="my-qrcode"
        size={250}
        includeMargin={true}
        level={"H"}
        className="rounded-xl border p-2 hidden"
      />
      <Stage width={842} height={595} ref={imageRef} className="hidden">
        <Layer>
          <Image image={imageDP} />
          <Image image={imageQR} width={258} height={258} x={570} y={257} />
          <Text
            text={data.type.toUpperCase()}
            x={32}
            y={68}
            fontSize={32}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.phone_tai_xe}
            x={250}
            y={273}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.bien_so}
            x={250}
            y={306}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.name_tai_xe}
            x={250}
            y={340}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.name_truong_doan}
            x={250}
            y={379}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.phone_truong_doan}
            x={250}
            y={412}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.so_luong_nguoi}
            x={250}
            y={444}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.thoi_gian_roi_chua}
            x={250}
            y={480}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
          <Text
            text={data.vi_tri_dau}
            x={250}
            y={515}
            fontSize={28}
            fill="black"
            fontFamily="TimeNewRoman"
            fontStyle="bold"
          />
        </Layer>
      </Stage>
    </div>
  );
}
