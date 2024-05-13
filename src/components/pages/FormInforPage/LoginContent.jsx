/* eslint-disable react/prop-types */
import { Dialog } from "@headlessui/react";
// import Phone from "components/model/FormStep/icon/phone";
// import Spinner from "components/model/FormStep/icon/spinner";
// import { setCloseDialog } from "context/dialogSlice";
// import useAppScript from "hooks/useAppScript";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAppScript from "../../../hooks/useAppScript";
import { setCloseDialog } from "../../../context/dialogSlice";
import Phone from "../../model/FormStep/icon/phone";
import Spinner from "../../model/FormStep/icon/spinner";

export default function LoginContent() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dialogSlice);
  const { infoUser } = useSelector((state) => state.userSlice);
  const phoneInput = useRef();
  const { login, isLoading, isError } = useAppScript();
  const handleLogin = async () => {
    await login(data?.id, phoneInput.current.value);
    if (phoneInput.current?.value) {
      phoneInput.current.value = "";
    }
  };
  useEffect(() => {
    if (infoUser) {
      dispatch(setCloseDialog());
    }
  }, [infoUser]);
  return (
    <>
      <div className="bg-white px-4 pt-5  ">
        {isError && (
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-3"
          >
            <strong className="block font-medium text-red-800">
              {isError}
            </strong>
          </div>
        )}
        <div className="">
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              Nhập điện thoại
            </Dialog.Title>
            <div className="mt-2">
              <div className="flex sm:flex-row flex-col ">
                <div className="max-w-sm mx-auto flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <Phone />
                    </div>
                    <input
                      type="text"
                      id="phone-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-4"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="0912345678"
                      required
                      ref={phoneInput}
                    />
                  </div>
                  {/* <p
                  id="helper-text-explanation"
                  className=" text-sm text-gray-500 dark:text-gray-400 opacity-0"
                >
                  Select a phone number that matches the format.
                </p> */}
                </div>
                <div className="bg-gray-50  sm:flex sm:mt-0 mt-2">
                  <button
                    onClick={handleLogin}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto items-center"
                  >
                    {!isLoading ? (
                      "Đăng nhập"
                    ) : (
                      <>
                        <Spinner />
                        Loading...
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        {/* <button
          onClick={handleLogin}
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto items-center"
        >
          {!isLoading ? (
            "Đăng nhập"
          ) : (
            <>
              <Spinner />
              Loading...
            </>
          )}
        </button> */}
      </div>
    </>
  );
}
