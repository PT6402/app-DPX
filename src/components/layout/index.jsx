/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { DashboardLayout, FormLayout, OtherLayout } from "./layouts";
import useUUID from "hooks/useUUID";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const { checkValidateUUID } = useUUID();

  const location = useLocation();
  const pathname = location.pathname.split("/");
  console.log(pathname);
  const handleCheckLayout = (pathname) => {
    switch (pathname[2]) {
      case "vip":
      case "ctn_dt":
      case "add_admin":
        return <DashboardLayout />;
      case "user":
        return pathname.length == 3 && checkValidateUUID(pathname[3]) ? (
          <FormLayout />
        ) : (
          <Navigate to={"/app-DPX-deploy"} />
        );
      default:
        return <OtherLayout />;
    }
  };
  return (
    <>
      <ToastContainer />

      <div className=" dark:bg-boxdark-2 dark:text-bodydark">
        <div className=" flex h-screen overflow-hidden">
          {handleCheckLayout(pathname)}
        </div>
      </div>
    </>
  );
};

export default Layout;
