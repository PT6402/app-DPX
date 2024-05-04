import { Dialog } from "@headlessui/react";
import { setCloseDialog } from "context/dialogSlice";
import { clearForm } from "context/formSlice";
import { logout } from "context/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutContent() {
  const { data } = useSelector((state) => state.dialogSlice);
  const dispatch = useDispatch();
  const handleCloseDialog = () => {
    dispatch(setCloseDialog());
    dispatch(logout());
    dispatch(clearForm());
  };
  return (
    <>
      <div className="bg-white px-4 pt-5  ">
        {data?.message && (
          <div
            role="alert"
            className="rounded border-s-4 border-green-500 bg-green-50 p-4 mb-3"
          >
            <strong className="block font-medium text-green-800">
              {data.message}
            </strong>
          </div>
        )}
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Thông báo
            </Dialog.Title>
            <div className="mt-2">
              <div className="max-w-sm mx-auto">
                Dạ Huynh đệ có muốn thoát không ạ ?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={handleCloseDialog}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto items-center"
        >
          Thoát
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => dispatch(setCloseDialog())}
        >
          Ở lại
        </button>
      </div>
    </>
  );
}
