import { useParams } from "react-router-dom";

import { QRCodeCanvas } from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  getBlobFromImageElement,
  copyBlobToClipboard,
} from "copy-image-clipboard";
import CopyClipBoard from "./icon/CopyClipBoard";
import useAppScript from "hooks/useAppScript";

import { useSelector } from "react-redux";
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
    addUser({ id, phone, name, type: `CTN/DT-${typeUser.label}` });
  };

  return (
    <>
      <section className="relative text-gray-600 body-font rounded-xl overflow-hidden">
        <div className="container mx-auto flex px-5 pt-10 items-center justify-center flex-col">
          <div>
            <input
              id="hs-clipboard-input"
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600 text-center "
              value={name}
              readOnly
              disabled
            />
            <input
              id="hs-clipboard-input"
              type="text"
              className="py-3 mt-3 px-4 block w-full border-gray-200 rounded-lg text-lg placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600"
              value={urlID}
              readOnly
              disabled
            />
            <div className="mt-2 mb-4 rounded-xl overflow-hidden p-2 border-2  ">
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
          <div className="max-w-xs w-full space-y-3 mb-10">
            <div className="flex justify-between ">
              <CopyToClipboard text={urlID}>
                <button
                  type="button"
                  className="js-clipboard-example py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 hover:scale-105"
                  data-clipboard-target="#hs-clipboard-input"
                  data-clipboard-action="copy"
                  data-clipboard-success-text="Copied"
                >
                  <CopyClipBoard />
                  <span className="js-clipboard-success-text">Copy URL</span>
                </button>
              </CopyToClipboard>

              <button
                type="button"
                className="js-clipboard-example py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 hover:scale-105"
                onClick={() => handleDownload()}
              >
                <CopyClipBoard />
                <span className="js-clipboard-success-text">Copy QR</span>
              </button>
            </div>
          </div>
          <div className="text-center lg:w-2/3 w-full ">
            <div className="flex justify-center gap-4">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg items-center justify-between1"
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
