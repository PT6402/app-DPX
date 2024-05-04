import { useSelector } from "react-redux";
import Header from "./Header";
import ItemUser from "./ItemUser";

export default function Ctn_dtPage() {
  const dataExcel = useSelector((state) => state.excelSlice);
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-2 ">
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
