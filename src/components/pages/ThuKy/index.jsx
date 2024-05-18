import { useSelector } from "react-redux";
import Header from "./Header";
import ItemUser from "./ItemUser";

export default function ThuKy() {
  const dataExcel = useSelector((state) => state.excelSlice);
  const type = dataExcel.data?.name_DT_CTN;
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-2 ">
            {dataExcel.data?.data != null &&
              dataExcel.data.data.map((item, i) => (
                <ItemUser key={i} dataItem={item} type={type} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
