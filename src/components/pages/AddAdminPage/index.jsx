import Loading from "components/common/Loading";
import useAdmin from "hooks/useAdmin";
import { useRef } from "react";

export default function AddAdminPage() {
  const { addAdmin, isLoading } = useAdmin();
  const nameInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();
  const handleAddAdmin = async () => {
    const data = {
      name: nameInput.current.value,
      phone: phoneInput.current.value,
      email: emailInput.current.value,
    };
    await addAdmin(data);
    nameInput.current.value = "";
    phoneInput.current.value = "";
    emailInput.current.value = "";
  };
  return (
    <div className="relative">
      {isLoading && <Loading />}
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-xl font-semibold leading-6 text-gray-900 "
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:leading-6"
                ref={nameInput}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-xl font-semibold leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:leading-6"
                ref={phoneInput}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-xl font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6 text-xl"
                ref={emailInput}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="block w-full rounded-md bg-indigo-600 px-4 py-5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleAddAdmin}
          >
            Add Admin
          </button>
        </div>
      </div>
    </div>
  );
}
