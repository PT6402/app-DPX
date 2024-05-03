import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ItemUser from "./ItemUser";
import { clear } from "context/excelSlice";

export default function Ctn_dtPage() {
  const dataExcel = useSelector((state) => state.excelSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {dataExcel.data != null && (
            <button
              type="submit"
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 "
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
          )}
          <div className="flex flex-wrap -m-2 mt-5">
            {dataExcel.data != null &&
              dataExcel.data.map((item) => (
                <ItemUser key={item.phone} dataItem={item} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
