import { QRCodeCanvas } from "qrcode.react";
import { useParams } from "react-router-dom";

export default function Truong_doan() {
  const { id } = useParams();
  const urlID = `http://localhost:3000/ctb_dt/${id}`;
  const phone = "0971866177";
  const handleGenericImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "50px Arial";
    ctx.fillText(phone, 0, 40);
    return canvas.toDataURL();
  };
  return (
    <>
      <div className="mb-5 text-center flex justify-center items-center">
        <QRCodeCanvas
          value={urlID}
          id="my-qrcode"
          size={300}
          includeMargin={true}
          level={"H"}
          imageSettings={{
            src: handleGenericImage(),
            x: 43,
            y: 230,
            height: 150,
            width: 180,
            excavate: true,
          }}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Firstname
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="Enter your firstname..."
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="Enter your email address..."
        />
      </div>
    </>
  );
}
