import { TbFileImport } from "react-icons/tb";
import useExcel from "../../../hooks/useExcel";
import { useSelector } from "react-redux";

export default function Header() {
  const dataExcel = useSelector((state) => state.excelSlice);
  const { readerFileExcelFull } = useExcel();
  const handleImportFile = (e) => {
    let fileType = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        readerFileExcelFull(selectedFile);
        e.target.value = null;
      }
    } else {
      console.log("error");
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <div className=" px-5 pl-1  mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
            <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
              {dataExcel?.data?.name_DT_CTN && (
                <div className="p-2 border-2 rounded-lg text-6xl w-full flex items-center justify-center text-red-500">
                  {dataExcel?.data?.name_DT_CTN.replace("|", " ")}
                </div>
              )}

              {/* <SelectComponent
                options={optionDT_CTN}
                getValueSelect={getValueSelect}
                selectRef={selectRef}
                value={value}
                placeholder={"type ?"}
                isDisabled={value != null}
              />

              {value != null && (
                <button
                  type="submit"
                  className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 text-xl"
                  onClick={() => {
                    setValue(null);
                    dispatch(clear());
                  }}
                >
                  Clear
                </button>
              )} */}
            </div>
          </h1>
        </div>
        <div className="overflow-hidden flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 relative">
          <button
            className={`bg-indigo-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-500 focus:outline-none border-2 cursor-pointer `}
          >
            <span className=" flex items-center justify-center  leading-none gap-2 cursor-pointer">
              <TbFileImport
                // color={
                //   type == null || type == "" || data != null ? "" : "white"
                // }
                color="white"
                size={20}
              />
              <span
                // className={`title-font font-medium ${
                //   type == null || type == "" || data != null
                //     ? ""
                //     : "text-white font-bold"
                // }`}
                className="title-fold text-white font-bold"
              >
                Import file
              </span>
            </span>
          </button>
          <input
            type="file"
            onChange={(e) => handleImportFile(e)}
            className={`cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t `}
            // disabled={type == null || type == "" || data != null}
          />
        </div>
      </div>
    </section>
  );
}
