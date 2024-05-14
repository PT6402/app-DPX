import { useParams } from "react-router-dom";

import { QRCodeCanvas } from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  getBlobFromImageElement,
  copyBlobToClipboard,
} from "copy-image-clipboard";
// import useAppScript from "hooks/useAppScript";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useAppScript from "../../../hooks/useAppScript";
export default function DetailPage() {
  const { type: typeUser } = useSelector((state) => state.excelSlice);
  const { id, phone, name } = useParams();
  const { addUser } = useAppScript();
  const urlID = `${import.meta.env.VITE_URL_APP}user/${id}`;
  const handleDownload = () => {
    var imageElement = document.getElementById("my-qrcode");
    getBlobFromImageElement(imageElement)
      .then((blob) => {
        return copyBlobToClipboard(blob);
      })
      .then(() => {
        console.log("Blob Copied");
      })
      .catch((e) => {
        console.log("Error: ", e.message);
      });
  };
  const handleGenericImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "52px Arial";
    ctx.fillText(phone, 0, 38);
    return canvas.toDataURL();
  };
  const handleAddUser = () => {
    addUser({
      id,
      phone,
      name,
      type: `${
        typeUser.label.includes("CTN") ? "CHÚNG THANH NIÊN" : "ĐẠO TRÀNG" || ""
      }`,
    });
  };

  return (
    <>
      <section className="relative text-gray-600 body-font rounded-xl overflow-hidden">
        <div className="container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
          <div>
            <input
              id="hs-clipboard-input"
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600 text-center scale-95 "
              value={name}
              readOnly
              disabled
            />
            <CopyToClipboard text={urlID}>
              <button
                className="hover:scale-100 scale-95 w-full mt-3 border-gray-200 border-2 rounded-lg p-2 duration-150"
                onClick={() => {
                  toast.success("Copy URL success !", {
                    position: "top-right",
                  });
                }}
              >
                <input
                  id="hs-clipboard-input"
                  type="text"
                  className="py-3  px-4 block w-full border-transparent rounded-lg text-lg placeholder:text-gray-400 cursor-pointer focus:border-transparent  focus:ring-0"
                  value={urlID}
                  readOnly
                />
              </button>
            </CopyToClipboard>

            <div
              className="mt-2 mb-4 rounded-xl overflow-hidden p-2 border-2 hover:scale-100 scale-95 duration-150 cursor-pointer "
              onClick={() => {
                handleDownload();
                toast.success("Copy QR success !", { position: "top-right" });
              }}
            >
              <QRCodeCanvas
                value={urlID}
                id="my-qrcode"
                size={300}
                includeMargin={true}
                level={"H"}
                imageSettings={{
                  src: handleGenericImage(),
                  x: 43,
                  y: 238,
                  height: 150,
                  width: 180,
                  excavate: true,
                }}
              />
            </div>
          </div>

          <div className="text-center lg:w-2/3 w-full ">
            <div className="flex justify-center gap-4">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg items-center justify-center w-1/3 min-w-fit "
                onClick={handleAddUser}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
