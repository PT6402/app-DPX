import { useDispatch, useSelector } from "react-redux";
import * as XLSX from "xlsx";
import { addData, addWorkShhet } from "../context/excelSlice";
import { ExcelFormat } from "../util/ExcelFormat";
const useExcel = () => {
  const dispatch = useDispatch();
  const worksheet = useSelector((state) => state.excelSlice?.worksheet);

  const readerFileExcel = (file) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      const workboot = XLSX.readFile(e.target.result);
      const worksheetName = workboot.SheetNames[0];
      const worksheet = workboot.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      dispatch(addWorkShhet(worksheet));
      dispatch(addData(data));
    };
  };
  const handleDone = () => {
    XLSX.utils.sheet_add_aoa(worksheet, [
      ["first row after data", 1],
      ["second row after data", 2],
    ]);
  };

  const readerFileExcelFull = (file) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = (e) => {
      const workboot = XLSX.readFile(e.target.result);
      const worksheetName = workboot.SheetNames[0];
      const worksheet = workboot.Sheets[worksheetName];
      const data1 = XLSX.utils.sheet_to_txt(worksheet);
      const dataFormat = ExcelFormat(data1.split("\n"));
      dispatch(addWorkShhet(worksheet));
      dispatch(addData(dataFormat));
    };
  };
  return {
    readerFileExcelFull,
    readerFileExcel,
    handleDone,
  };
};

export default useExcel;
