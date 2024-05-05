// import { DialogComponet } from "components/common";
// import Loading from "components/common/Loading";
// import HeaderStep from "components/model/FormStep/common/HeaderStep";
// import Next_Submit from "components/model/FormStep/common/Next_Submit";
// import Previous from "components/model/FormStep/common/Previous";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { DialogComponet } from "../../common";
import Loading from "../../common/Loading";
import Previous from "../../model/FormStep/common/Previous";
import Next_Submit from "../../model/FormStep/common/Next_Submit";
// import HeaderStep from "../../model/FormStep/common/HeaderStep";

export default function FormLayout() {
  const [isShow, setIsShow] = useState();
  const { isLoading } = useSelector((state) => state.loadingSlice);
  const { isOpen } = useSelector((state) => state.dialogSlice);
  const { infoUser } = useSelector((state) => state.userSlice);
  const handleShow = () => {
    if (infoUser) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  useEffect(() => {
    handleShow();
  }, [isOpen]);
  return (
    <>
      {" "}
      <DialogComponet />
      <div className="relative flex flex-col flex-1">
        {isLoading && <Loading />}
        {/* {isShow && <HeaderStep />} */}
        <div className="  relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden ">
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              <Outlet />
            </div>
          </main>
        </div>
        {isShow && (
          <div className="bottom-0 left-0 right-0 py-5 bg-white shadow-md">
            <div className="max-w-3xl mx-auto px-4">
              <div className="flex justify-between">
                <Previous />
                <Next_Submit />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
