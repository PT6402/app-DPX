import { QRCodeCanvas } from "qrcode.react";
import { useParams } from "react-router-dom";
import useUUID from "../../../../hooks/useUUID";
import { useSelector } from "react-redux";
// import { FormatPhone } from "../../../../util/FormatPhone";

export default function Truong_doan() {
  const { infoUser } = useSelector((state) => state.userSlice);
  const { handleHash } = useUUID();
  const { id } = useParams();
  const urlID = `http://192.168.1.10:3000/user/${id}`;

  handleHash();
  return (
    <>
      <div className="mb-5 text-center flex justify-center items-center">
        <QRCodeCanvas
          value={urlID}
          id="my-qrcode"
          size={250}
          includeMargin={true}
          level={"H"}
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
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
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
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          value={infoUser.Phone}
          readOnly
          disabled
        />
      </div>
    </>
  );
}
