import { QRCodeCanvas } from "qrcode.react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Truong_doan() {
  const { infoUser } = useSelector((state) => state.userSlice);
  const { id } = useParams();
  const urlID = `${import.meta.env.VITE_URL_APP}user/${id}`;

  return (
    <>
      <div className="mb-5 text-center flex justify-center items-center">
        <QRCodeCanvas
          value={urlID}
          id="my-qrcode"
          size={250}
          includeMargin={true}
          level={"H"}
          className="rounded-xl border p-2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Pháp danh
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm outline-none  text-gray-600 font-medium border-transparent"
          value={infoUser.Name}
          readOnly
          disabled
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
          Số điện thoại
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium border-transparent"
          value={infoUser.Phone}
          readOnly
          disabled
        />
      </div>
    </>
  );
}
