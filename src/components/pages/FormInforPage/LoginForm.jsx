/* eslint-disable react/prop-types */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useSelector } from "react-redux";
import useAppScript from "hooks/useAppScript";
import Spinner from "components/model/FormStep/icon/spinner";
import Phone from "components/model/FormStep/icon/phone";

export default function LoginForm({ id }) {
  const { userInfo } = useSelector((state) => state.userSlice);
  const [open, setOpen] = useState(true);
  const { login, isLoading, isError } = useAppScript();
  const phoneInput = useRef();
  const handleLogin = async () => {
    await login(id, phoneInput.current.value);
    if (phoneInput.current?.value) {
      phoneInput.current.value = "";
    }
    if (userInfo) {
      setOpen(false);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => null}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
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
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Đăng nhập điện thoại
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="max-w-sm mx-auto">
                          <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                              <Phone />
                            </div>
                            <input
                              type="text"
                              id="phone-input"
                              aria-describedby="helper-text-explanation"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="123-456-7890"
                              required
                              ref={phoneInput}
                            />
                          </div>
                          <p
                            id="helper-text-explanation"
                            className=" text-sm text-gray-500 dark:text-gray-400 opacity-0"
                          >
                            Select a phone number that matches the format.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
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
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
