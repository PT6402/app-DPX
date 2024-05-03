import HeaderStep from "components/model/FormStep/common/HeaderStep";
import Next_Submit from "components/model/FormStep/common/Next_Submit";
import Previous from "components/model/FormStep/common/Previous";
import { Outlet } from "react-router-dom";

export default function FormLayout() {
  return (
    <>
      <div className="flex flex-col flex-1">
        <HeaderStep title />
        <div className="  relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <Outlet />
            </div>
          </main>
        </div>
        <div className="bottom-0 left-0 right-0 py-5 bg-white shadow-md">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex justify-between">
              <Previous />
              <Next_Submit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
