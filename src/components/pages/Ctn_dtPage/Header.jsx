import { TbFileImport } from "react-icons/tb";
import useExcel from "../../../hooks/useExcel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateType } from "context/excelSlice";
export default function Header() {
  const { readerFileExcel } = useExcel();
  const { type, data } = useSelector((state) => state.excelSlice);
  const [typeUser, setType] = useState(type || "");
  const dispatch = useDispatch();
  const handleImportFile = (e) => {
    let fileType = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        readerFileExcel(selectedFile);
        e.target.value = null;
      }
    } else {
      console.log("error");
    }
  };
  const handleSetType = () => {
    dispatch(updateType(typeUser));
  };
  useEffect(() => {
    if (type == null) {
      setType("");
    }
  }, [data]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
            <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
              <label
                htmlFor="inline-input-label-with-helper-text"
                className="block text-xl font-medium dark:text-white whitespace-nowrap"
              >
                ĐT/CTN
              </label>
              <input
                type="email"
                id="inline-input-label-with-helper-text"
                className="max-w-xs py-3 px-4 block w-full border-gray-200 rounded-lg text-2xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
                // placeholder="you@site.com"
                aria-describedby="hs-inline-input-helper-text"
                value={typeUser}
                onChange={(e) => setType(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 text-xl"
                onClick={handleSetType}
              >
                Save
              </button>
            </div>
          </h1>
        </div>
        <div className="overflow-hidden flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 relative">
          <button
            className={`bg-${
              type == null || type == "" ? "gray" : "green"
            }-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-${
              type == null || type == "" ? "gray" : "green"
            }-200 focus:outline-none border-2 cursor-pointer`}
          >
            <span className=" flex items-start  leading-none gap-2 cursor-pointer">
              <TbFileImport />
              <span className="title-font font-medium">Import file</span>
            </span>
          </button>
          <input
            type="file"
            onChange={(e) => handleImportFile(e)}
            className={`cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t `}
            disabled={type == null || type == "" || data != null}
          />
        </div>
      </div>
    </section>
  );
}
