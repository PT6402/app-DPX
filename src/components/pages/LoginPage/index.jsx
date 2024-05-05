// import Loading from "components/common/Loading";
// import useAdmin from "hooks/useAdmin";
import { useEffect, useRef } from "react";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../common/Loading";

export default function LoginPage() {
  const { loginAdmin, isLoading, isError } = useAdmin();
  const emailInput = useRef();
  const phoneInput = useRef();

  const handleLogin = () => {
    const data = {
      phone: phoneInput.current.value,
      email: emailInput.current.value,
    };
    loginAdmin(data);
  };
  useEffect(() => {
    if (isError) {
      phoneInput.current.value = "";
      emailInput.current.value = "";
    }
  }, [isError]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="relative flex text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 ">
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
        <div className="relative  sm:w-96 mx-auto text-center">
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-green-400 rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium text-lg"
                  placeholder="enter email"
                  ref={emailInput}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="font-bold mb-1 text-gray-700 block"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium text-lg"
                  placeholder="enter phone"
                  ref={phoneInput}
                />
              </div>
              <div className="flex justify-center items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white py-2 px-10 rounded-lg hover:bg-green-600 text-2xl"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
