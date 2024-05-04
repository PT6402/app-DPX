import { Dialog } from "@headlessui/react";
import { setCloseNotClearContent } from "context/dialogSlice";
import {
  copyBlobToClipboard,
  getBlobFromImageElement,
} from "copy-image-clipboard";
import { QRCodeCanvas } from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import logoVip from "../../../assets/images/vip.png";
export default function QRCodeContent() {
  const { data } = useSelector((state) => state.dialogSlice);
  const dispatch = useDispatch();
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
  return (
    <>
      <div className="bg-white px-4 pt-5  ">
        {data?.status && (
          <div
            role="alert"
            className={`rounded border-s-4 border-${
              data.status == 200 ? "green" : "red"
            }-500 bg-${data.status == 200 ? "green" : "red"}-50 p-4 mb-3`}
          >
            <strong
              className={`block font-medium text-${
                data.status == 200 ? "green" : "red"
              }-800`}
            >
              {data.message}
            </strong>
          </div>
        )}
        <div className="flex items-center justify-center">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900 flex justify-center"
            >
              Thông báo
            </Dialog.Title>
            <div className="mt-2">
              <div className="max-w-sm mx-auto flex justify-center">
                <QRCodeCanvas
                  value={data.id}
                  id="my-qrcode"
                  size={300}
                  includeMargin={true}
                  level={"H"}
                  imageSettings={{
                    src: logoVip,
                    x: undefined,
                    y: undefined,
                    height: 50,
                    width: 50,
                    excavate: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={handleDownload}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto items-center"
        >
          Copy QR
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => dispatch(setCloseNotClearContent())}
        >
          Close
        </button>
      </div>
    </>
  );
}
